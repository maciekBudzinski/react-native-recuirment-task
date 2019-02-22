import React, { Component } from 'react';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { toggleListActive } from '../modules/shoppingList/actions';
import { addProduct, toggleProduct, deleteProduct } from '../modules/products/actions';
import List from '../components/shoppingListDetails/List';
import Form from '../components/shoppingListDetails/Form';
import Header from '../components/shoppingListDetails/Header';
import ArchiveListInfo from '../components/shoppingListDetails/ArchiveListInfo';
import { showToast } from '../services/Toasts';
import { openListSelector } from '../modules/shoppingList/selectors';
import { productsInOpenListSelector } from '../modules/products/selectors';

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
    const { addProduct, list } = this.props;
    const {
      formInputs: { name, amount, unit },
    } = this.state;

    addProduct(list.id, name, amount, unit);
    this.clearInputs();
    setTimeout(() => this.productsListRef.current.scrollToEnd({ animated: true }), 100);
  };

  onCancelButtonPress = () => {
    this.clearInputs();
  };

  onDeleteButtonPress = id => {
    const { deleteProduct, list } = this.props;
    if (list.isActive) {
      deleteProduct(id);
    } else {
      showToast('List is archived!', 'warning');
    }
  };

  onProductToggle = id => {
    const { toggleProduct, list } = this.props;
    if (list.isActive) {
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
    const { list, products } = this.props;
    const { formInputs } = this.state;
    const { id, isActive, name, shop } = list;
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
        <List listRef={this.productsListRef} data={products} onDeletePress={this.onDeleteButtonPress} onProductToggle={this.onProductToggle} />
        {isActive ? (
          <Form
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
  addProduct: PropTypes.func.isRequired,
  toggleProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  toggleListActive: PropTypes.func.isRequired,
  list: PropTypes.instanceOf(Object).isRequired,
  products: PropTypes.instanceOf(Array).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  list: openListSelector(state),
  products: productsInOpenListSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ addProduct, deleteProduct, toggleProduct, toggleListActive }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListsScreen);
