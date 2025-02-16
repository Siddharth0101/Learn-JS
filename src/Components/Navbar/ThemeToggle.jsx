export default function ThemeToggle({ currentTheme, onClick }) {
  return (
    <div className="flex justify-end">
      <div
        className={`relative w-24 h-10 flex items-center p-1 rounded-full cursor-pointer transition-all duration-500 shadow-md ${
          currentTheme === "RETRO" ? "bg-indigo-400" : "bg-gray-800"
        }`}
        onClick={onClick}
      >
        <span className="text-2xl">🌙</span>
        <span className="text-2xl ml-auto">🎸</span>
        <div
          className={`absolute w-8 h-9 rounded-full flex items-center justify-center text-3xl transition-all duration-500 shadow-sm ${
            currentTheme === "RETRO"
              ? "translate-x-14 rotate-180 bg-orange-400 border-2 border-yellow-300"
              : "translate-x-0 bg-gray-600 border-2 border-gray-400"
          }`}
        ></div>
      </div>
    </div>
  );
}
