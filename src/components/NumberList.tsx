import { Number } from './Number';

export function NumberList() {
  let numberList = [];

  for (let i = 1; i <= 60; i++) numberList.push(i);

  return (
    <ul className='number-list'>
      {numberList.map((number) => (
        <Number key={number} value={number} wasDrawn={false} />
      ))}
    </ul>
  );
}
