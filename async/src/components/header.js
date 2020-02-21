import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../actions'

function Header(props){

    const handleGetData = e =>{
        e.preventDefault()
        props.getData()
    }

    return(
        <div>
            <h1>RICK AND MORTY ASYC CARD LIST</h1>
            <div>
 {props.isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button onClick={handleGetData}>Get Data</button>
      )}

</div>
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        isFetchingData: state.isFetchingData
    }
}



export default connect(
    mapStateToProps,{getData}
) (Header)