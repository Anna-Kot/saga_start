import React, { useEffect } from 'react';
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PostsPage from './pages/PostsPage';
import CurrentPost from './pages/CurrentPost/CurrentPost';
import { loadPosts } from './store/post/actions';

import * as s from './styles/App.styled';
import ReadList from './pages/ReadList/ReadList';
import FilterPosts from './pages/FilterPosts/FilterPosts';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchPageReactSelect from './pages/SearchPageReactSelect/SearchPageReactSelect';
import AdvanceInfo from './pages/AdvanceInfo/AdvanceInfo';
import Disbursment from './pages/Disbursment/Disbursment';
import Performance from './pages/PerformanceBlock/Performance';
import PerformDisburAdvance from './pages/PerformDisburAdvance/PerformDisburAdvance';
import PaymentPlans from './pages/PaymentPlans/PaymentPlans';
import Splits from './pages/Splits/Splits';

function App() {
  const dispatch = useDispatch();

  const handleLoadPosts = () => {
    dispatch(loadPosts());
  };
  useEffect(() => {
    handleLoadPosts();
  }, []);
  return (
    <s.BodyWrapper>
      <Routes>
        <Route path="/" exact element={<Navigate to="/posts" />} />
        <Route path="/posts" exact element={<PostsPage />} />
        <Route path="/search" exact element={<SearchPage />} />
        <Route path="/search-select" exact element={<SearchPageReactSelect />} />
        <Route path="/posts/:id" exact element={<CurrentPost />} />
        <Route path="/readlist" exact element={<ReadList />} />
        <Route path="/filter-posts" exact element={<FilterPosts />} />

        <Route path="/advance-info" exact element={<AdvanceInfo />} />
        <Route path="/disbursment" exact element={<Disbursment />} />
        <Route path="/performance" exact element={<Performance />} />
        <Route path="/performdisburadvance" exact element={<PerformDisburAdvance />} />
        <Route path="/paymentplans" exact element={<PaymentPlans />} />
        <Route path="/splits" exact element={<Splits />} />
      </Routes>
    </s.BodyWrapper>
  );
}

export default App;
