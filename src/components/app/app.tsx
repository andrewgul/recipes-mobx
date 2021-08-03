import React from 'react';
import styles from './app.module.css'
import Header from '../header'
import Recipes from '../recipes'
import Counter from '../counter'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Recipes />
      <Counter />
    </div>
  );
}

export default App;
