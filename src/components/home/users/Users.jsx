import axios from "axios";
import { useEffect } from "react";
import "./users.css";
import { getValue } from "../../../common/storage";
import { useState } from "react";
import ModalUpload from "../modal/Modal";

const Users = () => {

    const [profiles, setProfiles] = useState([])
    const [search, setSearch] = useState("");
    useEffect(() => {

        (async () => {
            const  value =getValue('authSession');
            console.log(value.token)
           

            const result = await axios.get('http://localhost:8000/api/about_me', {
                headers: {
                    'Authorization': 'Token '+value.token
                }
            })
            console.log(result.data)

            setProfiles(result.data)


        })();


    }, [])

    return (
        <>
        <ModalUpload></ModalUpload>
            <section className="sect_users">
                <div className="cont_users">
                    <div className="cont_search">
                        <label htmlFor="">Buscar Perfil</label>
                        <input  type="search" id="gsearch" name="gsearch" onChange={(e)=>setSearch(e.target.value)}/>
                    </div>

                    <div className="cont_cards">
                    {
                        profiles.filter(profile => profile.job_description.toLowerCase().includes(search.toLowerCase())).map((profile) => (
                         
                            <a key={profile.id}href={"profile/"+profile.user.id} className="card">
                                <div className="clipy">
    
                                </div>
                                <div className="card_cont_img">
                                    <img src={profile.img_profile? profile.img_profile:"https://cdn.atomix.vg/wp-content/uploads/2022/07/goku-2.jpg"} alt="user" />
                                </div>
                                <div className="cont_info">
                                    <h3>{profile.user.first_name}</h3>
                                    <label htmlFor="">{profile.job_description}</label>
                                    <p>{profile.description}</p>
                                </div>
                            </a>
                    
                        ))
                    }
                    </div>

                </div>

            </section>
        </>
    )
}

export default Users;