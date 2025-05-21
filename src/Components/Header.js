import "../styles/components/Header.scss";
import Place from "./Place";
import Search from "./Search";
import Settings from './Settings'
function Header() {
  return (
    <div className="Header">Header
    <Place />
    <Search />
    <Settings />
    </div>
  )
}

export default Header