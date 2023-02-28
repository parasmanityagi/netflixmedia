// import { style } from '@mui/system'
import React, { useState } from 'react'

const Accordian = ({id, question, answer}) => {
    const [Active, setActive] = useState(false)
    return (
        <>
            <div className='accordian'>
                <h2>{question}{Active?<i onClick={()=>{setActive(!Active)}} className="bi bi-x"></i>:<i onClick={()=>{setActive(!Active)}} className="bi bi-plus"></i>}</h2>
                <span style={(Active)?{display:'flex'}:{display:'none'}}>{Active && answer}</span>
            </div>
        </>
    )
}

export default Accordian