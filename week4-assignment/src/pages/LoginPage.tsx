import { useNavigate } from 'react-router-dom';
import { loginApi } from '../apis/authApi';
import { onErrorResponse } from '../utils/errorHandler';
import Login from '../components/Login/Login';
import { LoginData } from '../types/types';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (loginData: LoginData) => {
    try {
      const response = await loginApi(loginData);

      if (response.status === 200) {
        alert('로그인 성공!');
        const token = response.data.result.token;
        localStorage.setItem('token', token);
        navigate('/mypage');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      alert(onErrorResponse(error));
    }
  };

  return <Login onLogin={handleLogin} />;
};

export default LoginPage;
