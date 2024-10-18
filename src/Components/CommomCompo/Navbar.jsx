import { Link } from "react-router-dom"


function Navbar(){
    return <>
  
  <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/member">Members</Link>
        <Link to="/club">Clubs</Link>
        <Link to="#forms">Forms</Link>
    </div>
    </>
}
export default Navbar