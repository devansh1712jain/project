    import React from 'react'
    import "./style.css"
    import Card from 'react-bootstrap/Card';
    import { Button, Col } from 'react-bootstrap';

    function User({user}) {
        // console.log(props);
        // const {user} = props;
        const {firstName,id,lastName,picture,title} = user;
      return (
            // 576px 768px 992px
            <Col xs={10} sm={6} md={5} lg={4} xl={3}>
                <Card className='user'>
                    <Card.Body className='user-card'>
                        <img className ='profile' src={picture} alt="profile" />
                        <div>
                            <div style={{marginBottom:"20px"}} >{firstName}</div>
                            <Button>Add Friend</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
      )
    }
    
    export default User

    // firstName: "Valentin"
    // id: "60d0fe4f5311236168a109d4"
    // lastName: "Ortega"
    // picture: "https://randomuser.me/api/portraits/med/men/3.jpg"
    // title: "mr"