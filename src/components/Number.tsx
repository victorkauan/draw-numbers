interface NumberProps {
  value: number;
  wasDrawn: boolean;
}

export function Number(props: NumberProps) {
  const numberClass = props.wasDrawn ? 'number drawn' : 'number';

  return <li className={numberClass}>{props.value}</li>;
}
