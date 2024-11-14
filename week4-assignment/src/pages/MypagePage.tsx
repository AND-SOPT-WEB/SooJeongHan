import { useState } from 'react';
import MypageHeader from '../components/Mypage/MypageHeader';
import MypageHobby from '../components/Mypage/MypageHobby';
import MypageInfo from '../components/Mypage/MypageInfo';

const MypagePage = () => {
  const [selectedComponent, setSelectedComponent] = useState<string>('취미');

  const handleComponentSelect = (component: string) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <MypageHeader onComponentSelect={handleComponentSelect} />
      <div>
        {selectedComponent === '취미' && <MypageHobby/>}
        {selectedComponent === '내 정보' && <MypageInfo/>}
      </div>
    </div>
  );
};

export default MypagePage;
