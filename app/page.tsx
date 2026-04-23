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
          src='/images/icon-show-password.svg'
          alt='authentication'
          width={100}
          height={100}
          loading='lazy'
        />
      </div>
    </main>
  );
}
