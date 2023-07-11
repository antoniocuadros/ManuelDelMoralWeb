import './AboutMe.css';
import image from '../images/image1.jpg';

function MainImage() {
  return (
    <img className="image" src={image} alt="Manuel Del Moral with piano"/>
  );
}

export default MainImage;