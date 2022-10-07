import React from 'react'

const CTA = (props)=>{

    return (
        <div className="cta">
            <a href={props.cv} download className='btn'>Donwload CV</a>
            <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
    )

}

export default CTA;