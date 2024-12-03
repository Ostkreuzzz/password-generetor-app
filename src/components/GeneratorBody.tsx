/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Checkboxes } from '@constants/checkboxes';
import { checkboxesStartData } from '@constants/startValues';
import styles from '../style/styles.module.scss';

import { StrengthColors } from 'enums/StrengthColors';

import { cn } from '@utils/tailwindUtils';

export function GeneratorBody() {
  const [charLength, setCharLength] = useState('5');
  const [includeValues, setIncludeValues] = useState(checkboxesStartData);
  const [strengthColor, setStrengthColor] = useState<StrengthColors>(StrengthColors.RED);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const slider = e.target;
    slider.style.setProperty('--value', slider.value);
    setCharLength(e.target.value);
  }

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, checked } = e.target;
    setIncludeValues((prevData) => ({
      ...prevData,
      [id]: checked,
    }));
  }

  return (
    <div className='px-32 py-18 flex-col justify-between bg-gray-dark'>
      <div className='mb-16 flex items-center justify-between'>
        <p className='text-lg'>Character Length</p>
        <span className='text-2xl text-neon-green'>{charLength}</span>
      </div>
      <div className='gap-32 flex flex-col justify-between'>
        <input type='range' min='5' max='15' value={charLength} className={styles.slider} onChange={handleChange} />
        <div className='gap-18 flex flex-col justify-between'>
          {Checkboxes.map((checkbox) => (
            <div className='gap-24 flex justify-start'>
              <input type='checkbox' id={checkbox.id} className={styles.checkbox} onChange={handleCheckbox} />
              <label htmlFor={checkbox.id} className={styles.label}>
                {checkbox.text}
              </label>
            </div>
          ))}
        </div>

        <div className='h-72 p-32 flex items-center justify-between bg-black'>
          <span className='text-xl font-bold tracking-wide text-gray'>STRENGTH</span>
          <div className='gap-16 flex justify-between'>
            <span className='text-2xl font-bold tracking-wide'>MEDIUM</span>
            <div className='gap-8 flex justify-between '>
              {Object.values(includeValues).map((value) => (
                <div className='relative flex justify-between'>
                  <span className={cn('w-10 h-28', value ? `${strengthColor}` : 'border-2 border-white')} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className='h-64 w-full items-center border-neon-green bg-neon-green 
              text-xl font-bold uppercase text-gray-dark transition-colors duration-300
              hover:border-2 hover:border-solid hover:bg-gray-dark hover:text-neon-green'
        >
          GENERATE ⇀
        </button>
      </div>
    </div>
  );
}
