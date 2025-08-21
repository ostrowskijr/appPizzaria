import React from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import Loading from '../../presentation/_components/Loading';
import { useAuthContext } from '../hooks/useAuthContext';

function Routes() {
  const { isAuthenticated, isLoading } = useAuthContext();
  return isLoading ? (
    <Loading />
  ) : isAuthenticated ? (
    <AppRoutes />
  ) : (
    <AuthRoutes />
  );
}

export default Routes;
