import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteBarreau } from "../actions/barreaux";
import { Link } from "react-router-dom";

const Barreau = ()=>{
    const dispatch = useDispatch();
    const barreaux = useSelector((state)=>state.barreaux);
    return(
        <div className="barreau">
            <Header/>
            <div className="container">
                <table className="table table-striped table-hover table-responsive">
                    <thead  className="table-primary">
                        <tr>
                            <th>Intitule</th>
                            <th>Ville</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        barreaux.map((bar)=>{
                            return(
                                <tr key={bar.id}>
                                    <td>{bar.intitule}</td>
                                    <td>{bar.ville}</td>
                                    <td><Link to="/update" state={bar} className="btn btn-success">update</Link><button className="btn btn-danger" onClick={()=>dispatch(deleteBarreau(bar.id))}>delete</button></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                    <tfoot className="table-primary">
                        <tr>
                            <th>Intitule</th>
                            <th>Ville</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}
export default Barreau