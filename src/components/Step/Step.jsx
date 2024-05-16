import '../Step/Step.css';
import { useLoaderData } from 'react-router-dom';
import Chakras from '../../data//data';
import Card from '../card/Card';
import { useState } from 'react';

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
      {Chakras.map((chakra) => (
        <div key={chakra.id}>
          {/* <Link className="style_link_chakras" to={`/${chakra.id}`}> */}
          <button
            onClick={() => getElement(chakra)}
            className={`button_step ${chakra.position}`}
            style={{ backgroundColor: chakra.color }}
          >
            {chakra.id}
          </button>

          {/* </Link> */}
        </div>
      ))}

      {activeModal && <Card chakra={chakra} setActiveModal={setActiveModal} />}
    </div>
  );
}
