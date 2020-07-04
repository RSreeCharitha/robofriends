import React from 'react'
import 'tachyons'

function Card({id, name, email}){
    return(
        <div className='bg-light-pink dib br3 pa3 ma2 grow shadow-5 bw2'>
            <img src = {`https://robohash.org/t${id}?100x100`} alt = 'lol'/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Card;