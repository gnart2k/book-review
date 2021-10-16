
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

   const [menu, setMenu] = useState(false);

   return (
      <nav className="navbar container d-flex align-items-center justify-content-between p-3">
         <div className="logo">
            <Link className="text-logo" to="/">
               <h1 className="lh-1">FPTU Book Review</h1>
            </Link>
         </div>

         <button
            className={menu ? "hamburger is-active" : "hamburger"}
            onClick={() => setMenu(!menu)}
         >
            <span></span>
            <span></span>
            <span></span>
         </button>
         {
            menu ? (
               <div className="menu is-active flex-column col-lg-4 col-md-12 col-sm-12">
                  <Link to="/posts/contest" key="contest" className="option"> Các bài dự thi</Link>
                  <Link to="/posts/fptBook" key="fptBook" className="option"> Các đầu sách của thư viện FPT</Link>
                  <Link to="/posts/other" key="other" className="option"> Các đầu sách khác</Link>
               </div>
            ) : (<></>)
         }
      </nav>
   )
}

export default Navbar
