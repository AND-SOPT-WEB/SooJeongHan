import axios, { AxiosResponse } from 'axios';
import Login from '../components/Login/Login';
import { useNavigate } from 'react-router-dom';

interface LoginData {
  username: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (loginData: LoginData) => {

    try {
      const response: AxiosResponse<{ result: { token: string } }> = await axios.post('http://211.188.53.75:8080/login', {
        username: loginData.username,
        password: loginData.password,
      });

      if (response.status === 200) {
        alert('로그인 성공!');
        const token = response.data.result.token;
        localStorage.setItem('token', token);
        navigate('/mypage');
      } else {
        alert('로그인 실패');
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const statusCode = error.response?.status; 
        const errorCode = error.response?.data?.code; 

        switch (statusCode) {
          case 400:
            if (errorCode === '01') {
              alert('로그인 실패: 요청 바디가 유효하지 않음');
            } else if (errorCode === '02') {
              alert('로그인 실패: 올바르지 못한 비밀번호');
            }
            break;
          case 403:
            if (errorCode === '01') {
              alert('로그인 실패: 비밀번호가 틀림');
            }
            break;
          case 404:
            if (errorCode === '00') {
              alert('로그인 실패: 유효하지 못한 경로');
            }
            break;
          default:
            alert('로그인 실패: 알 수 없는 에러');
            break;
        }
      } else {
        alert('로그인 중 알 수 없는 에러 발생');
      }
    }
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;