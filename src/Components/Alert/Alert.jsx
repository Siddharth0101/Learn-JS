export default function Alert({ currentTheme, icon, message,onclose }) {
    return (
      <div className={`w-2/12 h-12 ${currentTheme === "LIGHT" ? "bg-gray-600" : "bg-gray-950"} rounded-lg flex items-center p-3 cursor-pointer`} onClick={onclose}>
        <span className="mr-2">{icon}</span>
        <span className={`${currentTheme === "LIGHT" ? "text-gray-100" : "text-gray-400"}`}>{message}</span>
      </div>
    );
  }
  