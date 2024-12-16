import { useState, useEffect } from 'react';
import { fetchMyHobby, fetchOtherHobby } from '../../apis/hobbyApi';
import { onErrorResponse } from '../../utils/errorHandler';
import {
  Container,
  Title,
  MypageSection,
  Input,
  Button,
  OtherHobby,
} from './MypageComponentStyle';

const MypageHobby = () => {
  const [userNumber, setUserNumber] = useState('');
  const [myHobby, setMyHobby] = useState('');
  const [otherHobby, setOtherHobby] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      fetchMyHobby(token)
        .then((hobby) => setMyHobby(hobby))
        .catch((error) => alert(onErrorResponse(error)));
    } else {
      alert('로그인 후에 다시 시도해주세요.');
    }
  }, [token]);

  const handleSearch = async () => {
    if (!token) {
      alert('로그인 후에 다시 시도해주세요.');
      return;
    }

    try {
      const hobby = await fetchOtherHobby(token, userNumber);
      setOtherHobby(hobby);
    } catch (error) {
      alert(onErrorResponse(error));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNumber(e.target.value);
  };

  return (
    <Container>
      <Title>취미</Title>
      <MypageSection>
        <label>나의 취미</label>
        <p>{myHobby || '취미 정보를 불러오는 중...'}</p>
      </MypageSection>
      <MypageSection>
        <label>다른 사람들의 취미</label>
        <Input
          type="text"
          placeholder="사용자 번호"
          value={userNumber}
          onChange={handleInputChange}
        />
      </MypageSection>
      <Button onClick={handleSearch}>검색</Button>
      <OtherHobby>{otherHobby || ''}</OtherHobby>
    </Container>
  );
};

export default MypageHobby;
