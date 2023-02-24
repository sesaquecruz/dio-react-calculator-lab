import { Input as InputStyle } from "./style"

type Props = {
  value: string;
}

export default function Input({ value }: Props) {
  return (
    <InputStyle defaultValue={value} />
  )
}
