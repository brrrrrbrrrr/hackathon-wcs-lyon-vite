import './DataGraphStyle.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DataGraph() {
  const [number, setNumber] = useState(2259874);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='background'>
      <h6 className='graph-h5'>
        Il y a actuellement <span className='spn-bumber'>{number}</span> qui
        utilisent notre application, et 100% sont satisfait
      </h6>
      <Link to="/chakras">
        <div className="button-container ">
          {/* <img src={music} alt="" /> */}
          <button className="btn back">Come back to your path</button>
        </div>
      </Link>
    </div>
  );
}
