import './Media.css';
import videoMain from '../images/Video.mp4';

function Media() {
  return (
    <div className='back2'>
      <div className="AboutMeContainer">
        <div className='AboutMeHeader'>
              <p data-aos="zoom-in" data-aos-duration="1000" className="AboutMeTitle"id="media">Media</p>
        </div>
        <div className="AboutMeTextContainer2">
          <div className='AboutMeTextSecondColumn2'>
            <video loop autoPlay controls>
              <source src={videoMain} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Media;