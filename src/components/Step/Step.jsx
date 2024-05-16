import '../Step/Step.css';
import { useLoaderData } from 'react-router-dom';
import Chakras from '../../data//data';

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
    <div className='step-container'>
      {Chakras.slice()
        .reverse()
        .map((chakra) => (
          <div className='chakras_container' key={chakra.id}>
            <button
              className='button_step'
              onClick={() => getElement(chakra)}
              style={{ backgroundColor: chakra.color }}
            >
              {chakra.id}
            </button>
          </div>
        ))}

      {activeModal && <Card chakra={chakra} setActiveModal={setActiveModal} />}
    </div>
  );
}
