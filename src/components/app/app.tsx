import React from 'react';
import styles from './app.module.css'
import Header from '../header'
import Recipes from '../recipes'

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Recipes />
    </div>
  );
}

export default App;
