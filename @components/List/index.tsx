"use client";

// Core types
import type { FC } from "react";

// Svg's
import { ListItem } from "public/svg";

// Vendors
import styled, { css } from "styled-components";

const List = styled.ul`
  margin-left: 10px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;

  ${({ theme: { spaces } }) => css`
    margin-bottom: ${spaces[1]}px;

    svg {
      min-width: 22px;
      min-height: 22px;
      margin-right: ${spaces[1]}px;
    }
  `}
`;

interface IList {
  list: string[];
}

const index: FC<IList> = ({ list }) => {
  return (
    <List>
      {list.map((item, index) => (
        <Item key={index}>
          <ListItem />

          <span>{item}</span>
        </Item>
      ))}
    </List>
  );
};

export { index as List };
