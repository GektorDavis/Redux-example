import { useDispatch, useSelector } from 'react-redux';
import {
  changeViewAction,
  decreaseAction,
  incrementAction,
} from '../../storage/actions/actions';
import './styles.css';

const CounterPage = () => {
  const dispatch = useDispatch();
  const counterStore = useSelector((store) => store.counter);
  const showCounter = () => {
    dispatch(changeViewAction());
  };

  return (
    <div className="block">
      <h1>Счётчик: {counterStore.value}</h1>
      <div className="btns">
        <button onClick={() => dispatch(incrementAction(1))}>Добавить</button>
        <button onClick={() => dispatch(decreaseAction(1))}>Отнять</button>
        <button onClick={() => showCounter()}>
          Перейти на другую страницу
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
