import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Title, ButtonContainer, Button, LogoutButton } from './MypageHeaderStyle';

interface MypageHeaderProps {
  onComponentSelect: (component: string) => void;
}

const MypageHeader = ({ onComponentSelect }: MypageHeaderProps) => {
  const navigate = useNavigate(); 

  const handleLogout = (): void => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <HeaderContainer>
      <ButtonContainer>
        <Title>마이페이지</Title>
        <Button onClick={() => onComponentSelect('취미')}>취미</Button>
        <Button onClick={() => onComponentSelect('내 정보')}>내 정보</Button>
      </ButtonContainer>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </HeaderContainer>
  );
};

export default MypageHeader;
