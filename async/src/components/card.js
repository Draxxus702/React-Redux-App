import React from 'react'
import {connect} from 'react-redux'


function Card(props){
    return(
        <div className='holder'>
        {props.error ? (
            <div className='error'>{props.error}</div>
        ) : (
        props.card.map(p => <div key={p.id} className='people'>
            <img src={p.image}/>
            <p>Name: {p.name}</p>
            <p>Status: {p.status} </p>
            
            
            </div>)
        )}
        </div>
    )
}


const mapStateToProps = state =>{
    return{
        card:state.card,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
     {}
     )(Card)