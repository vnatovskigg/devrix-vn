import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { BiPlusMedical } from "react-icons/bi";


const TopLi = ({text}) => {
  const [active, setActive] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (text !== "plus") {
      setClicked(!clicked);
    }
    
  }

  const handleMouseIn = () => {
    setActive(true)
  }

  const handleMouseOut = () => {
    if(!clicked) {
      setActive(false);
    }
   
  }


  useEffect(() => {
    if(clicked) {
      setActive(!active)
    }
  }, [])


  return (
    <li  onClick={handleClick} 
         onMouseEnter={handleMouseIn} 
         onMouseLeave={handleMouseOut}
         className={ clicked ? styles['list-item-active'] : styles["list-item"]}
      >
        <p>{text === "plus" ? <BiPlusMedical className={styles.icon} /> : text}</p>
        {active && text !== "plus" && (
          <div className={active ? styles.on : styles.off}></div>
        )}
    </li>
  )
};

export default TopLi;
