import './AboutMe.css';
import image1 from '../images/image2.jpg';
import imageMain from '../images/image1copy.jpg';

function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <img src={imageMain} alt="Manuel Del Moral with piano" className="AboutMeImageContainer"></img> 
    
      <div className="AboutMeTextContainer"  id="aboutme">
        <div className='AboutMeTextFirstColumn'>
          <div className='AboutMeHeader'>
            <p className="AboutMeName">Manuel Del Moral</p>
            <p className="AboutMeTitle">About me</p>
          </div>
          <p className="AboutMeText">
            Pianist born in Granada in 1996, he started playing the piano at the age of 4 and entered the Professional Conservatory of Granada "Angel Barrios" at the age of 7.        </p>  
          <p className="AboutMeText">      
            He has received lessons from Domenico Codispoti, Gustavo Diaz Jerez, Alexander Kandelaki or Giovanni Bellucci, among others.
          </p>
          <p className="AboutMeText">
            He finished his professional studies in 2016 with Javier Herreros with the highest qualifications in piano and has performed solo piano and chamber music recitals throughout the Spanish territory, highlighting his participation in the FEX of Granada and performing in turn national and international competitions, obtaining first prize in the chamber competition of the conservatory Angel Barrios, where he also won second prize a year earlier, first prize in the competition of the Conservatory Joaquin Villatoro de Jerez, as well as second prize in the competition of the Deputation of Granada. It is also worth mentioning his participation in the international chamber music competition in the city of Bydgoszcz, Poland, in 2019.
          </p>
          <p className="AboutMeText">
            Graduated in 2020 from the Royal Conservatory of Music of Madrid under the tutelage of Pilar Bilbao and Mariana Gurkova and in 2021 completed the master's degree in solo performance at the Katarina Gurska Conservatory of Music in Madrid with Mariana Gurkova.
          </p>
        </div>
        <div className='AboutMeTextSecondColumn'>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;