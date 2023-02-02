import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../../storageRTK/Counter/reducer';

const CheckedPage = () => {
  const sameStorage = useSelector((state) => state);
  const dispatch = useDispatch();
  const showCounter = () => {
    dispatch(changeView());
  };

  return (
    <div className="block">
      <h1>Счётчик: {sameStorage.counter.value}</h1>
      <span>Значение счётчика остаётся прежним</span>
      <div className="btns">
        <button onClick={() => showCounter()}>На другую страницу</button>
      </div>
    </div>
  );
};

export default CheckedPage;
