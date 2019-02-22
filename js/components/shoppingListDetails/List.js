import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = ({ listRef, data, ...restProps }) => (
  <FlatList ref={listRef} data={Object.values(data)} renderItem={({ item }) => <ListItem {...item} {...restProps} />} keyExtractor={({ id }) => id} />
);

List.propTypes = {
  listRef: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default List;
