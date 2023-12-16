import axios from 'axios'
import React, { Component } from 'react'

export default class ComponentA extends Component {
  constructor(){
      super();
      this.state = {
          name: "yash",
          id:1,
          userdata: null
      }
      
      this.BASE_URL = "https://jsonplaceholder.typicode.com/users/";
  }
  
  render() {
    const {id} = this.state;
    console.log("render",id);
    const updateName = e=>{
        const {target:{value}} = e;
        console.log(value);
        this.setState({name:value});
      }
    const { msg } = this.props;
    const {name} = this.state;
    return (
        <React.Fragment>
            <h1>{msg}</h1>
            <input type="text" placeholder='Enter Name' onChange={updateName}/>
            <input type="text" placeholder='Enter Name' onChange={({target:{value}}) => this.setState({id: value})}/>
             <h1>Hello {name},{this.id} </h1>
        </React.Fragment>
      
    )
  }
  
  async componentDidMount(){
    
    console.log("componentDidMount");
    document.title = "lerning React";
    const { id } = this.state;
    const {data} = await axios.get(this.BASE_URL + id);
    console.log(data);
    this.setState({userdata:data});
  }
  shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        console.log(nextProps);
        console.log(nextState);
        return this.state.id !== nextState.id || this.props.msg !==nextProps.msg;
  }
  componentWillUpdate(){
    console.log("computerwillupdate");
  }
  async componentDidUpdate(){
    const {id} = this.state;
    console.log("componentDidUpdate",id);
    const {data} = await axios.get(this.BASE_URL + id);
    console.log(data);
    this.setState({userdata:data, name: data.name});
  }
  componentWillUnmount(){
    console.log("componentunmount")
  }
}


