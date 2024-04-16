import { useEffect } from "react";

const Login = ()=>{
    useEffect(()=>{
        let nav = document.querySelector('nav');
        // nav.classList.add('hidden');
        nav.style.display = "none"
    }, [])
    return(
        <div className="login">
            <div className="container">
                <div className="col-6">
                    <img width="400px" src="./images/png6.png" alt="illutraion"/>
                </div>
                <form className="col-6" method="post" action="">
                    <div class="form-floating mb-3 mt-3">
                        <input className="form-control" type="text" name="username" id="username" placeholder="Enter your username"/>
                        <label for="username">Username</label>
                    </div>
                    <div class="form-floating mb-3 mt-3">
                        <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password"/>
                        <label for="password">Password</label>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Login"/>
                </form>
            </div>
        </div>
    )
}
export default Login