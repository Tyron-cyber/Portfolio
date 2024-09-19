import Logo from "./Logo.js";
import { Link } from "react-router-dom";

function Navbar(){
  

    return (
        <div>
             <nav>
                  <div className="logo">
                  <Logo fillColor= "black" /></div>  
                  <div className="navButtons" >
            
                <button>
                 <Link to="/">Home</Link>
                </button>

                <button>
                <Link to="/about">About me</Link>
                </button>

                    <button>
                    Gallery
                    </button>
                    <button>
                    Contact 
                    </button>
                  </div>
                  <div className="download">
                    <button > Download CV</button>
                  </div>
            </nav>
        </div>
    )
}
export default Navbar;