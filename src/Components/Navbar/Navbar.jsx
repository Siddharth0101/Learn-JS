import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { ThemeActions } from "@/Store/ThemeSlice";

export default function Navbar() {
    const themeSelect=useSelector((state)=>state.Theme.theme)
    const dispatch=useDispatch()
    
    const toggleTheme=()=>{
        dispatch(ThemeActions.ChangeTheme(themeSelect === "DARK" ? "LIGHT" : "DARK"));
    }

    return <nav>
        <div className={`w-full ${themeSelect=="LIGHT"?"bg-gray-600":"bg-gray-900"} p-3`}>
            <ThemeToggle currentTheme={themeSelect} onClick={toggleTheme}/>
        </div>
    </nav>
}