import { useStateContext } from "../../Context/HboProvider";
import Link from "next/link";
import React from 'react'

export default function SideNav(props) {
  const globalState = useStateContext();
  React.useEffect(() => {
    if(globalState.sideNavOpen){
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  },[globalState.sideNavOpen])
  return (
    <div className={`side-nav ${globalState.sideNavOpen && "side-nav-active"}`}>
      <div
        onClick={globalState.setSideNavOpenAction}
        className="side-nav_close-btn"
      >
        <i className="fas fa-times" />
      </div>
      <ul className="side-nav_main">
        <li onClick={globalState.setSideNavOpenAction}>
          <Link href="/">Home</Link>
        </li>
        <li onClick={globalState.setSideNavOpenAction}>
          <Link href="/movie">Movies</Link>
        </li>
        <li onClick={globalState.setSideNavOpenAction}>
          <Link href="/tv">Series</Link>
        </li>
      </ul>
    </div>
  );
}
