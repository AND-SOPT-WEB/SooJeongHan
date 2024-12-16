import { useState } from 'react';
import MypageHeader from '../components/Mypage/MypageHeader';
import MypageHobby from '../components/Mypage/MypageHobby';
import MypageInfo from '../components/Mypage/MypageInfo';

const MypagePage = () => {
  const [selectedComponent, setSelectedComponent] = useState<
    '취미' | '내 정보'
  >('취미');

  const handleComponentSelect = (component: string) => {
    setSelectedComponent(component as '취미' | '내 정보');
  };

  return (
    <div>
      <MypageHeader onComponentSelect={handleComponentSelect} />
      <div>
        {selectedComponent === '취미' && <MypageHobby />}
        {selectedComponent === '내 정보' && <MypageInfo />}
      </div>
    </div>
  );
};
export default MypagePage;
