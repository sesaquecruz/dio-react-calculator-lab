import { Button as ButtonStyle } from './styles';

type Props = {
  value: string;
  onClick: () => void
}

export default function Button({ value, onClick }: Props) {
  return (
    <ButtonStyle onClick={onClick}>{value}</ButtonStyle>
  )
}
