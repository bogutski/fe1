import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

const items = [
  {
    text: 'Home',
    link: 'home-page'
  },
  {
    text: 'Products',
    link: 'prod-page'
  },
  {
    text: 'Services',
    link: 'serv-page'
  },
  {
    text: 'Prices',
    link: 'price-page',
    size: 1
  }
];

function App() {
  return (
    <div className="App">
      <Header menuItems={items}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
