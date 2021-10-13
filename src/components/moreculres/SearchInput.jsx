import { memo } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/Input';

export const SearchInput = memo(() => {
  return (
    <div>
      <Input placeholder="Input Anything"></Input>
      <PrimaryButton>Search</PrimaryButton>
    </div>
  );
});
