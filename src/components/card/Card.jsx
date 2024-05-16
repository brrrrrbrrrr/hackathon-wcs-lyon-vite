/* eslint-disable react/prop-types */
import './Card.css';
const Card = ({ chakra, setActiveModal }) => {
  // console.log('chacra comp', chakra);
  return (
    <div className='modal-container'>
      <div className='card-container'>
        <div className='close-modal' onClick={() => setActiveModal(false)}>
          X
        </div>
        <div className='title-logo_container'>
          <h1>{chakra.nameS} </h1>
          <div className='logo-card_container'>
            <img src={chakra.logo} alt='' className='logo-chakra' />
          </div>
        </div>
        <div className='infos-body_container'>
          <div className='mantra'>{chakra.mantras} </div>
          <div className='body-img_container'>
            <img src='' alt='' />
          </div>
        </div>
        <div className='activities-container'>
          <h4>recommended activity : </h4>
          <h4>Others activities : </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
