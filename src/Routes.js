import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import MyRecord from './pages/MyRecord/MyRecord';
import Search from './pages/Search/Search';
import BookInfo from './pages/BookInfo/BookInfo';
import Recording from './pages/Recording/Recording';
import View from './pages/View/View';
import Loading from './components/Loading';
import List from './pages/MyRecord/List';

const Routing = () => {

  return (
    <Router>
      
        <Header />
        
          <Routes>
            <Route path={"/"} exact={true} element={<MyRecord />} />
            <Route path={"/search"} exact={true} element={<Search />} />
            <Route path={"/bookinfo/:isbn"} exact={true} element={<BookInfo />} />
            <Route path={"/recording/:state/:isbn"} exact={true} element={<Recording />} />
            <Route path={"/view/:id"} exact={true} element={<View />} />
            <Route path={"/list"} exact={true} element={<List />} />
            <Route path={"/loading"} exact={true} element={<Loading />} />
          </Routes>
        
    </Router>
  );
};
export default Routing;

