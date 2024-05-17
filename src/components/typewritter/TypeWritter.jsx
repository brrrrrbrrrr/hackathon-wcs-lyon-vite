import './TypeWritter.css';

import Typewriter from 'typewriter-effect';

const TypeWritter = () => {
  return (
    <div>
      <div className='background'>
        <div className='intro'>
          <Typewriter
            options={{
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  'Unlock all your chakras and discover ultimate well-being'
                )

                .callFunction(() => {})
                .pauseFor(2500)

                .callFunction(() => {})
                .start();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypeWritter;
