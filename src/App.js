
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Header from './Components/header/Header';
import Brand from './Components/brands/Brand';
import Whatisfluke from './Components/whatisfluke/Whatisfluke';
import Clock from './Components/clock/Clock';

function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
     </div>
     <Brand />
     <Clock />
     <Whatisfluke />
    </div>
  );
}

export default App;
