import { useEffect } from "react";

const Header = ()=>{
    useEffect(()=>{
        let nav = document.querySelector('nav');
        let menu = document.getElementById('menu');
        menu.addEventListener('click',function(){
            nav.classList.toggle('hidden');
            if(document.querySelector('.hidden')){
                document.querySelector('.home').style.width = "100%";
                menu.setAttribute('src', './images/menu.png')
            }else{
                document.querySelector('.home').style.width = "79.9%";
                menu.setAttribute('src', './images/png5.png')
            }
        })     
    },[])
    return(
        <header>
            <div className="container">
                <h4>Logo</h4>
                <img id="menu" width="20px" src="./images/png5.png" alt="menu"/>
            </div>
        </header>
    );
}

export default Header;