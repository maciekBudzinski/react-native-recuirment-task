import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import ProductItem from './ListItem';

const ProductList = ({ listRef, data, ...restProps }) => (
  <FlatList
    ref={listRef}
    data={Object.values(data)}
    renderItem={({ item }) => <ProductItem {...item} {...restProps} />}
    keyExtractor={({ id }) => id}
  />
);

ProductList.propTypes = {
  listRef: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ProductList;
