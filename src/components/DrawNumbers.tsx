import { FiCopy } from 'react-icons/fi';
import { Number } from './Number';

export function DrawNumbers() {
  return (
    <div className='draw-numbers'>
      <h2>
        <span className='orange'>Sorteio</span> Mega
        <span className='orange'>-</span>Sena
      </h2>
      <p>Clique no botão para sortear 6 números e testar a sua sorte!</p>

      <ul className='numbers-drawn'>
        <Number value={1} wasDrawn={true} />
        <Number value={2} wasDrawn={true} />
        <Number value={3} wasDrawn={true} />
        <Number value={4} wasDrawn={true} />
        <Number value={5} wasDrawn={true} />
        <Number value={6} wasDrawn={true} />
      </ul>

      <div className='buttons'>
        <button type='button' className='draw-button'>
          Sortear
        </button>
        <button type='button' className='copy-button'>
          <FiCopy className='copy-icon' />
        </button>
      </div>
    </div>
  );
}
