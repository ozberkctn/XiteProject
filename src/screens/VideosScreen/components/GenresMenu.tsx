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
    <Container>
      <GenresList horizontal>
        {genres?.map(item => (
          <GenreItem
            key={item.id}
            item={item}
            onGenrePress={(state: boolean) => onGenrePress(item.id, state)}
          />
        ))}
      </GenresList>
    </Container>
  );
};

const GenresList = styled.ScrollView`
  background-color: black;
  padding-vertical: 12px;
`;

const Container = styled.View`
  height: 54px;
`;

function genresPropsAreEqual(prevGenres: IGenresMenu, nextGenres: IGenresMenu) {
  return isEqual(prevGenres, nextGenres);
}

export const MemoizedGenres = React.memo(GenresMenu, genresPropsAreEqual);
