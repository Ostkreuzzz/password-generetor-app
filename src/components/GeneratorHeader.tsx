/* eslint-disable jsx-a11y/label-has-associated-control */
import { IoMdCopy } from 'react-icons/io';
import { useCallback, useState } from 'react';
import { cn } from '@utils/tailwindUtils';

interface Props {
  password: string;
}

export function GeneratorHeader({ password }: Props) {
  const [isCopied, setIsCopied] = useState(false);

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
          className='w-auto bg-gray-dark text-4xl text-white '
          disabled
          size={password.length || 8}
          value={password}
          placeholder='P4$5W0rD!'
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
