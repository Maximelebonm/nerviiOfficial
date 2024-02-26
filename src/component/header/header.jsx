import Logo from '../../assets/logo/nervii.png';
import './header.css';
export const Header = () => {
    return (
        <>
            <nav id="headerContainer">
                <a href="#accueil">
                    <div>
                        <img src={Logo} id="headerlogo"/>
                    </div>
                </a>
                <div className="headerItem"> Applications </div>
            </nav>
        </>
    )
}