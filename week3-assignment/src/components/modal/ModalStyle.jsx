import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  border-radius: 8px;
  text-align: center;
`;

export const ModalMessage = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;
export const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme.colors.blue};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.8rem;
  cursor: pointer;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.colors.navy};
  }
`;