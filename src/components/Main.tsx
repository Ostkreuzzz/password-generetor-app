import { GeneratorHeader } from '@components/GeneratorHeader';
import { GeneratorBody } from '@components/GeneratorBody';
import { GeneratorTitle } from '@components/GeneratorTitle';

export function Main() {
  return (
    <main className='flex h-screen w-screen items-center justify-center bg-black text-white '>
      <section className='my-4  flex-col space-y-4 p-4'>
        <GeneratorTitle />

        <section className='flex min-w-540 flex-col gap-24'>
          <GeneratorHeader />
          <GeneratorBody />
        </section>
      </section>
    </main>
  );
}
