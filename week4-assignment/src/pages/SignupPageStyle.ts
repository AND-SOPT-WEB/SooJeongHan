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

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 3rem;
  color: ${({ theme }) => theme.colors.black};
`;
export const BottomTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 1.4rem;

  span {
    color: ${({ theme }) => theme.colors.black};
    margin-right: 0.8rem;
  }
`;

export const BottomButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.4rem;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.darkgray};
  }
`;
