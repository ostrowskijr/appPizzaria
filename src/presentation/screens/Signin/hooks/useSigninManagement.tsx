import { useState } from 'react';

type Fields = {
  email: string;
  password: string;
};

export const useSigninManagement = () => {
  const [fields, setFields] = useState<Fields>({
    email: '',
    password: '',
  });

  const actions = {
    handleChangeField: (field: keyof Fields, value: string) => {
      setFields({ ...fields, [field]: value });
    },
    handleSignin: () => {
      console.log(fields);
    },
  };

  return { fields, actions };
};
