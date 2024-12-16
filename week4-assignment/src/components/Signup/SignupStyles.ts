import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1.6rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const IconButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkgreen};
  }
`;

export const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  width: 100%;
`;
