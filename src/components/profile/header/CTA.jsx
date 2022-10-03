import React from 'react'
import CV from '../../../assets/documents/Hoja_de_vida_Gio_Jaramillo_2022.pdf'

const CTA = ()=>{

    return (
        <div className="cta">
            <a href={CV} download className='btn'>Donwload CV</a>
            <a href="#contact" className='btn btn-primary'> Let's talk</a>
        </div>
    )

}

export default CTA;