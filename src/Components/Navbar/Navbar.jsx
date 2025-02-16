"use client"

import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { ThemeActions } from "@/Store/ThemeSlice";

export default function Navbar() {
    const themeSelect=useSelector((state)=>state.Theme.theme)
    const dispatch=useDispatch()
    console.log(themeSelect);
    
    const toggleTheme=()=>{
        dispatch(ThemeActions.ChangeTheme(themeSelect === "DARK" ? "RETRO" : "DARK"));
    }

    return <nav>
        <div className="w-full bg-indigo-900 p-8">
            <ThemeToggle currentTheme={themeSelect} onClick={toggleTheme}/>
        </div>
    </nav>
}