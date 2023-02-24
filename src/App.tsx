import { useState } from "react";
import { Container, Content } from "./styles";
import { Input, Button } from './components/index';

export default function App() {
  const [currentExpression, setCurrentExpression] = useState<string[]>([]);
  const [validExpression, setValidExpression] = useState<boolean>(true);


  function handleTerm(term: string) {
    if (validExpression) {
      setCurrentExpression([...currentExpression, term]);
    } else {
      setCurrentExpression([term]);
      setValidExpression(true);
    }
  }

  function handleDelete() {
    if (validExpression) {
      setCurrentExpression(currentExpression.slice(0, -1));
    } else {
      handleClear();  
    }
  }

  function handleClear() {
    setCurrentExpression([]);
    setValidExpression(true);
  }

  function handleSolve() {
    if (validExpression) {
      try {
        setCurrentExpression([eval(currentExpression.join(''))]);
      } catch {
        setCurrentExpression(['INVALID EXPRESSION']);
        setValidExpression(false);
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentExpression.join('')}/>


        <Button value={'('} onClick={() => handleTerm('(')} />
        <Button value={')'} onClick={() => handleTerm(')')} />
        <Button value={'DEL'} onClick={() => handleDelete()} />
        <Button value={'AC'} onClick={() => handleClear()} />

        <Button value={'7'} onClick={() => handleTerm('7')} />
        <Button value={'8'} onClick={() => handleTerm('8')} />
        <Button value={'9'} onClick={() => handleTerm('9')} />
        <Button value={'÷'} onClick={() => handleTerm(' / ')} />

        <Button value={'4'} onClick={() => handleTerm('4')} />
        <Button value={'5'} onClick={() => handleTerm('5')} />
        <Button value={'6'} onClick={() => handleTerm('6')} />
        <Button value={'x'} onClick={() => handleTerm(' * ')} />

        <Button value={'1'} onClick={() => handleTerm('1')} />
        <Button value={'2'} onClick={() => handleTerm('2')} />
        <Button value={'3'} onClick={() => handleTerm('3')} />
        <Button value={'-'} onClick={() => handleTerm(' - ')} />

        <Button value={'0'} onClick={() => handleTerm('0')} />
        <Button value={'.'} onClick={() => handleTerm('.')} />
        <Button value={'='} onClick={() => handleSolve()} />
        <Button value={'+'} onClick={() => handleTerm(' + ')} />
      </Content>
    </Container>
  );
}
