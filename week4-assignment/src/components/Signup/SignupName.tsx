import React, { useState } from 'react';
import { Button, Input, Label, InputWrapper, ErrorText } from './SignupStyles';

interface SignupNameProps {
  onNext: () => void;
  onSetName: (username: string) => void; 
}

const SignupName = ({ onNext, onSetName }: SignupNameProps) => {
  const [username, setUsername] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    setUsername(inputName); 

    if (inputName.length > 8) {
      setError('이름은 8이하로 입력해 주세요');
    } else {
      setError('');
    }
  };

  const handleNextClick = () => {
    onSetName(username);
    onNext();
  };

  return (
    <>
      <Label htmlFor="name">이름</Label>
      <InputWrapper>
        <Input
          type="text"
          id="name"
          name="name"
          value={username}
          onChange={handleNameChange}
          placeholder="사용자 이름을 입력해주세요"
        />
      </InputWrapper>

      {error && <ErrorText>{error}</ErrorText>} 

      <Button 
        onClick={handleNextClick} 
        disabled={username.trim() === '' || username.length > 8} 
      >
        다음
      </Button>

    </>
  );
};

export default SignupName;
