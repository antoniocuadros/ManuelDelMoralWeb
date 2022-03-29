import './AboutMe.css';
import image1 from '../images/image2.jpg';
import imageMain from '../images/image1.jpg';

function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <img src={imageMain} alt="Manuel Del Moral with piano" className="AboutMeImageContainer"></img> 
    
      <div className="AboutMeTextContainer">
        <p className="AboutMeTitle">Manuel Del Moral</p>
        <p className="AboutMeText">
        Pianista nacido en Granada en 1996, empezó a tocar el piano con 4 años e ingresó en el conservatorio Profesional de Granada «Ángel Barrios» a la edad de 7.
        </p>  
        <p className="AboutMeText">      
        Ha recibido clases de Domenico Codispoti, Gustavo Diaz Jerez, Alexander Kandelaki o Giovanni Bellucci, entre otros.
        </p>
        <p className="AboutMeText">
        Finalizó sus estudios profesionales en 2016 con Javier Herreros con las máximas calificaciones en piano y ha realizado recitales de piano solo y de música de cámara por todo el territorio español, destacando su participación en el FEX de Granada y realizando a su vez concursos nacionales e internacionales, obteniendo primer premio en el concurso de cámara del conservatorio Ángel Barrios, donde también obtuvo segundo premio un año antes, primer premio en el concurso del Conservatorio Joaquín Villatoro de Jerez, así como segundo premio en el concurso de la Diputacion de Granada. Cabe destacar también su participacion en el concurso internacional de cámara de la ciudad de Bydgoszcz, en Polonia, en el año 2019.
        </p>
        <p className="AboutMeText">
        Graduado en el año 2020 por el Real Conservatorio de Música de Madrid bajo la tutela de Pilar Bilbao y Mariana Gurkova y en 2021 realizó el máster de interpretación solista en el conservatorio de música Katarina Gurska de Madrid junto a Mariana Gurkova.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;