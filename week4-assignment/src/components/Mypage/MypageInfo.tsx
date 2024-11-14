import React, { useState } from 'react';
import axios from 'axios';
import { Container, Title, Input, Button, MypageSection } from './MypageComponentStyle';
import { useNavigate } from 'react-router-dom';

const MypageInfo = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState<string>('');
  const [newHobby, setNewHobby] = useState<string>(''); 

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewPassword(e.target.value);
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewHobby(e.target.value);
  };

  const handleUpdate = async (): Promise<void> => {
    if (!newPassword && !newHobby) {
      alert('새 비밀번호 또는 새 취미를 입력해주세요!');
      return;
    }

    if ((newPassword && newPassword.length > 8) || (newHobby && newHobby.length > 8)) {
      alert('비밀번호와 취미는 8자 이하로 입력해주세요!');
      return;
    }

    const requestData: { hobby?: string, password?: string } = {};

    if (newPassword) {
      requestData.password = newPassword;
    }

    if (newHobby) {
      requestData.hobby = newHobby;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인 해주세요!');
      return;
    }

    try {
      const response = await axios.put('http://211.188.53.75:8080/user', requestData, {
        headers: {
          token: token,
        },
      });

      if (response.status === 200) {
        alert('정보가 수정되었습니다!');
        setNewPassword('');
        setNewHobby('');
        navigate('/');
      } else {
        alert('정보 수정에 실패했습니다!');
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const { code } = (error.response?.data as { code: string });  // 타입 명시
        if (code === '00') {
          alert('입력 값이 잘못되었습니다. 비밀번호와 취미는 8자 이하로 입력해주세요.');
        } else {
          alert('서버와의 연결에 문제가 발생했습니다.');
        }
      } else {
        alert('서버와의 연결에 문제가 발생했습니다.');
      }
    }
  };

  return (
    <Container>
      <Title>내 정보 수정하기</Title>
      <MypageSection>
        <label htmlFor="new-password">새 비밀번호</label>
        <Input
          id="new-password"
          type="password"
          value={newPassword}
          onChange={handlePasswordChange}
        />
      </MypageSection>
      <MypageSection>
        <label htmlFor="new-hobby">새 취미</label>
        <Input
          id="new-hobby"
          type="text"
          value={newHobby}
          onChange={handleHobbyChange}
        />
      </MypageSection>
      <Button onClick={handleUpdate}>수정하기</Button>
    </Container>
  );
};

export default MypageInfo;
