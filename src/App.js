import './App.css';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Parent from './Context/hooks/Parent'
import Form from './components/global/Form'

function App() {
  return (
    <div className="container mx-auto">
      This is home
      <Parent />
      <Form />
    </div>
  );
}

export default App;
