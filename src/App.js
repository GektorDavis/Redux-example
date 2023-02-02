import { useSelector } from 'react-redux';
import './App.css';
import CheckedPage from './pages/CheckedPage/checked-page';
import CounterPage from './pages/CounterPage/counter-page';

function App() {
  const shouldShow = useSelector((state) => state.counter.show);
  return (
    <div className="App">{shouldShow ? <CounterPage /> : <CheckedPage />}</div>
  );
}

export default App;
