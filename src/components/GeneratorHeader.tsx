import { IoMdCopy } from 'react-icons/io';
import { useCallback, useState, useContext } from 'react';
import { GlobalContext } from 'ContextProvider/GlobalContext';

import { cn } from '@utils/tailwindUtils';

export function GeneratorHeader() {
  const [isCopied, setIsCopied] = useState(false);
  const placeholder = 'P4$5W0rD!';

  const { password } = useContext(GlobalContext);

  const handleInputSize = () => {
    if (!password) {
      return placeholder.length - 3;
    }

    return password.length - 3;
  };

  const handleCopy = useCallback(() => {
    if (!password) return;

    navigator.clipboard
      .writeText(password)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      })
      .catch(() => {
        setIsCopied(false);
      });
  }, [password]);

  return (
    <div className='flex h-80 items-center bg-gray-dark px-32  py-24 '>
      <div className='flex w-full items-center justify-between'>
        <input
          type='text'
          className='w-auto bg-gray-dark text-4xl text-white'
          disabled
          size={handleInputSize()}
          value={password}
          placeholder={placeholder}
        />
        <div className='flex items-center justify-between gap-16 '>
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
