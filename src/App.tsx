import { Logo } from './components/Logo';
import { DrawNumbers } from './components/DrawNumbers';
import { NumberList } from './components/NumberList';
import { OfficialLinks } from './components/OfficialLinks';

import './styles/global.scss';

export function App() {
  return (
    <section className='number-generator'>
      <Logo />
      <DrawNumbers />
      <NumberList />
      <OfficialLinks />
    </section>
  );
}
