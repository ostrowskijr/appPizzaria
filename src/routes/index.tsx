import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import Loading from '../_components/Loading';

function Routes() {
  const isAuthenticated = false;
  const loading = false;
  return loading ? (
    <Loading />
  ) : isAuthenticated ? (
    <AppRoutes />
  ) : (
    <AuthRoutes />
  );
}

export default Routes;
