import React, { useState } from 'react'
import logo from "./image/logo.png"
import logoTitle from "./image/logoTitle.png"
import toonID from './image/toonID.jpg'
import Data from './data.json';
import Menu from './Components/Menu'
import { SlDocs } from "react-icons/sl";
import { FaPlay } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const sizeValue = 14 * 3;
  return (
    <>
      <div className="app" >
        <div className="logos">
          <img src={logo} alt="logo" className="logo" />
          <img src={logoTitle} alt="logo" className="logoTitle" />
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search.." className="search" onChange={(e) => setSearchTerm(e.target.value)} />

        </div>
        <div className="toonIDs">
          <img src={toonID} alt='toonID' className="toonID" />
          <h1 className="logIn">LOGIN</h1>
        </div>


        <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
        <GiHamburgerMenu className='menuIcon' size={sizeValue}/>
      </span>
      <Menu  isOpen={isOpen} onChange={setIsOpen}></Menu>
      </div>




      <div className="title">
        <p>Cross-chain <span>earning*</span> platform</p>
      </div>


      <div className="dataContainer">
        {
          Data.filter((val) => {
            if (searchTerm == "") {
              return val
            }
            else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val
            }
          }).map((val) => {
            return (
              <div className='image' key={val.id}>
                <img src={val.image} className="image" />
              </div>
            )
          })
        }

      </div>





















      <div className="btn">
        <button className="launch">Launch App  <FaPlay /></button>
        <button className="read">Read Docs  <SlDocs /></button>
      </div>
    </>
  );
}

export default App;
