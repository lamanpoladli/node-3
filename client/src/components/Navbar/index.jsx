import React from 'react'
import navstyle from "./index.module.css"
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
                <header>
                    <nav className={navstyle.nav}>
                        <div className={navstyle.maindiv}>
                            <div className={navstyle.brandname}>
                            <Link style={{textDecoration:"none",color:"black"}} to="/">Home</Link>
                            </div>
                            <div>
                                <ul className={navstyle.ul}>
                                    <li><Link style={{textDecoration:"none",color:"black"}} to="/authors">Authors</Link></li>
                                    <li><Link style={{textDecoration:"none",color:"black"}} to="/add-author">Add Author</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div>

                        </div>
                    </nav>
                </header>            
        </>

    )
}

export default Navbar