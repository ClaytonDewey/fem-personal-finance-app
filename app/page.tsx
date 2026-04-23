import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Hello there</h1>
      <div>
        <button type='button' className='btn btn-primary'>
          Placeholder
        </button>
        <button type='button' className='btn btn-secondary'>
          Placeholder
        </button>
        <button type='button' className='btn btn-destroy'>
          Placeholder
        </button>
      </div>

      <div>
        <Image
          src='/images/illustration-authentication.svg'
          alt='authentication'
          width={300}
          height={600}
          loading='lazy'
        />
      </div>
    </main>
  );
}
