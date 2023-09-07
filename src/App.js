import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import QuestionAns from './components/AnsToQuestion/QuestionAns';

function App() {
  return (
    <div>
      < Header ></Header >
      <Products></Products>
      <QuestionAns></QuestionAns>

    </div >
  );
}

export default App;
