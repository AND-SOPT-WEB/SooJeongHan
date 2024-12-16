import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 40rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  color: ${({ theme }) => theme.colors.black};
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

export const MypageSection = styled.div`
  width: 100%;
  margin: 1rem 0;
  label {
    font-size: 1.8rem;
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.darkgreen};
    font-weight: 600;
    height: 3.6rem;
  }
`;

export const Input = styled.input`
  margin-top: 1rem;
  padding: 0.8rem;
  font-size: 1.6rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.darkgreen};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  width: 100%;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightgreen};
  }
`;

export const OtherHobby = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkgreen};
  font-weight: 600;
  width: 100%;
`;
