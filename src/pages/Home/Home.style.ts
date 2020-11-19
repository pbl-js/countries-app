import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.mainPadding};
`;

export const Search = styled.input`
  width: 100%;
  max-width: 250px;
  height: 50px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-right: auto;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.tertiary};
  color: white;
  font-size: ${({ theme }) => theme.fontSize.xs};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
