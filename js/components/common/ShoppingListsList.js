import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import ShoppingListItem from './ShoppingListItem';

// const renderItem = ({ item }) => <ShoppingListItem {...item} />;

const ShoppingListsList = ({ data, ...restProps }) => (
  <FlatList inverted data={data} renderItem={({ item }) => <ShoppingListItem {...item} {...restProps} />} keyExtractor={({ id }) => id.toString()} />
);

ShoppingListsList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default ShoppingListsList;
