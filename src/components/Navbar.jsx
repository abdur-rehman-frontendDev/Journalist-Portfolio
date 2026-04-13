import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useLang } from "../context/LanguageContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">
          شیخ عزیز الرحمن <p>(گولڈ میڈلسٹ)</p>
        </h2>

        <div className="nav-links">
          <Link to="/">{lang === "ur" ? "ہوم" : "Home"}</Link>
          <Link to="/interviews">
            {lang === "ur" ? "انٹرویوز" : "Interviews"}
          </Link>
          {/* <Link to="/gallery">
            {lang === "ur" ? "گیلری" : "Gallery"}
          </Link> */}
          {/* <Link to="/videos">
            {lang === "ur" ? "ویڈیوز" : "Videos"}
          </Link> */}
          
          <button onClick={toggleTheme} className="theme-btn">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          {/* <button 
            onClick={() => setLang(lang === "ur" ? "en" : "ur")}
            className="lang-btn"
          >
            {lang === "ur" ? "EN" : "اردو"}
          </button>  */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
