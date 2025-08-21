import React, { createContext, useState, ReactNode, useEffect } from 'react';
import {
  getStorageInformation,
  removeStorageInformation,
  setStorageInformation,
} from '../storage/async.storage';

type AuthContextType = {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
  isLoadingAuth: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

type User = {
  id: string;
  name: string;
  email: string;
  token: string;
};

const initialUser = {
  id: '',
  name: '',
  email: '',
  token: '',
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

const KEY_STORAGE_USER_INFORMATION = '@userLoginInformation';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(initialUser);
  const isAuthenticated = !!user.token;
  const [isLoadingAuth, setLoadingAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const verifyUserAuthentication = async () => {
      setUser(initialUser);
      const hasUser = await getStorageUserInformation();
      if (Object.keys(hasUser).length > 0) {
        const userInformation = hasUser as User;
        setUser(userInformation);
        setTokenInHeader(userInformation.token);
      }
      setIsLoading(false);
    };
    verifyUserAuthentication();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoadingAuth(true);
    if (email === '' || password === '') {
      throw new Error('Email and password are required');
    }

    if (email === 'admin@admin.com' && password === '123456') {
      setUser({
        id: '1',
        name: 'Admin',
        email: 'admin@admin.com',
        token: '123456',
      } as User);
      await setStorageUserInformation(user);
      setTokenInHeader(user.token);
      setLoadingAuth(false);
      return;
    }
    setLoadingAuth(false);
    throw new Error('Invalid email or password');
  };

  const signOut = async () => {
    setLoadingAuth(true);
    await removeStorageUserInformation();
    setUser(initialUser);
    setLoadingAuth(false);
  };

  const setStorageUserInformation = async (user: User) => {
    await setStorageInformation(
      KEY_STORAGE_USER_INFORMATION,
      JSON.stringify(user),
    );
  };

  const getStorageUserInformation = async (): Promise<User | {}> => {
    return await getStorageInformation(KEY_STORAGE_USER_INFORMATION);
  };

  const removeStorageUserInformation = async () => {
    await removeStorageInformation(KEY_STORAGE_USER_INFORMATION);
  };

  const setTokenInHeader = (token: string) => {
    // TODO: Setar o token no header da requisição
    console.log('token', token);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        isLoadingAuth,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
