import "./homeScreen.css";
import Logo from '../../assets/logo/nervii.png';

export const HomeScreen =()=> {
 return (
    <div id="homeContainer">
      <div className="HomeSection">
         <div className="homeSectionText">
            Nos application et sites web ou en cours de développement, découvrez l'écosystème Nervii.
         </div>
         <div className="homebutton">
            <img src={Logo}/>
         </div>
      </div>
      <div id="homeSeparator">
         
      </div>
      <div className="homeSection">
         <div className="homeSectionText">
            Un projet de site web ? d'application ? Venez sur le Portail Nervii BtoB découvrez nos projet clients !
         </div>
         <div className="homebutton">
            <img src={Logo}/>
         </div>
      </div>
    </div>
 )
} 