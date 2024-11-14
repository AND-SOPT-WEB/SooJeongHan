import { useState } from 'react';
import SignupName from '../components/Signup/SignupName';
import SignupPassword from '../components/Signup/SignupPassword';
import SignupHobby from '../components/Signup/SignupHobby';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Title, BottomTextWrapper, BottomButton } from './SignupPageStyle';

const SignupPage = () => {
  const [username, setUsername] = useState<string>(''); 
  const [password, setPassword] = useState<string>(''); 
  const [hobby, setHobby] = useState<string>(''); 
  const [step, setStep] = useState<number>(1); 
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
      const response = await axios.post('http://211.188.53.75:8080/user', {
        username,
        hobby,
        password,
      });

      if (response.status === 200 && response.data.result) {
        alert(`회원가입 성공! 회원번호: ${response.data.result.no}`);
        navigate('/');
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const { status, data } = error.response;

        if (status === 400) {
          switch (data.code) {
            case '00':
              alert('요청이 유효하지 않습니다. 요청 본문을 확인해주세요.');
              break;
            case '01':
              alert('아이디, 비밀번호, 또는 취미가 8자를 초과했습니다.');
              break;
            default:
              alert('잘못된 요청입니다. 입력 값을 확인해주세요.');
              break;
          }
        } else if (status === 404) {
          alert('유효하지 못한 경로입니다. 경로를 확인해 주세요.');
        } else if (status === 409 && data.code === '00') {
          alert('이미 존재하는 아이디입니다. 다른 아이디를 사용해 주세요.');
        } else {
          alert('알 수 없는 오류가 발생했습니다.');
        }
      } else {
        alert('네트워크 오류나 기타 문제로 요청이 실패했습니다.');
      }
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
