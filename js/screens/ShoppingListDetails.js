import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addProduct, deleteProduct, toggleListActive, toggleProduct } from '../modules/shoppingList/actions';
import ProductList from '../components/shoppingListDetails/ProductList';
import ProductForm from '../components/shoppingListDetails/ProductForm';
import Header from '../components/shoppingListDetails/Header';
import ArchiveListInfo from '../components/shoppingListDetails/ArchiveListInfo';
import { showToast } from '../services/Toasts';

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
    const { deleteProduct, lists, currentOpenListId } = this.props;
    if (lists[currentOpenListId].isActive) {
      deleteProduct(id);
    } else {
      showToast('List is archived!', 'warning');
    }
  };

  onProductToggle = id => {
    const { toggleProduct, lists, currentOpenListId } = this.props;
    if (lists[currentOpenListId].isActive) {
      toggleProduct(id);
    } else {
      showToast('List is archived!', 'warning');
    }
  };

  onBackButtonPress = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  onToggleListActive = () => {
    const { toggleListActive } = this.props;
    toggleListActive();
  };

  render() {
    const { lists, currentOpenListId } = this.props;
    const { formInputs } = this.state;
    const { id, isActive, name, shop, products } = lists[currentOpenListId];
    return (
      <Container>
        <Header
          id={id}
          isActive={isActive}
          name={name}
          shop={shop}
          onBackButtonPress={this.onBackButtonPress}
          onToggleListActive={this.onToggleListActive}
        />
        <ProductList listRef={this.productsListRef} data={products} onDeletePress={this.onDeleteButtonPress} onProductToggle={this.onProductToggle} />
        {isActive ? (
          <ProductForm
            formInputs={formInputs}
            clearInputs={this.clearInputs}
            onTextInputChange={this.onTextInputChange}
            onSavePress={this.onSaveButtonPress}
            onCancelPress={this.onCancelButtonPress}
          />
        ) : (
          <ArchiveListInfo />
        )}
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
  toggleListActive: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  lists: state.shoppingList.lists,
  currentOpenListId: state.shoppingList.currentOpenListId,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addProduct, deleteProduct, toggleProduct, toggleListActive }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListsScreen);
