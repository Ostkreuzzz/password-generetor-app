/* eslint-disable jsx-a11y/label-has-associated-control */

import { GeneratorHeader } from '@components/GeneratorHeader';
import { GeneratorBody } from '@components/GeneratorBody';

export function App() {
  return (
    <main className='flex h-screen w-screen items-center justify-center bg-black text-white'>
      <section className='my-4 space-y-4 p-4 w-540 flex-col'>
        <div className='mb-32 flex justify-center text-center'>
          <h1 className='text-2xl font-bold text-gray'>Password Generator</h1>
        </div>

        <section className='gap-24 flex flex-col'>
          <GeneratorHeader />

          <GeneratorBody />
        </section>
      </section>
    </main>
  );
}
