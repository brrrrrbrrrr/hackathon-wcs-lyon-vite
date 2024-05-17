import '../Step/Step.css';
import { useLoaderData } from 'react-router-dom';
import Chakras from '../../data//data';
// import Debout from '../../assets/silhouettes/debout.png';
// import Meditation from '../../assets/silhouettes/meditation.png';

import { useState } from 'react';
import Card from '../card/Card';

export default function Step() {
  const [chakra, setChacra] = useState();
  const [activeModal, setActiveModal] = useState(false);
  const data = useLoaderData();
  console.log(data);

  const getElement = (el) => {
    // console.log('id :', id);
    setActiveModal(true);
    setChacra(el);
    console.log('el :', el);
  };

  return (
  <div className="background">
    <div className='step-container'>
      {Chakras.slice()
        .reverse()
        .map((chakra) => (
          <div className='chakras_container' key={chakra.id}>
            {/* < img className="meditation" src={Meditation} alt="silhouettte meditation" /> */}
            <button
              className= {`button_step ${chakra.position}`}
              onClick={() => getElement(chakra)}
              style={{ backgroundColor: chakra.color }}
              
            >
              {chakra.id}
              
            </button>
            {/* < img className="meditation" src={Debout} alt="silhouettte meditation" width="10px" height="10px" /> */}
          </div>
        ))}

      {activeModal && <Card chakra={chakra} setActiveModal={setActiveModal} />}
    </div>
  </div>
  );
}
