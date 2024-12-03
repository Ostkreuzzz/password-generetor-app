/* eslint-disable jsx-a11y/label-has-associated-control */

import { GeneratorHeader } from '@components/GeneratorHeader';
import { GeneratorBody } from '@components/GeneratorBody';
import { useState } from 'react';

export function App() {
  const [password, setPassword] = useState('');

  return (
    <main className='flex h-screen w-screen items-center justify-center bg-black text-white '>
      <section className='my-4 w-540 flex-col space-y-4 p-4'>
        <div className='mb-32 flex justify-center text-center'>
          <h1 className='text-2xl font-bold text-gray'>Password Generator</h1>
        </div>

        <section className='flex flex-col gap-24'>
          <GeneratorHeader password={password} />

          <GeneratorBody onPassword={setPassword} />
        </section>
      </section>
    </main>
  );
}
