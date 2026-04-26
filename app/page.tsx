import Link from 'next/link';
import Image from 'next/image';
import { Button, Input } from './components';

export default function Home() {
  return (
    <div className='page-wrapper'>
      <header className='hero'>
        <Image
          src='/images/illustration-authentication.svg'
          role='presentation'
          alt=''
          width={560}
          height={920}
        />
      </header>
      <main>
        <div className='form-wrapper'>
          <form className='form'>
            <div>
              <label htmlFor='email'>Email</label>
              <Input type='email' id='email' name='email' />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <Input type='password' id='password' name='password' />
            </div>
            <Button type='submit' variant='primary'>
              Login
            </Button>
            <p>
              Need to create an account? <Link href='/signup'>Sign Up</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
