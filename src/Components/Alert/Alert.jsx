export default function Alert({ currentTheme, icon, message,onclose }) {
    return (
      <div className={`fixed bottom-5 right-5 max-w-xl ${currentTheme === "LIGHT" ? "bg-gray-600" : "bg-gray-950"} rounded-lg flex items-center p-3 cursor-pointer`} onClick={onclose}>
        <span className="p-5 text-6xl">{icon}</span>
        <span className={`${currentTheme === "LIGHT" ? "text-gray-100" : "text-gray-400"} text-xl`}>{message}</span>
      </div>
    );
  }
  