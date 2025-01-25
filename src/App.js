import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Categories />
      </main>
    </div>
  );
}

export default App;
