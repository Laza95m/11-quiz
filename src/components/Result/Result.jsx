import { questions } from '../../App';

const Result = ({ correctNum }) => {
  return (
    <div className="result">
      <img src="/image.png" />
      <h2>
        Вы отгадали {correctNum} ответа из {questions.length}
      </h2>
      <a href="">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default Result;
