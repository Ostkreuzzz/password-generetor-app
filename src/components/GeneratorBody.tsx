/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Checkboxes } from '@constants/checkboxes';
import { checkboxesStartData } from '@constants/startValues';
import { Alert, Snackbar } from '@mui/material';

import styles from '../style/styles.module.scss';

import { StrengthName } from 'enums/StrengthName';

import { cn } from '@utils/tailwindUtils';
import { handlePasswordCreation } from 'handlers/handlePasswordCreation';
import { StrengthColor } from 'enums/StrengthColor';

interface Props {
  onPassword: (password: string) => void;
}

export function GeneratorBody({ onPassword }: Props) {
  const [passwordLength, setPasswordLength] = useState('5');
  const [includeValues, setIncludeValues] = useState(checkboxesStartData);
  const [strengthName, setStrengthName] = useState<StrengthName | undefined>();
  const [strengthColor, setStrengthColor] = useState<StrengthColor | undefined>();
  const [amountOfBlocks, setAmountOfBlocks] = useState([0, 0, 0, 0]);
  const [isError, setIsError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPasswordLength(e.target.value);
  }

  function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, checked } = e.target;
    setIncludeValues((prevData) => ({
      ...prevData,
      [id]: checked,
    }));
  }

  function handleSubmit() {
    const { uppercase, lowercase, numbers, symbols } = includeValues;
    const { password, strength, color, amount } = handlePasswordCreation({
      passwordLength,
      uppercase,
      lowercase,
      numbers,
      symbols,
    });

    if (!uppercase && !lowercase && !numbers && !symbols) {
      setIsError(true);
      return;
    }

    onPassword(password);
    setStrengthName(strength);
    setStrengthColor(color);
    setAmountOfBlocks(amount);
  }

  return (
    <div className='box-border flex-col justify-between bg-gray-dark px-32 py-18'>
      {isError && (
        <Snackbar
          open={isError}
          autoHideDuration={3000}
          onClose={() => setIsError(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={() => setIsError(false)} severity='error' sx={{ width: '100%' }}>
            Please select at least one character set.
          </Alert>
        </Snackbar>
      )}
      <div className='mb-16 flex items-center justify-between'>
        <p className='text-lg'>Character Length</p>
        <span className='text-2xl text-neon-green'>{passwordLength}</span>
      </div>
      <div className='flex flex-col justify-between gap-32'>
        <input type='range' min='5' max='15' value={passwordLength} className={styles.slider} onChange={handleChange} />
        <div className='flex flex-col justify-between gap-18'>
          {Checkboxes.map((checkbox) => (
            <div className='flex justify-start gap-24'>
              <input type='checkbox' id={checkbox.id} className={styles.checkbox} onChange={handleCheckbox} />
              <label htmlFor={checkbox.id} className={styles.label}>
                {checkbox.text}
              </label>
            </div>
          ))}
        </div>

        <div className='flex h-72 items-center justify-between bg-black p-32'>
          <span className='text-xl font-bold tracking-wide text-gray'>STRENGTH</span>
          <div className='flex justify-between gap-16'>
            <span className='text-2xl font-bold tracking-wide'>{strengthName}</span>
            <div className='flex items-center justify-between gap-8'>
              {amountOfBlocks.map((value) => (
                <div className='relative flex justify-between'>
                  <span className={cn('h-28 w-10', value ? `${strengthColor}` : 'border-2 border-white')} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
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
