import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import '../fonts/Montserrat-Medium.ttf';
import '../fonts/Montserrat-SemiBold.ttf';

import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home'));
const TweetsPage = lazy(() => import('../pages/Tweets'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
