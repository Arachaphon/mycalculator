import React,{useState} from 'react';
import { evaluate } from 'mathjs';
import './App.css'
export default function App() {
  const [result,setResult] = useState('');
  const [isCalculated,setIsCalculated] = useState(false);
  const isOperator = (char) => ['+','-','*','/'].includes(char);

  const handleClick = (e) => {
    const value = e.target.value;
    const lastChar = result.slice(-1);

    if (isOperator(lastChar) && isOperator(value)){
      setResult(result.slice(0,-1).concat(value));
      return;
    }
    if (value === '.') {
      const currentNumber = result.split(/[\+\-\*\/]/).pop();
      if(currentNumber.includes('.')){
        return;
      }
    }
    if (result === '' && isOperator(value) && value !== '-') {
      return;
    }
    if (isCalculated) {
      if(isOperator(value)){
        setResult(result+value);
      } else {
      setResult(value);
      }
      setIsCalculated(false);
      return;
    } 
    if (result === 'Error') {
      setResult(value);
    } 
    setResult(result+value)
  };
  const clear = () => {
    setResult('');
    setIsCalculated(false);
  };

  const backspace = () => {
    if(result === 'Error') {
      setResult('');
    } else {
      setResult(result.slice(0,-1));
    }
    setIsCalculated(false)
  };

  const calculate = () => {
    try{
      const calculationResult = evaluate(result).toString();
      setResult(calculationResult);
      setIsCalculated(true);
    }catch(err){
      setResult('Error');
      setIsCalculated(true);
    }
  };

  const Button = ({ value, onClick, className = '' }) => (
    <input
      type="button"
      value={value}
      onClick={onClick}
      className={className} 
    />
  );
  return (
    <>
      <header className="bg-gray-300
        w-screen h-[100px] text-center content-center">
        <p className="text-4xl font-bold text-stone-700">MyCalculator</p>
      </header>

      <main className="flex-grow flex justify-center items-center  min-h-[calc(100dvh-100px)]">
        <div className="calculator">
          <form className="space-y-2">
            <div>
              <input type="text" name="display" readOnly value={result}
                className='w-full h-16 my-2 p-2 text-right'/>
            </div>
            <div>
              <Button value="AC" onClick={clear} className='text-red-500' />
              <Button value="DE" onClick={backspace} className='text-orange-400' />
              <Button value="." onClick={handleClick} className='text-blue-600'/>
              <Button value="/" onClick={handleClick} className='text-blue-600' />
              <Button value="*" onClick={handleClick} className='text-blue-600' />
            </div>
            <div>
              <Button value="7" onClick={handleClick} />
              <Button value="8" onClick={handleClick} />
              <Button value="9" onClick={handleClick} />
              <Button value="-" onClick={handleClick} className='text-blue-600' />
              <Button value="+" onClick={handleClick} className='text-blue-600' />
            </div>
            <div>
              <Button value="4" onClick={handleClick} />
              <Button value="5" onClick={handleClick} />
              <Button value="6" onClick={handleClick} />
              <Button value="0" onClick={handleClick} />
              <Button value="00" onClick={handleClick} />
            </div>
            <div>
              <Button value="1" onClick={handleClick} />
              <Button value="2" onClick={handleClick} />
              <Button value="3" onClick={handleClick} />
              <Button value="=" onClick={calculate} className='equal' />
            </div>
          </form>
        </div>
      </main>
    </>
  )
}
