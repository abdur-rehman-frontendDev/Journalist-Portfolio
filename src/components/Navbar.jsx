import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang } = useLang();

  return (
    <nav>  

      <h2>{lang === "ur" ? "پورٹ فولیو" : "Portfolio"}</h2>

      <div>
        <Link to="/">{lang === "ur" ? "ہوم" : "Home"}</Link>
        <Link to="/interviews">{lang === "ur" ? "انٹرویوز" : "Interviews"}</Link>
        {/* <Link to="/blog">{lang === "ur" ? "بلاگ" : "Blog"}</Link> */}

        {/* <button onClick={() => setLang(lang === "ur" ? "en" : "ur")}>
          {lang === "ur" ? "EN" : "اردو"}
        </button> */}

        <button onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
      </div>

    </nav>
  );
};

export default Navbar;