import React from "react";
import styled from "styled-components";

const MainWrapper = styled.li<{ even: boolean }>`
  list-style: none;
  padding: 20px;
  background-color: ${({ theme, even }) =>
    even ? theme.colors.tertiary : theme.colors.main};
`;

const NameAndContinent = styled.div`
  .name {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-bottom: 10px;
  }

  .continent {
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

interface IListItem {
  even: boolean;
}

const ListItem: React.FC<IListItem> = ({ even }) => {
  return (
    <MainWrapper even={even}>
      <NameAndContinent>
        <p className="name">United Arab Emirates</p>
        <p className="continent">Asia</p>
      </NameAndContinent>
    </MainWrapper>
  );
};

export default ListItem;
