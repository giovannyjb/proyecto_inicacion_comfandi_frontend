import axios from "axios";
import { useCallback, useState } from "react";
import { getValue } from "../../../common/storage";
import "./modal.css"

const ModalUpload = () => {

    const [data, setData] = useState({ file: "", img: "", cv: "" });
    const handleChange = useCallback(
        (value) => {
            setData((state) => ({ ...state, ...value }));
        },
        [setData]

    );

    const submit = () => {
        const value = getValue('authSession');

        const form = new FormData();
        form.append('file', data.file)
        form.append('img', data.img)
        form.append('cv', data.cv)
        console.log(data)
        const result = axios.post("http://127.0.0.1:8000/api/user/load_data/", form, {
            headers: {
                'Authorization': 'Token ' + value.token
            }
        })
        console.log(result.data)
    }

    return (<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content modalBackG">
                <div className="modal-header">
                    <h5 className="title" id="exampleModalLabel">Upload a User</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">

                    <div className="cont_inputs">
                        <label >Txt</label>
                        <input type="file" id="inputGroupFile01" onChange={(e) => { handleChange({ file: e.target.files[0] }) }} />
                    </div>
                    <div className="cont_inputs">
                        <label >Profile Img</label>
                        <input type="file" id="inputGroupFile01" onChange={(e) => { handleChange({ img: e.target.files[0] }) }} />
                    </div>
                    <div className="cont_inputs">
                        <label >Cv</label>
                        <input type="file" id="inputGroupFile01" onChange={(e) => { handleChange({ cv: e.target.files[0] }) }} />
                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={submit}>Save changes</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ModalUpload;