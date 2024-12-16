import { useState } from 'react';
import SignupName from '../components/Signup/SignupName';
import SignupPassword from '../components/Signup/SignupPassword';
import SignupHobby from '../components/Signup/SignupHobby';
import { useNavigate } from 'react-router-dom';
import { signupApi } from '../apis/authApi';
import { onErrorResponse } from '../utils/errorHandler';
import {
  Container,
  Title,
  BottomTextWrapper,
  BottomButton,
} from './SignupPageStyle';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hobby, setHobby] = useState('');
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleStepChange = (newStep: number) => {
    setStep(newStep);
  };

  const handleSetName = (name: string) => {
    setUsername(name);
  };

  const handleSetPassword = (password: string) => {
    setPassword(password);
  };

  const handleSetHobby = (hobby: string) => {
    setHobby(hobby);
  };

  const handleSubmit = async () => {
    try {
      const response = await signupApi({ username, password, hobby });

      if (response.status === 200) {
        alert(`회원가입 성공! 회원번호: ${response.data.result.no}`);
        navigate('/');
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      alert(onErrorResponse(error));
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      {step === 1 && (
        <SignupName
          onNext={() => handleStepChange(2)}
          onSetName={handleSetName}
        />
      )}
      {step === 2 && (
        <SignupPassword
          onNext={() => handleStepChange(3)}
          onSetPassword={handleSetPassword}
        />
      )}
      {step === 3 && (
        <SignupHobby
          onSetHobby={handleSetHobby}
          onSignupComplete={handleSubmit}
        />
      )}
      <BottomTextWrapper>
        <span>이미 회원이신가요?</span>
        <BottomButton onClick={() => navigate('/')}>로그인</BottomButton>
      </BottomTextWrapper>
    </Container>
  );
};

export default SignupPage;
