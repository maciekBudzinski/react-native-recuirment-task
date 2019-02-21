import React, { Component } from 'react';
import { View, Text, Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from '../components/shoppingLists/AddButton';
import ListForm from '../components/shoppingLists/ListForm';
import { addList, editList, deleteList, openList, addProduct } from '../modules/shoppingList/actions';
import ShoppingListsList from '../components/common/ShoppingListsList';
import Header from '../components/shoppingLists/Header';

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

  onAddListButtonPress = () => {
    const { addList, editList } = this.props;
    const {
      isListEditing,
      editingListId,
      formInputs: { name },
    } = this.state;

    if (isListEditing) {
      editList(editingListId, name, '#00f');
    } else {
      addList(name, '#00f');
    }

    this.setState({
      isListFormVisible: false,
      formInputs: {
        name: '',
      },
    });
  };

  onEditListButtonPress = (id, name, color) => {
    this.setState({
      isListFormVisible: true,
      isListEditing: true,
      editingListId: id,
      formInputs: {
        name,
      },
    });
  };

  onAddProductPress = (listId, name, amount, unit) => {
    const { addProduct } = this.props;
    addProduct(listId, name, amount, unit);
  };

  onListPress = id => {
    const { navigation, openList } = this.props;
    openList(id);
    navigation.navigate('Details');
  };

  onDeleteListButtonPress = id => {
    const { deleteList } = this.props;
    deleteList(id);
  };

  render() {
    const { lists } = this.props;
    const { isListFormVisible, isListEditing, formInputs } = this.state;
    return (
      <Container>
        <Header />

        {lists.length > 0 && (
          <ShoppingListsList
            data={lists}
            onEditButtonPress={this.onEditListButtonPress}
            onDeleteButtonPress={this.onDeleteListButtonPress}
            onPress={this.onListPress}
          />
        )}
        <ListForm
          isVisible={isListFormVisible}
          isEditing={isListEditing}
          formInputs={formInputs}
          onRequestClose={this.onRequestListFormModalClose}
          onTextInputChange={this.onTextInputChange}
          onAddButtonPress={this.onAddListButtonPress}
        />
        <ActionButton onPress={this.onActionButtonPress} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.shoppingList.lists,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addList, editList, deleteList, openList, addProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListsScreen);
