/* eslint-disable jsx-a11y/label-has-associated-control */
import { IoMdCopy } from 'react-icons/io';
import { useState } from 'react';
import { cn } from '@utils/tailwindUtils';

export function GeneratorHeader() {
  const [password, setPassword] = useState('qwerty');

  const [isCopied, setIsCopied] = useState(false);

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
    <div className='h-80 px-32 py-24 flex items-center  bg-gray-dark'>
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
            className='cursor-pointer text-white transition-colors duration-300 hover:text-neon-green'
            size={24}
            onClick={handleCopy}
          />
        </div>
      </div>
    </div>
  );
}
