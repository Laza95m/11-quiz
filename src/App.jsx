import { useState } from 'react';
import './App.css';
import Game from './components/Game/Game';
import Result from './components/Result/Result';

export const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: [
      'приложение',
      'часть приложения или страницы',
      'то, что я не знаю что такое',
    ],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

const App = () => {
  const [step, setStep] = useState(0);
  const [correctNum, setCorrectNum] = useState(0);
  const progressNum = Math.round((step / questions.length) * 100);

  return (
    <div className="App">
      {progressNum < 100 ? (
        <Game
          step={step}
          setStep={setStep}
          progressNum={progressNum}
          correctNum={correctNum}
          setCorrectNum={setCorrectNum}
        />
      ) : (
        <Result correctNum={correctNum} />
      )}
    </div>
  );
};

export default App;
