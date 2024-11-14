import React, { useState } from 'react';
import { Button, Input, Label, InputWrapper, IconButton,ErrorText } from './SignupStyles';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

interface SignupPasswordProps {
  onNext: () => void;
  onSetPassword: (password: string) => void;
}

const SignupPassword = ({ onNext, onSetPassword }: SignupPasswordProps) => {
  const [password, setPassword] = useState<string>(''); 
  const [confirmPassword, setConfirmPassword] = useState<string>(''); 
  const [error, setError] = useState<string>(''); 
  const [showPassword, setShowPassword] = useState<boolean>(false); 

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const name = e.target.name;

    if (name === 'password') {
      setPassword(inputValue);
    } else {
      setConfirmPassword(inputValue);
    }

    if (name === 'password') {
      if (inputValue.length > 8) {
        setError('비밀번호는 8자 이하로 입력해 주세요');
      } else if (inputValue !== confirmPassword) {
        setError('비밀번호가 일치하지 않습니다');
      } else {
        setError('');
      }
    }

    if (name === 'confirmPassword') {
      if (inputValue !== password) {
        setError('비밀번호가 일치하지 않습니다');
      } else if (inputValue.length > 8) {
        setError('비밀번호는 8자 이하로 입력해 주세요');
      } else {
        setError('');
      }
    }

  };

  const handleNextClick = () => {

    setError(''); 
    onSetPassword(password);  
    onNext();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Label htmlFor="password">비밀번호</Label>
      <InputWrapper>
        <Input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력해주세요"
        />
        <IconButton 
          type="button" 
          onClick={togglePasswordVisibility} 
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />} 
        </IconButton>
      </InputWrapper>

      <Label htmlFor="confirmPassword">비밀번호 확인</Label>
      <InputWrapper>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handlePasswordChange}
          placeholder="비밀번호 확인"
        />
      </InputWrapper>

      {error && <ErrorText>{error}</ErrorText>}

      <Button 
        onClick={handleNextClick} 
        disabled={password.trim() === '' || confirmPassword.trim() === '' || password !== confirmPassword || password.length > 8}
      >
        다음
      </Button>
    </>
  );
};

export default SignupPassword;
