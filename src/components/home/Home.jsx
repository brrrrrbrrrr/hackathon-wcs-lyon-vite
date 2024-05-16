import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className='home-container'>
      <div className='logo-container'>
        <img src='' alt='' className='logo' />
      </div>

      <p className='p-content'>From deconnection to connection ...</p>
      <Link to='/chakras'>
        <div className='button-container'>
          <button className='btn'>Start</button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
