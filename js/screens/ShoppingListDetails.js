import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addProduct, deleteProduct, toggleProduct } from '../modules/shoppingList/actions';
import ProductList from '../components/shoppingListDetails/ProductList';
import ProductForm from '../components/shoppingListDetails/ProductForm';
import Header from '../components/shoppingListDetails/Header';

class ShoppingListsScreen extends Component {
  constructor() {
    super();
    this.state = {
      formInputs: {
        name: '',
        amount: '',
        unit: '',
      },
    };

    this.productsListRef = React.createRef();
  }

  clearInputs = () => {
    this.setState({
      formInputs: {
        name: '',
        amount: '',
        unit: '',
      },
    });
  };

  onTextInputChange = (inputName, text) => {
    this.setState(prevState => ({
      formInputs: {
        ...prevState.formInputs,
        [inputName]: text,
      },
    }));
  };

  onSaveButtonPress = () => {
    const { addProduct } = this.props;
    const {
      formInputs: { name, amount, unit },
    } = this.state;

    addProduct(name, amount, unit);
    this.clearInputs();
    setTimeout(() => this.productsListRef.current.scrollToEnd({ animated: true }), 100);
  };

  onCancelButtonPress = () => {
    this.clearInputs();
  };

  onDeleteButtonPress = id => {
    const { deleteProduct } = this.props;
    deleteProduct(id);
  };

  onProductToggle = id => {
    const { toggleProduct } = this.props;
    toggleProduct(id);
  };

  onBackButtonPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { lists, currentOpenListId } = this.props;
    const { formInputs } = this.state;
    const { name, products } = lists[currentOpenListId];
    return (
      <Container>
        <Header title={name} onBackButtonPress={this.onBackButtonPress} />
        <ProductList listRef={this.productsListRef} data={products} onDeletePress={this.onDeleteButtonPress} onProductToggle={this.onProductToggle} />
        <ProductForm
          formInputs={formInputs}
          clearInputs={this.clearInputs}
          onTextInputChange={this.onTextInputChange}
          onSavePress={this.onSaveButtonPress}
          onCancelPress={this.onCancelButtonPress}
        />
      </Container>
    );
  }
}

ShoppingListsScreen.propTypes = {
  lists: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
  currentOpenListId: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
  toggleProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lists: state.shoppingList.lists,
  currentOpenListId: state.shoppingList.currentOpenListId,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addProduct, deleteProduct, toggleProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListsScreen);
