import Clubs from './PAges/Clubs'
import Home from './PAges/Home'
import Navbar from './Components/CommomCompo/Navbar'
  import Header from './Components/CommomCompo/Header'
  import MemberName from './Components/HomeCompo/MemberName'
  import ClubHead from './Components/HomeCompo/ClubHead'
  import MemPhoto from './Components/HomeCompo/MemPhoto'
  import Footer from './Components/HomeCompo/Footer'
  import Text2 from './Components/HomeCompo/Text2'
  import ClubPhoto from './Components/HomeCompo/ClubPhoto'
    import ClubName from './Components/HomeCompo/ClubName'
    import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

  import Text from './Components/HomeCompo/Text'
import MainHeading from './Components/CommomCompo/MainHeading'
import './App.css'
import Member from './PAges/Member'

function App() {
  return <div>
 <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/> 
  <Route path='/club' element={<Clubs/>}/> 
  <Route path='/member' element={<Member/>}/> 
</Routes>
 </BrowserRouter>
{/* */}

</div>
}

export default App
