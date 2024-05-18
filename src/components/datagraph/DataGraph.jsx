import './DataGraphStyle.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import barArt from '../../assets/graph/bar_art.png';
import barMusic from '../../assets/graph/bar_music.png';
import barOutdoor from '../../assets/graph/bar_outdoor.png';
import barRelaxing from '../../assets/graph/bar_relaxing.png';

import pieArt from '../../assets/graph/pie_art.png';
import pieMusic from '../../assets/graph/pie_music.png';
import pieOutdoor from '../../assets/graph/pie_outdoor.png';
import pieRelaxing from '../../assets/graph/pie_relaxing.png';

export default function DataGraph() {
  const [activeChart, setActiveChart] = useState('art');
  const [number, setNumber] = useState(2259874);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    barArt,
    barMusic,
    barOutdoor,
    barRelaxing,
    pieArt,
    pieMusic,
    pieOutdoor,
    pieRelaxing,
  ];

  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!imagesLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h6 className='graph-h5'>
        There is currently <span className='spn-bumber'>{number}</span> who use
        our application, and 100% are satisfied
      </h6>

      <ul className='ul-container'>
        <li onClick={() => setActiveChart('art')}>Art</li>
        <li onClick={() => setActiveChart('music')}>Music</li>
        <li onClick={() => setActiveChart('outdoor')}>Outdoor</li>
        <li onClick={() => setActiveChart('relaxing')}>Relaxing</li>
      </ul>
      <div className='graph-container'>
        {activeChart === 'art' && (
          <div>
            <img src={pieArt} alt='Art Pie Chart' className='img-graph' />
            <img src={barArt} alt='Art Bar Chart' className='img-graph' />
          </div>
        )}
        {activeChart === 'music' && (
          <div>
            <img src={pieMusic} alt='Music Pie Chart' className='img-graph' />
            <img src={barMusic} alt='Music Bar Chart' className='img-graph' />
          </div>
        )}
        {activeChart === 'outdoor' && (
          <div>
            <img
              src={pieOutdoor}
              alt='Outdoor Pie Chart'
              className='img-graph'
            />
            <img
              src={barOutdoor}
              alt='Outdoor Bar Chart'
              className='img-graph'
            />
          </div>
        )}
        {activeChart === 'relaxing' && (
          <div>
            <img
              src={pieRelaxing}
              alt='Relaxing Pie Chart'
              className='img-graph'
            />
            <img
              src={barRelaxing}
              alt='Relaxing Bar Chart'
              className='img-graph'
            />
          </div>
        )}
      </div>
      <Link to='/chakras'>
        <div className='button-container'>
          <button className='btn back'>Come back to your path</button>
        </div>
      </Link>
    </div>
  );
}
