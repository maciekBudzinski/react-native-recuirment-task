import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

const List = ({ data, ...restProps }) => (
  <FlatList data={data} renderItem={({ item }) => <ListItem {...item} {...restProps} />} keyExtractor={({ id }) => id} />
);

List.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default List;
