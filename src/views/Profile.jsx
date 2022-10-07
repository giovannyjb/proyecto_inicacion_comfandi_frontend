import Header from '../components/profile/header/Header'
import Nav from '../components/profile/nav/Nav'
import About from '../components/profile/about/About'
import Experience from '../components/profile/experience/Experience'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getValue } from '../common/storage'


const Profile = () => {
    let { id } = useParams();
    const [infoUser, setInfoUser] = useState({
        "id": "",
        "username": "",
        "email": "",
        "first_name": "",
        "last_name": "",
        "about_me": {
        },
        "experiences": []
    })

    useEffect(() => {

        (async () => {
            const value = getValue('authSession');
            const result = await axios.get("http://127.0.0.1:8000/api/user/find_all/?id=" + id, {
                headers: {
                    'Authorization': 'Token ' + value.token
                }
            })

            setInfoUser(result.data)
            console.log(value.data)


        })()
    }, [id])
    return (
        <>

            <Header
                name={infoUser.first_name + " " + infoUser.last_name}
                job_description={infoUser.about_me.job_description ?? ""}
                img={"http://127.0.0.1:8000" + infoUser.about_me.img_profile ?? ""}
            />
            <Nav></Nav>
            <About experience={infoUser.about_me.experience ?? ""}
                clients={infoUser.about_me.clients ?? ""}
                projects={infoUser.about_me.projects ?? ""}
                description={infoUser.about_me.description ?? ""}
            />
            <Experience
                frontend={infoUser.experiences.filter((experience) => experience.type === 0)}
                backend={infoUser.experiences.filter((experience) => experience.type === 1)}
            />
        </>
    )
}

export default Profile;