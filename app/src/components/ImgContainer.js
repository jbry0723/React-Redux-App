import React, {useEffect} from "react"
import {connect} from 'react-redux'
import {getPic} from "../actions/index"


const ImgContainer=(props)=>{

    useEffect(()=>{
        props.getPic()
    },[]);
    
    const handleClick=()=>{    
        props.getPic()
    }
    console.log(props.state)

    return(
        <div>
            <button className="dogButton" onClick={handleClick}>Click for rando pupper pic!</button>
            <div className="imgDiv">
            <img src={props.state.dogPicData} />
            </div>
        </div>
    )
}

const mapStateToProps=state=>{
    return {state:state}
}

export default connect (mapStateToProps,{getPic})(ImgContainer)