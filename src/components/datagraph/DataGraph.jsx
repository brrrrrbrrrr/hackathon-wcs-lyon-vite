import './DataGraphStyle.css';
import React, { useState, useEffect } from 'react';

export default function DataGraph() {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='background'>
      <h5 className='graph-h5'>
        Il y a actuellement <span className='spn-bumber'>{number}</span> qui
        utilisent notre application, et 100% sont satisfait
      </h5>
    </div>
  );
}
