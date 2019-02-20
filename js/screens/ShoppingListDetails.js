import React, { Component } from 'react';
import { View, Text, Container, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from '../components/shoppingLists/AddButton';
import ListForm from '../components/shoppingLists/ListForm';
import { addList, editList, deleteList, openList, addProduct, deleteProduct, toggleProduct } from '../modules/shoppingList/actions';
import ShoppingListsList from '../components/common/ShoppingListsList';
import ProductList from '../components/shoppingListDetails/ProductList';
import ProductForm from '../components/shoppingListDetails/ProductForm';

class ShoppingListsScreen extends Component {
  state = {
    isListFormVisible: false,
    editingListId: -1,
    isListEditing: false,
    formInputs: {
      name: '',
      amount: '',
      unit: '',
    },
  };

  clearInputs = () => {
    this.setState({
      formInputs: {
        name: '',
        amount: '',
        unit: '',
      },
    });
  };
  // onActionButtonPress = () => {
  //   this.setState({
  //     isListFormVisible: true,
  //   });
  // };

  // onRequestListFormModalClose = () => {
  //   this.setState({
  //     isListFormVisible: false,
  //   });
  // };

  onTextInputChange = (inputName, text) => {
    this.setState(prevState => ({
      formInputs: {
        ...prevState.formInputs,
        [inputName]: text,
      },
    }));
  };

  // onAddProductPress = () => {
  //   const { addProduct, currentOpenList } = this.props;
  //   addProduct('produkt', 2, 'cm');
  // };

  onSaveButtonPress = () => {
    const { addProduct } = this.props;
    const {
      formInputs: { name, amount, unit },
    } = this.state;

    addProduct(name, amount, unit);
    this.clearInputs();
  };

  onCancelButtonPress = () => {
    this.clearInputs();
  };

  onDeleteButtonPress = id => {
    const { deleteProduct } = this.props;
    deleteProduct(id);
  };

  onProductToggle = id => {
    console.log('toogle');
    const { toggleProduct } = this.props;
    toggleProduct(id);
  };

  render() {
    const { lists, currentOpenListIndex } = this.props;
    const currentOpenList = lists[currentOpenListIndex];
    const { isListFormVisible, isListEditing, formInputs } = this.state;
    return (
      <Container>
        <View>
          <Text>Shopping Details Screen {currentOpenList.name}</Text>
        </View>
        <ProductList data={currentOpenList.products} onDeletePress={this.onDeleteButtonPress} onProductToggle={this.onProductToggle} />
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

const mapStateToProps = state => ({
  lists: state.shoppingList.lists,
  currentOpenListIndex: state.shoppingList.currentOpenListIndex,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addProduct, deleteProduct, toggleProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListsScreen);
