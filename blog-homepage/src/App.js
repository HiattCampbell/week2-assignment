import React from 'react';
import './App.css';
import yourArticles from './_data/your-articles.json';
import ForYouArticle from './ForYouArticle';
import missedArticles from './_data/missed-articles.json';
import ICYMIArticle from './ICYMIArticle';

function App() {
  return (
    <div className="App">
      <h3 className="header">For you</h3>
      <hr></hr>
      <div className="forYouContainer">
        {yourArticles.map((article, idx) => {
          return (
          <ForYouArticle article={article} key={article.title} />
          )
        })}
      </div>
      <h3 className="header">In case you missed it</h3>
      <hr></hr>
      <div className="icymiContainer">
        {missedArticles.map((article, idx) => {
          return (
          <ICYMIArticle article={article} key={article.title} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
