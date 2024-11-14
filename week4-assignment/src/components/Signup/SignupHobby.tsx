import React, { useState, useEffect } from 'react';
import { Button, Input, Label, InputWrapper, ErrorText } from './SignupStyles';

interface SignupHobbyProps {
  onSetHobby: (hobby: string) => void;
  onSignupComplete: () => void;
}

const SignupHobby = ({ onSetHobby, onSignupComplete }: SignupHobbyProps) => {
  const [hobbyInput, setHobbyInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (hobbyInput.trim() !== '') {
      onSetHobby(hobbyInput);
    }
  }, [hobbyInput, onSetHobby]);

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHobbyInput(value);

    if (value.length > 8) {
      setError('취미는 8자 이하로 입력해 주세요');
    } else {
      setError('');
    }
  };

  const handleSignup = () => {
    onSignupComplete();
  };

  return (
<>
      <Label htmlFor="hobby">취미</Label>
      <InputWrapper>
        <Input
          type="text"
          id="hobby"
          name="hobby"
          value={hobbyInput}
          onChange={handleHobbyChange}
          placeholder="취미를 입력해주세요"
        />
      </InputWrapper>

      {error && <ErrorText>{error}</ErrorText>}

      <Button 
        onClick={handleSignup}
        disabled={hobbyInput.trim() === '' || hobbyInput.length > 8}
      >
        회원가입
      </Button>
      </>
  );
};

export default SignupHobby;
