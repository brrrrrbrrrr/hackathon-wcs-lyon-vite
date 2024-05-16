/* eslint-disable react/prop-types */
import './Card.css';
const Card = ({ chakra, setActiveModal, activeModal, handleSucces }) => {
  console.log('activeModal ! ', activeModal);
  return (
    <div className='modal-container'>
      <div
        className={`card-container gradient-border
       

        `}
      >
        <div className='close-modal' onClick={() => setActiveModal(false)}>
          &#x2716;
        </div>
        <div className='title-logo_container'>
          <h1>{chakra.nameS} </h1>
          <div className='logo-card_container'>
            <img src={chakra.logo} alt='' className='logo-chakra' />
          </div>
        </div>
        <h4>Mantra : </h4>
        <div className='infos-body_container'>
          <div className='mantra'>{chakra.mantras} </div>
          <div className='body-img_container'>
            <img src='' alt='' />
          </div>
        </div>
        <div className='activities-container'>
          <h4>Recommended activities : </h4>
          <span> {chakra.activities}</span>
          <h4>Others activities :</h4>
          <span> {chakra.suggestedActivities} </span>
        </div>
        <div className='stone-container'>
          <h5> Stone :</h5>
          <span>{chakra.stone} </span>
          <div className='img-stone_container'>
            <img src={chakra.stoneImg} alt='' className='img-stone' />
          </div>
        </div>
        <div className='btn-check_container'>
          <button
            onClick={() => handleSucces(chakra.id)}
            className='btn-succes'
          >
            Succes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
