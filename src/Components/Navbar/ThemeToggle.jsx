"use client"

export default function ThemeToggle({ currentTheme, onClick }) {
  return (
    <div className="flex justify-center">
      <div
        className={`relative w-24 h-10 flex items-center p-1 rounded-full cursor-pointer transition-all duration-500 border-2 ${
          currentTheme === "LIGHT" ? "bg-gray-900" : "bg-gray-600 border-gray-600"
        }` }
        onClick={onClick}
      >
        <span className="text-2xl">🌙</span>
        <span className="text-2xl ml-auto">☀️</span>
        <div
          className={`absolute w-7 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
            currentTheme === "LIGHT"
              ? "translate-x-14 rotate-180 bg-gray-900 border-2"
              : "translate-x-0 bg-gray-600 border-2 border-gray-400"
          }`}
        ></div>
      </div>
    </div>
  );
}
