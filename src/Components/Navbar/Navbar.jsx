import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { ThemeActions } from "@/Store/ThemeSlice";
import Alert from "../Alert/Alert";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [showAlert,setShowAlert]=useState(false)

    const themeSelect = useSelector((state) => state.Theme.theme);
    const dispatch = useDispatch();
    
    const toggleTheme = () => {
        localStorage.setItem("theme", themeSelect === "DARK" ? "LIGHT" : "DARK");
        dispatch(ThemeActions.ChangeTheme(themeSelect === "DARK" ? "LIGHT" : "DARK"));
        setShowAlert(true)
    };

    useEffect(()=>{
        const timer = setTimeout(() => setShowAlert(false), 3000);
        return () => clearTimeout(timer);
    },[showAlert])

    return (
        <nav>
            <div className={`w-full ${themeSelect === "LIGHT" ? "bg-gray-500" : "bg-gray-800"} p-3`}>
                <ThemeToggle currentTheme={themeSelect} onClick={toggleTheme} />
              {showAlert &&   <Alert currentTheme={themeSelect} onclose={()=>setShowAlert(false)}/>}
            </div>
        </nav>
    );
}
