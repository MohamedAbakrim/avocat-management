import { useState, useEffect } from "react"
import axios from "axios"

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        const getData = async ()=>{
            await axios.get('https://jsonplaceholder.typicode.com/users')
                .then((data) => setUsers(data.data))
        }
        getData()
    }, [])
    return(
        <div className="container">
            {users.map((user) => {
                return(
                    <div key={user.id} className="bg-secondary m-4 p-4 border">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.username}</p>                        
                    </div>
                )
            })}
        </div>
    )
}
export default Users;