import { useDispatch, useSelector } from 'react-redux';
import {
  changeView,
  decrement,
  increment,
} from '../../storageRTK/Counter/reducer';
import './styles.css';

const CounterPage = () => {
  const dispatch = useDispatch();
  const counterStore = useSelector((store) => store.counter);
  const showCounter = () => {
    dispatch(changeView());
  };

  return (
    <div className="block">
      <h1>Счётчик: {counterStore.value}</h1>
      <div className="btns">
        <button onClick={() => dispatch(increment(1))}>Добавить</button>
        <button onClick={() => dispatch(decrement(1))}>Отнять</button>
        <button onClick={() => showCounter()}>
          Перейти на другую страницу
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
