import { useState } from 'react';

import { Input } from './Input';
export const InputSection = () => {
  const [entry, setEntry] = useState('');

  return (
    <>
      <h2>Input</h2>
      <Input />
    </>
  );
};
