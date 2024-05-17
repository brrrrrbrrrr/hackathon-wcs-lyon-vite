import '../Step/Step.css';
import { useLoaderData, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../card/Card';
import TypeWritter from '../typewritter/TypeWritter';
import sound from '../../assets/sounds/Emmetelle-Awake.mp3';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

export default function Step() {
  const data = useLoaderData();
  const [chakra, setChakra] = useState();
  const [activeModal, setActiveModal] = useState(false);
  const [activeStep, setActiveStep] = useState(false);
  const [activeWritter, setActiveWritter] = useState(true);
  const [success, setSuccess] = useState(false);
  const [chakraData, setChakraData] = useState(data);
  const [isClosing, setIsClosing] = useState(false);
  const [activeAudio, setActiveAudio] = useState(false);
  const [audio, setAudio] = useState(new Audio(sound));

  const getElement = (el) => {
    setActiveModal(true);
    setChakra(el);
  };

  useEffect(() => {
    setTimeout(() => {
      setActiveStep(true);
      setActiveWritter(false);
    }, 7000);
  }, []);

  const handleSucces = (id) => {
    setChakraData(
      chakraData.map((el) =>
        el.id === id ? { ...el, color: `${el.color.slice(0, -2)}10` } : el
      )
    );
    setIsClosing(true);
    setTimeout(() => {
      setActiveModal(false);
      setIsClosing(false);
    }, 200);
    setSuccess(true);
  };

  const playSound = () => {
    if (audio.paused) {
      setActiveAudio(true);
      audio.play();
    } else {
      setActiveAudio(false);
      audio.pause();
    }
  };

  return (
    <div>
      {!activeModal && activeWritter && <TypeWritter />}
      {activeStep && (
        <div className='step-container'>
          {!activeModal && (
            <div className='sound-container' onClick={playSound}>
              {!activeAudio && <VolumeOffIcon className='sound-btn' />}
              {activeAudio && <VolumeMuteIcon className='sound-btn' />}
            </div>
          )}

          {!activeModal &&
            chakraData
              .slice()
              .reverse()
              .map((chakra) => (
                <div className='chakras_container' key={chakra.id}>
                  <button
                    className='button_step'
                    onClick={() => getElement(chakra)}
                    style={{
                      backgroundColor: chakra.color,
                      border: chakra.color.includes('10')
                        ? '3px solid #FFD700'
                        : 'none',
                    }}
                  >
                    {chakra.id}
                    <img
                      style={{ display: 'none' }}
                      src={chakra.logo}
                      alt={`Logo ${chakra.nameS}`}
                    />
                    <img
                      style={{ display: 'none' }}
                      src={chakra.stoneImg}
                      alt={`Logo ${chakra.stone}`}
                    />
                  </button>
                </div>
              ))}
        </div>
      )}
      {!activeModal && activeStep && (
        <div className='stats-container'>
          <h5>See amazing stats of well-being</h5>
          <Link to='/datagraph' className='link-stats'>
            <QueryStatsIcon />
          </Link>
        </div>
      )}

      {activeModal && (
        <div className={`${activeModal && 'fadeIn'} ${isClosing && 'fadeOut'}`}>
          <Card
            chakra={chakra}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            handleSucces={handleSucces}
          />
        </div>
      )}
    </div>
  );
}
