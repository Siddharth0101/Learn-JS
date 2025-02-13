import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return <nav>
        <div className="w-full bg-indigo-900 p-8">
            <ThemeToggle/>
        </div>
    </nav>
}