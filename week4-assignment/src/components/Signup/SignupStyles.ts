import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
  position: relative; /* 상대 위치 설정 */
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1.6rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const IconButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 10px; 
  width: 100%;
`;