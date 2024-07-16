import { LuLanguages } from "react-icons/lu";
import { RxPerson } from "react-icons/rx";
import "./Navbar.css";

const Navbar = () => {
  return (
      <nav> 
        <img src="/src/assets/logo.png" alt="" />
        <div className="nav-part2">
                <h4>Properties</h4>
                <h4>My Dashboard/Activity</h4>
                <h4>List your Property</h4>
                <h4>Contact Us</h4>
                <h4>More</h4>
                <h4>|</h4>
                <h4><LuLanguages/></h4>
                <h4><RxPerson/></h4>
            </div>
      </nav>
  )
}

export default Navbar