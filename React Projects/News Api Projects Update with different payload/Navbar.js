import { Menu, Newspaper } from "lucide-react";
import { useState } from "react";

export default function Navbar({onClick, params}){
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="icon">
                <button onClick={() => onClick("general")}>
                    <Newspaper size={30} stroke="white"/>
                </button>
            </div>
            <div className="title">
                World News
            </div>
            <ul className="navLinks">
                <li><button className={params.category === "science" ? "active" : ""} onClick={() => onClick("science")}>science</button></li>
                <li><button className={params.category === "technology" ? "active" : ""} onClick={() => onClick("technology")}>technology</button></li>
                <li><button className={params.category === "business" ? "active" : ""} onClick={() => onClick("business")}>business</button></li>
                <li><button className={params.category === "sports" ? "active" : ""} onClick={() => onClick("sports")}>sports</button></li>
                <li><button className={params.category === "health" ? "active" : ""} onClick={() => onClick("health")}>health</button></li>
                <li><button className={params.category === "entertainment" ? "active" : ""} onClick={() => onClick("entertainment")}>entertainment</button></li>
            </ul>
            <div className="menuIcon">
                <button onClick={() => setOpen(open => open ? false : true)}>
                    <Menu size={30} stroke="white"/>
                </button>
                <ul className="menuLinks" style={{display: open ? "flex" : "none"}}>
                <li><button onClick={() => {
                    setOpen(open => open ? false : true) ;
                    onClick("science");
                    }}>science</button></li>
                <li><button onClick={() => {
                    setOpen(open => open ? false : true) ;
                    onClick("technology");
                    }}>technology</button></li>
                <li><button onClick={() => {
                    setOpen(open => open ? false : true);
                    onClick("business")
                    }}>business</button></li>
                <li><button onClick={() => {
                    setOpen(open => open ? false : true) ;
                    onClick("sports");
                    }}>sports</button></li>
                <li><button onClick={() => {
                    setOpen(open => open ? false : true) ;
                    onClick("health");
                    }}>health</button></li>
                <li><button onClick={() => {
                    setOpen(open => open ? false : true) ;
                    onClick("entertainment");
                    }}>entertainment</button></li>
            </ul>
            </div>
        </nav>
    )
}