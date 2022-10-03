
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = ()=>{

    return(
        <div className="header_socials">
            <a href="linkedin" target="_blank"><BsLinkedin></BsLinkedin></a>
            <a href="github" target="_blank"><BsGithub></BsGithub></a>
            <a href="instagram" target="_blank"><BsInstagram></BsInstagram></a>


         </div>
    )

}

export default HeaderSocial;