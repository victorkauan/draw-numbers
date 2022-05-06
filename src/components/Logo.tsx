import CaixaLogo from '../../public/assets/caixa-logo-x.png';

export function Logo() {
  return (
    <div className='logo'>
      <img src={CaixaLogo} alt='Logo da Caixa Econômica Federal' />
      <h1>Mega-Sena</h1>
    </div>
  );
}
