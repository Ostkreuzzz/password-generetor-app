/* eslint-disable jsx-a11y/label-has-associated-control */
import { IoMdCopy } from 'react-icons/io';
import { useState } from 'react';
import { Checkboxes } from '@constants/checkboxes';
import { checkboxesStartData } from '@constants/startValues';
import styles from './style/styles.module.scss';

import { StrengthColors } from 'enums/StrengthColors';

import { cn } from '@utils/tailwindUtils';

export function App() {
  const [charLength, setCharLength] = useState('5');
  const [includeValues, setIncludeValues] = useState(checkboxesStartData);
  const [password, setPassword] = useState('qwerty');
  const [strengthColor, setStrengthColor] = useState<StrengthColors>(StrengthColors.RED);

  const [isCopied, setIsCopied] = useState(false);

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

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (error) {
      setIsCopied(false);
    }
  }

  return (
    <main className='flex h-screen w-screen items-center justify-center  bg-black text-white'>
      <section className='my-4 space-y-4 p-4 w-540 flex-col'>
        <div className='mb-32 flex justify-center text-center'>
          <h1 className='text-2xl font-bold text-gray'>Password Generator</h1>
        </div>

        <section>
          <div className='h-80 px-32 py-24 mb-24 flex items-center  bg-gray-dark'>
            <div className='flex w-full items-center justify-between'>
              <p className='text-4xl text-white'>{password}</p>
              <div className='gap-16 flex items-center justify-between '>
                <span
                  className={cn(
                    'h-24 text-xl font-bold uppercase tracking-wide text-neon-green transition-opacity duration-300',
                    {
                      'opacity-100': isCopied,
                      'opacity-0': !isCopied,
                    },
                  )}
                >
                  Copied
                </span>

                <IoMdCopy
                  className=' cursor-pointer text-white transition-all hover:text-neon-green'
                  size={24}
                  onClick={handleCopy}
                />
              </div>
            </div>
          </div>

          <div className='px-32 py-18 flex-col justify-between bg-gray-dark'>
            <div className='mb-16 flex items-center justify-between'>
              <p className='text-lg'>Character Length</p>
              <span className='text-2xl text-neon-green'>{charLength}</span>
            </div>
            <div className='gap-32 flex flex-col justify-between'>
              <input
                type='range'
                min='5'
                max='20'
                value={charLength}
                className={styles.slider}
                onChange={handleChange}
              />
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
                <span className='font-bold tracking-wide text-gray'>STRENGTH</span>
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
                className='h-64 w-full items-center bg-neon-green 
              text-xl font-bold uppercase text-gray-dark transition-all hover:border-2
              hover:border-solid hover:border-neon-green hover:bg-gray-dark hover:text-neon-green'
              >
                GENERATE ⇀
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
