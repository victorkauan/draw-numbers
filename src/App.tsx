import { Logo } from './components/Logo';
import { DrawNumbers } from './components/DrawNumbers';
import { NumberList } from './components/NumberList';

import './styles/global.scss';

export function App() {
  return (
    <section className='number-generator'>
      <Logo />
      <DrawNumbers />
      <NumberList />
    </section>
  );
}
