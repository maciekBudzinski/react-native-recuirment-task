import React, { Component } from 'react';
import { View, Text, Container, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from '../components/shoppingLists/AddButton';
import ListForm from '../components/shoppingLists/ListForm';
import { addList, editList, deleteList, openList, addProduct } from '../modules/shoppingList/actions';
import ShoppingListsList from '../components/common/ShoppingListsList';

class ShoppingListsScreen extends Component {
  state = {
    isListFormVisible: false,
    editingListId: -1,
    isListEditing: false,
    formInputs: {
      name: '',
    },
  };

  onActionButtonPress = () => {
    this.setState({
      isListFormVisible: true,
    });
  };

  onRequestListFormModalClose = () => {
    this.setState({
      isListFormVisible: false,
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

  onAddProductPress = () => {
    const { addProduct, currentOpenList } = this.props;
    addProduct('produkt', 2, 'cm');
  };

  render() {
    const { lists, currentOpenListIndex } = this.props;
    const currentOpenList = lists[currentOpenListIndex];
    const { isListFormVisible, isListEditing, formInputs } = this.state;
    return (
      <Container>
        <View>
          <Text>Shopping Details Screen {currentOpenListIndex.name}</Text>
        </View>
        <Button onPress={this.onAddProductPress}>
          <Text>Add products</Text>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.shoppingList.lists,
  currentOpenListIndex: state.shoppingList.currentOpenListIndex,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addList, editList, deleteList, openList, addProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListsScreen);
