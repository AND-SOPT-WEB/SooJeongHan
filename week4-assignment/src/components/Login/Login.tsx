import { useState } from 'react';
import { Container, Title, InputWrapper, Input, Button, BottomButton } from './LoginStyles';
import { useNavigate } from 'react-router-dom';

interface LoginData {
  username: string;
  password: string;
}

interface LoginProps {
  onLogin: (loginData: LoginData) => void; 
}

const Login = ({ onLogin }: LoginProps) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({ username: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    if (loginData.username && loginData.password) {
      onLogin(loginData);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <Title>로그인</Title>
      <InputWrapper>
        <Input
          type="text"
          id="username"
          name="username"
          value={loginData.username}
          onChange={handleChange}
          placeholder="아이디"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
      </InputWrapper>
      <Button onClick={handleLogin}>로그인</Button>
      <BottomButton onClick={handleSignup}>회원가입</BottomButton>
    </Container>
  );
};

export default Login;