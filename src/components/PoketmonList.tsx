import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  margin-top: 24px;
`;
const ListItem = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  box-shadow: 6px 4px 14px 5px rgba(0, 0, 0, 0.21);
  border-radius: 12px;
  // less 문법 부모 선택자를 참조한다.
  // + 는 형제요소이다.
  & + & {
    margin-top: 18px;
  }
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
`;
const Image = styled.img``;
const Name = styled.p`
  margin: 0;
  padding: 0 0 0 12px;
  flex: 1 1 100%;
  color: #374151;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;
const Index = styled.p`
  position: absolute;
  margin: 0;
  padding: 0;
  right: 16px;
  bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #d1d5db;
`;

const PoketmonList: React.FC = () => {
  const getImageUrl = (pokemonIndex: number): string =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

  const formatNumbering = (pokemonIndex: number | string): string =>
    `#${(typeof pokemonIndex === 'number'
      ? String(pokemonIndex)
      : pokemonIndex
    ).padStart(3, '0')};`;

  return (
    <Base>
      <List>
        <ListItem>
          <Image src={getImageUrl(1)} alt="bulbasaur" />
          <Name />
          <Index>{formatNumbering(1)}</Index>
        </ListItem>
      </List>
    </Base>
  );
};

export default React.memo(PoketmonList);
