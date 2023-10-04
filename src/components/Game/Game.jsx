import { questions } from '../../App';

const Game = ({ step, setStep, progressNum, correctNum, setCorrectNum }) => {
  const nextQuest = (i) => {
    setStep(step + 1);

    if (i === questions[step].correct) setCorrectNum(correctNum + 1);
  };

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${progressNum}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{questions[step].title}</h1>
      <ul>
        {questions[step].variants.map((answer, i) => (
          <li onClick={() => nextQuest(i)} key={i}>
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
