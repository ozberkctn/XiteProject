import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Genre} from '../../../apiTypes';
import XiteText from '../../../components/XiteText';
import XiteTouchableOpacity from '../../../components/XiteTouchableOpacity';

interface IGenreItem {
  item: Genre;
  onGenrePress: (state: boolean) => void;
  testID?: string;
}

const GenreItem = ({testID, item, onGenrePress}: IGenreItem) => {
  const [genreState, setGenreState] = useState(false);
  return (
    <Container
      testID={testID}
      activeOpacity={1}
      state={genreState}
      key={item.id}
      onPress={() => {
        setGenreState(!genreState);
        onGenrePress(!genreState);
      }}>
      <GenreName>{item.name}</GenreName>
    </Container>
  );
};

const Container = styled(XiteTouchableOpacity)<{state?: boolean}>`
  height: 30px;
  border-radius: 15px;
  padding-horizontal: 10px;
  margin-horizontal: 3px;
  background-color: ${props => (props.state ? 'gray' : 'white')};
  align-items: center;
  justify-content: center;
`;

const GenreName = styled(XiteText)``;

export default GenreItem;
