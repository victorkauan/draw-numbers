import { Logo } from './components/Logo';
import { DrawNumbers } from './components/DrawNumbers';

import './styles/global.scss';

export function App() {
  return (
    <section className='number-generator'>
      <Logo />
      <DrawNumbers />
    </section>
  );
}
