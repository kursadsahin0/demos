import React, { useState } from 'react';
import { items } from "../Components/MenuItem";
import '../App.css'
import { AiOutlineClose } from 'react-icons/ai';
function Menu({ isOpen, onChange }) {
  return (
    <div>
      <div className={`Menu ${isOpen && "open"}`}>
        <span
          className="material-icons btn-close"
          onClick={() => onChange(false)}
        >
          <AiOutlineClose />
        </span>
        <div className="Menu-items">
          {items.map((item, index) => (
            <a href={item.itemLink} key={index}>
              {item.itemText}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
