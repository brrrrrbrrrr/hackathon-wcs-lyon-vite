import './DataGraphStyle.css';
import { useState, useEffect } from 'react';

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
    </div>
  );
}
