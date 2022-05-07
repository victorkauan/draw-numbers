import { FiCopy } from 'react-icons/fi';

export function DrawNumbers() {
  return (
    <div className='draw-numbers'>
      <h2>
        <span className='orange'>Sorteio</span> Mega
        <span className='orange'>-</span>Sena
      </h2>
      <p>Clique no botão para sortear 6 números e testar a sua sorte!</p>

      <ul className='numbers-drawn'>
        <li className='number drawn'>1</li>
        <li className='number drawn'>2</li>
        <li className='number drawn'>3</li>
        <li className='number drawn'>4</li>
        <li className='number drawn'>5</li>
        <li className='number drawn'>6</li>
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
