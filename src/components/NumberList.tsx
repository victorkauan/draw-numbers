export function NumberList() {
  let numberList = [];

  for (let i = 1; i <= 60; i++) numberList.push(i);

  return (
    <ul className='number-list'>
      {numberList.map((number) => (
        <li key={number} className='number'>
          {number}
        </li>
      ))}
    </ul>
  );
}
