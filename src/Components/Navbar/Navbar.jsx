import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "./ThemeToggle";
import { ThemeActions } from "@/Store/ThemeSlice";
import Alert from "../Alert/Alert";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertKey, setAlertKey] = useState(0); 
  const themeSelect = useSelector((state) => state.Theme.theme);
  const dispatch = useDispatch();

  const lightModeMessages = [
    "😎 Who turned on the stadium lights? Oh wait… it's just Light Mode!",
    "🚀 Brace yourself! Light Mode has entered warp speed—engage sunglasses! 🕶️",
    "🌞 Boom! Light Mode is here. Hope you're ready for some vitamin D overdose!",
    "👀 Warning: Excessive brightness may cause extreme productivity… or blindness!",
    "💡 Congratulations! You've unlocked *Ultra Blinding Mode*. Enjoy responsibly!",
    "🔆 Light Mode: Now with 200% more retina burn. You’re welcome! 😂",
    "✨ The sun called—it wants its brightness back! But sorry, Light Mode stays!",
    "💥 BAZINGA! Light Mode activated. You’re now legally required to wear shades. 🕶️",
    "☀️ Light Mode: For those who fear the darkness… or just wanna flex their screen!",
    "🔥 Warning! Light Mode may cause unexpected energy bursts. Proceed with caution!",
  ];
  
  const darkModeMessages = [
    "🌙 Welcome to the dark side... We have cookies! 🍪",
    "🦇 Dark Mode engaged! Time to embrace your inner Batman!",
    "🕶️ You've entered stealth mode. No one can see you now… probably. 🤫",
    "🌌 Night mode on! Now you can code like a hacker in a Hollywood movie! 💻😈",
    "💀 Beware: Dark Mode users have a 99% chance of being cooler. It's science!",
    "🖤 Dark Mode: Because your eyes deserve a break… and you wanna feel mysterious!",
    "🔮 Darkness falls... but your style level just went through the roof! 🚀",
    "🌑 Alert: Dark Mode has been activated. Your screen is now officially *badass*!",
    "🦉 Dark mode activated! Your wisdom level just increased by +100 XP!",
    "👻 Ghost Mode ON. Now you can browse like a shadow in the night! 🌙",
  ];  

  const getRandomMessage = (messages) =>
    messages[Math.floor(Math.random() * messages.length)];

  const toggleTheme = () => {
    const newTheme = themeSelect === "DARK" ? "LIGHT" : "DARK";
    localStorage.setItem("theme", newTheme);
    dispatch(ThemeActions.ChangeTheme(newTheme));

    setShowAlert(true);
    setAlertKey((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 5000);
    return () => clearTimeout(timer);
  }, [alertKey]);

  return (
    <nav>
      <div
        className={`w-full ${
          themeSelect === "LIGHT" ? "bg-gray-500" : "bg-gray-800"
        } p-3`}
      >
        <ThemeToggle currentTheme={themeSelect} onClick={toggleTheme} />
        {showAlert && (
          <Alert
            key={alertKey}
            currentTheme={themeSelect}
            onclose={() => setShowAlert(false)}
            icon={themeSelect === "LIGHT" ? "☀️" : "🌙"}
            message={
              themeSelect === "LIGHT"
                ? getRandomMessage(lightModeMessages)
                : getRandomMessage(darkModeMessages)
            }
          />
        )}
      </div>
    </nav>
  );
}
