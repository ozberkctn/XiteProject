import {isEqual} from 'lodash';
import React from 'react';
import styled from 'styled-components/native';
import {Genre} from '../../../apiTypes';
import GenreItem from './GenreItem';

interface IGenresMenu {
  genres?: Genre[];
  onGenrePress: (id: number, state: boolean) => void;
}

const GenresMenu = ({genres, onGenrePress}: IGenresMenu) => {
  return (
    <Container horizontal>
      {genres?.map(item => (
        <GenreItem
          key={item.id}
          item={item}
          onGenrePress={(state: boolean) => onGenrePress(item.id, state)}
        />
      ))}
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: black;
  position: absolute;
  top: 64px;
  padding-vertical: 12px;
`;

function genresPropsAreEqual(prevGenres: IGenresMenu, nextGenres: IGenresMenu) {
  return isEqual(prevGenres, nextGenres);
}

export const MemoizedGenres = React.memo(GenresMenu, genresPropsAreEqual);
