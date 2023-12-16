import React ,{useEffect}from 'react'
import {useSearchParams} from 'react-router-dom'

// usesearchparam is a hook
function Routing() {

    const [searchParams, setSearchParams] = useSearchParams();  // whatever i get from search parameters will be stored in searchParams
    console.log([...searchParams.entries()]); //searchparams is Map form and to console we use spread operator and .entries is a iterator
  
    useEffect(() => {
        setSearchParams({search:"abc"});
    }, [])
    
return (
    <>
        <h1>Routing</h1>
        <input type="text" onChange={e=>setSearchParams({search:e.target.value})} />
        <h2>{searchParams.get('age')}</h2>  {/*.get is func which ret value of  key asked(from searchparams) here we asked age*/}
        <h2>{searchParams.get('search')}</h2>  {/*.get is func which ret value of  key asked(from searchparams) here we asked age*/}
    </>
  )
}

export default Routing