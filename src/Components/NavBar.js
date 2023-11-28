//import logo from './logo.svg';
import './NavBar.css';
import NavBarMenuItem from './NavBarMenuItem';
import NavBarButton from './NavBarButton';
import NavBarLogo from './NavBarLogo';

function App() {
  return (
    <div className="NavBarMainContainer">
        <NavBarLogo className="logoNav"/>
        <div className="NavBarItemContainer">
          <NavBarMenuItem className='item' itemText={"About me"} link={"aboutme"} delay={300}/>
          <NavBarMenuItem className='item' itemText={"Repertoire"} link={"repertoire"} delay={350}/>
          <NavBarMenuItem className='item' itemText={"Media"} link={"media"} delay={400}/>
        </div>
        <NavBarButton className="botonNav"/>
    </div>
  );
}

export default App;