import './AboutMe.css';
import imageMain from '../images/image1copy2.jpg';
import imageAbout from '../images/imageAbout.jpg';
import image1 from '../images/slider/1.jpg';
import image2 from '../images/slider/2.jpg';
import image3 from '../images/slider/3.jpg';
import image4 from '../images/slider/4.jpg';
import image5 from '../images/slider/5.jpg';
import image6 from '../images/slider/6.jpg';
import image7 from '../images/slider/7.jpg';
import Slider from "react-slick";

function AboutMe() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
      speed: 800,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='back'>
      <div className="AboutMeContainer">
        <img src={imageMain} alt="Manuel Del Moral with piano" className="AboutMeImageContainer"></img> 
        <div className='AboutMeHeader'>
              <p data-aos="zoom-in" data-aos-duration="1000" className="AboutMeTitle"id="aboutme">About me</p>
        </div>
        <div className="AboutMeTextContainer">
          <div className='AboutMeTextFirstColumn'>
            <img src={imageAbout} alt="Manuel Del Moral with piano" className="AboutMeImage2Container"></img>
          </div>
          <div className='AboutMeTextSecondColumn'>
            <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" className="AboutMeText">
              Pianist born in Granada in 1996, a student of the Spanish pianist Javier Herreros until 2016, he has received classes from Domenico Codispoti, Gustavo Diaz Jerez, Alexander Kandelaki and Giovanni Bellucci, among others. He finished his professional studies in 2016 with Javier Herreros and has performed solo piano and chamber music recitals throughout Spain, highlighting his participation in the Granada Festival, the auditorium Ciudad de Albacete, or the Reina Sofía museum in Madrid, and holding international competitions, obtaining first prize in the Granada Conservatory chamber competition, first prize in the Jerez Conservatory competition, among others. He also participated in the international camera competition of the city of Bydgoszez, in Poland, in 2019, where he was a finalist. Subsequently, he graduated from the Royal Conservatory of Music in Madrid under professor Pilar Bilbao and recently completed a master's degree in solo performance at the Katarna Gurska Superior Conservatory under the mentorship of the renowned Bulgarian pianist Marina Gurkova.
            </p>  
            <p data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" className="AboutMeText2">
              After suffering an injury to the thumb of his right hand, which required surgery, he specialized in left-hand repertoire, leaving a small sample of it on a recent CD made in a recording studio he has at home, which includes pieces solely for said hand by Scriabin, as well as works by Rachmaninoff and Beethoven. He currently resides in Madrid, where he develops several projects with other musicians in the field of chamber music, highlighting his duet with the clarinetist Daniel Molina, and where he continues to train. as a pianist Currently, he is offering recitals with a repertoire inspired by the city of Granada, taking a sound tour of the city, which he has been able to perform in a recital he gave in Geneva in 2022 and at the Granada Conference Center this same year. In addition, he will have the opportunity to perform it at the first Aguere music festival, in Tenerife, as well as in the city of Constanza and in the European Parliament.          
            </p>
          </div>
        </div>
          <Slider {...settings} className='sliderimg'>
            <div  data-aos="zoom-in" data-aos-duration="1000">
              <img src={image1} className="imgc img-fluid"></img> 
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1000">
              <img src={image7} className="imgc img-fluid"></img> 
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1000">
              <img src={image6} className="imgc img-fluid"></img> 
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1000">
              <img src={image5} className="imgc img-fluid"></img> 
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1000">
              <img src={image3} className="imgc img-fluid"></img> 
            </div>
            <div  data-aos="zoom-in" data-aos-duration="1000">
              <img src={image6} className="imgc img-fluid"></img> 
            </div>
          </Slider>
      </div>
    </div>
    
  );
}

export default AboutMe;