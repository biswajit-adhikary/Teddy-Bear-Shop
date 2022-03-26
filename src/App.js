import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}

export default App;
