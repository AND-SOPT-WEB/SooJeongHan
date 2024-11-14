import styled from 'styled-components';

export const Container = styled.div`
  padding: 8rem 0;
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin: 3rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
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

export const BottomButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  margin-top: 15px;
  cursor: pointer;
  text-decoration: underline;
  width: 100%;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.darkgray};
  }
`;
