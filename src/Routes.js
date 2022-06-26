import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import MyRecord from './pages/MyRecord/MyRecord';
import Search from './pages/Search/Search';
import BookInfo from './pages/BookInfo/BookInfo';
import Recording from './pages/Recording/Recording';
import View from './pages/View/View';
import ScrollTest from './pages/ScrollTest';
import Loading from './components/Loading';
import List from './pages/MyRecord/List';

const Routing = () => {

  return (
    <Router>
      
        <Header />
        
          <Routes>
            <Route path={"/"} element={<MyRecord />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/bookinfo/:isbn"} element={<BookInfo />} />
            <Route path={"/recording/:state/:isbn"} element={<Recording />} />
            <Route path={"/view/:id"} element={<View />} />
            <Route path={"/list"} element={<List />} />
            <Route path={"/test"} element={<ScrollTest />} />
            <Route path={"/loading"} element={<Loading />} />
          </Routes>
        
    </Router>
  );
};
export default Routing;

