import Link from 'next/link';
import { Button, Input } from './components';
import { Icon } from './svg';

export default function Home() {
  return (
    <div className='page-wrapper'>
      <header className='hero'>
        <Icon name='logo' />
        <div className='hero-body'>
          <h2>Keep track of your money and save for your future</h2>
          <p>
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets and add to savings pots easily.
          </p>
        </div>
      </header>
      <main>
        <div className='form-wrapper'>
          <h1>Login</h1>
          <form className='form'>
            <fieldset>
              <div>
                <label htmlFor='email'>Email</label>
                <Input type='email' id='email' name='email' />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <Input type='password' id='password' name='password' />
              </div>
            </fieldset>
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
