import './App.css';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Parent from './Context/hooks/Parent'

function App() {
  return (
    <div className="container mx-auto">
      This is home
      <Parent />
    </div>
  );
}

export default App;
