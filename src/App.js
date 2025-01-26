import './App.css';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import ShopInstagram from './components/ShopInstagram';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <Categories />
        <ShopInstagram/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
