import '../Step/Step.css';
import { useLoaderData } from 'react-router-dom';

import { useState } from 'react';
import Card from '../card/Card';

export default function Step() {
  const data = useLoaderData();
  const [chakra, setChacra] = useState();
  const [activeModal, setActiveModal] = useState(false);
  const [succes, setSucces] = useState(false);
  const [chakraData, setChacraData] = useState(data);
  const [isClosing, setIsClosing] = useState(false);

  const getElement = (el) => {
    setActiveModal(true);
    setChacra(el);
  };

  const handleSucces = (id) => {
    setChacraData(
      chakraData.map((el) =>
        el.id === id ? { ...el, color: `${el.color}80` } : el
      )
    );
    setIsClosing(true);
    setTimeout(() => {
      setActiveModal(false);
      setIsClosing(false);
    }, 200);
    setSucces(true);
  };

  return (
    <div className='step-container'>
      {!activeModal &&
        chakraData
          .slice()
          .reverse()
          .map((chakra) => (
            <div className='chakras_container ' key={chakra.id}>
              <button
                className='button_step'
                onClick={() => getElement(chakra)}
                style={{
                  backgroundColor: `${chakra.color}`,
                  border: `${
                    chakra.color.includes('80') ? '3px solid #FFD700' : 'none'
                  }`,
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
