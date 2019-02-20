import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({ data, listRef, ...restProps }) => (
  <FlatList ref={listRef} data={data} renderItem={({ item }) => <ProductItem {...item} {...restProps} />} keyExtractor={({ id }) => id.toString()} />
);

ProductList.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default ProductList;
