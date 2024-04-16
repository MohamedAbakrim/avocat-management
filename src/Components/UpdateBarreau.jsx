import { useLocation } from "react-router-dom";
import Header from "../Header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBarreau } from "../actions/barreaux";

const UpdateBarreau = ()=>{
    const dispatch = useDispatch()
    const location = useLocation()
    const bar = location.state
    const [intitule, setIntitule] = useState(bar.intitule)
    const [ville, setVille] = useState(bar.ville)
    const handleSubmit = (e)=>{
        e.preventDefault();
        const updatedBarreau = {id:bar.id, intitule, ville}
        dispatch(updateBarreau(updatedBarreau))
    }
    return(
        <div className="barreau">
            <Header/>
            <div className="container center-container">
                <form className="form" method="post" action="" onSubmit={(e)=>handleSubmit(e)}>
                    <input className="form-control" type="text" name="intitule" id="intitule" value={intitule} placeholder="Enter your intitule" onChange={(e)=>setIntitule(e.target.value)}/>
                    <input type="text" className="form-control" name="ville" id="ville" placeholder="Enter your ville" value={ville} onChange={(e)=>setVille(e.target.value)}/>
                    <input type="submit" className="btn btn-success" value="update"/>
                </form>
            </div>
        </div>
    )
}
export default UpdateBarreau;