import { StrengthName } from 'enums/StrengthName';
import { StrengthColor } from 'enums/StrengthColor';

import { cn } from '@utils/tailwindUtils';

interface Props {
  strengthName: StrengthName | undefined;
  strengthColor: StrengthColor | undefined;
  amountOfBlocks: number[];
}

export function StrengthIndicator({ strengthName, strengthColor, amountOfBlocks }: Props) {
  return (
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
  );
}
