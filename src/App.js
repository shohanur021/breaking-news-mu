import './App.css';
import Button from '@material-ui/core/Button';
import  News  from './Components/News/News';
import { useState,useEffect } from 'react';
import axios from 'axios';

function App() {
  const [articles,setArticles] = useState([]);
  // useEffect(() => {
  //   const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=badafb73e45240d3a73cf78dc8454a45'
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setArticles(data.articles))
  // },[])
  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=badafb73e45240d3a73cf78dc8454a45'
    axios(url)
    .then(data => setArticles(data.data.articles))
  },[])
  

  return (
    <div>
       <h2>Headline : {articles.length}</h2>
       {
         articles.map(article => <News article={article}></News>)
       }
    </div>
  );
}

export default App;
