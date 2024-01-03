import { useState } from "react";
import { data } from "./data";
import logo from './images/logo.svg';
import avatar from './images/image-avatar.png';
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <header>
      <div className="flex items-center justify-between p-8 border-b">
        <img src={logo} alt=""/>

        <nav>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>

      <div>
        <ul>
          <li><button><IoCartOutline /></button></li>
          <li><img src={avatar} alt="" /></li>
        </ul>
      </div>
      </header>
    </>
  )
}


function App() {

  const [products] = useState(data);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
