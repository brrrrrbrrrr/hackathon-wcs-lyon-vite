/* eslint-disable no-unreachable */
import { Link } from 'react-router-dom';
// import music from '../../assets/graph/pie/music.png'

const YourComponent = () => {
  return (
    <>
    <div className='background'>
      <Link to="/chakras">
        <div className="button-container ">
          {/* <img src={music} alt="" /> */}
          <button className="btn back">Come back to your path</button>
        </div>
      </Link>
      </div>
    </>
  );
};

export default YourComponent;

