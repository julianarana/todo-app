import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import Home from './Home';
import Error404 from './Error404';

const Pages = (): ReactElement => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
};

export default Pages;
