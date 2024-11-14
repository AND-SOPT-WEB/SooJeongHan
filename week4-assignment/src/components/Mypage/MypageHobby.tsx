import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Container, Title, MypageSection, Input, Button, OtherHobby } from './MypageComponentStyle';

interface MyHobbyResponse {
  result: {
    hobby: string;
  };
}

interface OtherHobbyResponse {
  result: {
    hobby: string;
  };
}

const MypageHobby = () => {
  const [userNumber, setUserNumber] = useState<string>('');
  const [myHobby, setMyHobby] = useState<string>('');
  const [otherHobby, setOtherHobby] = useState<string>('');
  
  const token = localStorage.getItem('token');
  const fetchMyHobby = async () => {
    if (!token) {
      alert('로그인 후에 다시 시도해주세요.');
      return;
    }

    try {
      const response: AxiosResponse<MyHobbyResponse> = await axios.get(
        'http://211.188.53.75:8080/user/my-hobby',
        {
          headers: {
            token: token,
          },
        }
      );

      if (response.status === 200) {
        setMyHobby(response.data.result.hobby);
      } else {
        alert('취미 정보를 가져오지 못했습니다.');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorCode = error.response.data.code;
        const status = error.response.status;

        if (status === 401 && errorCode === '00') {
          alert('토큰이 없습니다.');
        } else if (status === 403 && errorCode === '00') {
          alert('유효하지 않은 토큰입니다.');
        } else if (status === 404) {
          alert('유효하지 않은 경로입니다.');
        } else {
          alert('알 수 없는 오류가 발생했습니다.');
        }
      }
    }
  };

  const handleSearch = async () => {
    if (!token) {
      alert('로그인 후에 다시 시도해주세요.');
      return;
    }

    try {
      const response: AxiosResponse<OtherHobbyResponse> = await axios.get(
        `http://211.188.53.75:8080/user/${userNumber}/hobby`,
        {
          headers: {
            token: token,
          },
        }
      );

      if (response.status === 200) {
        setOtherHobby(`${userNumber}번 사용자의 취미: ${response.data.result.hobby}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorCode = error.response.data.code;
        if (error.response.status === 404 && errorCode === '01') {
          alert('존재하지 않는 사용자 번호입니다.');
        } else if (error.response.status === 404 && errorCode === '00') {
          alert('유효하지 않은 경로입니다.');
        } else {
          alert('알 수 없는 오류가 발생했습니다.');
        }
      } 
    }
  };

  useEffect(() => {
    fetchMyHobby();
  }, []);

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
