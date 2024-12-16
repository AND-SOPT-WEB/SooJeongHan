import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.darkgreen};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  flex: 1;
  margin-right: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.7rem;
`;

export const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.7rem;
`;
