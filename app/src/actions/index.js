import axios from 'axios'
export const FETCH_DOG_PIC="FETCH_DOG_PIC"

export const getPic=()=>dispatch=>{
    console.log("getdogpic firing")
    
    axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(resp=>{
            console.log(resp.data.message)
            dispatch({type:FETCH_DOG_PIC, payload: resp.data.message})
        })
        .catch(err=>{
            console.log (err)
        })
    
}