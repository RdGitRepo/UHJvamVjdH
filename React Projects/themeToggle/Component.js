import { MoonStar, Sun, SunMoon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

let mount = false;
export default function Component(){
    const [theme, setTheme] = useState("light");
    const sunmoon = useRef(null);

    useEffect(() => {
        if(mount){
            console.log("h")
            const computed = getComputedStyle(document.body).getPropertyValue("--rotation");
            document.body.style.setProperty("--rotation", `${parseFloat(computed) + 180}deg`)
        }
        mount = true;

    },[theme])


    function handleTheme(){
        document.body.classList.toggle("dark");
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return(
        <>
            <h1>Theme Toggle</h1>
            <button onClick={() => handleTheme()} className="themeBtn">
                <SunMoon size={30}/>
                {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            <div className="sunMoon" ref={sunmoon}>
                <Sun size={32}/>
                <MoonStar />
            </div>
        </>
    )
}