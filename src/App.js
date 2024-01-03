import { useState } from "react";
import { data } from "./data";
import logo from './images/logo.svg';
import avatar from './images/image-avatar.png';
import {FaCart} from 'react-icons';

function Header() {
  return (
    <>
      <div>
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
          <li><button><FaCart /></button></li>
          <li><img src={avatar} alt="" /></li>
        </ul>
      </div>
    </>
  )
}


function App() {

  const [products] = useState(data);

  return (
    <>
      <h1>{data.length}</h1>
    </>
  );
}

export default App;
