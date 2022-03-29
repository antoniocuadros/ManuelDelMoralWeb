//import logo from './logo.svg';
import './NavBar.css';
import NavBarMenuItem from './NavBarMenuItem';
import NavBarButton from './NavBarButton';
import NavBarLogo from './NavBarLogo';

function App() {
  return (
    <div className="NavBarMainContainer">
        <NavBarLogo />
        <div className="NavBarItemContainer">
          <NavBarMenuItem itemText={"About me"} link={"aboutme"}/>
          <NavBarMenuItem itemText={"Repertoire"} link={"repertoire"}/>
          <NavBarMenuItem itemText={"Media"} link={"media"}/>
        </div>
        <NavBarButton />
    </div>
  );
}

export default App;