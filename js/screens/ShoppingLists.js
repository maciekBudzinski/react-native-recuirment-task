import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import filter from 'lodash.filter';
import ActionButton from '../components/shoppingLists/AddButton';
import ListForm from '../components/shoppingLists/ListForm';
import { addList, editList, deleteList, openList, addProduct } from '../modules/shoppingList/actions';
import ShoppingListsList from '../components/common/ShoppingListsList';
import Header from '../components/shoppingLists/Header';
import { LIST_COLORS } from '../style/colors';

class ShoppingListsScreen extends Component {
  state = {
    isListFormVisible: false,
    editingListId: null,
    isListEditing: false,
    formInputs: {
      name: '',
      shop: '',
    },
    color: '',
  };

  inputRefs = {
    name: React.createRef(),
    shop: React.createRef(),
  };

  focusInput = refName => {
    this.inputRefs[refName].current._root.focus();
  };

  onActionButtonPress = () => {
    const randomColorIndex = Math.floor(Math.random() * LIST_COLORS.length);

    this.setState({
      isListFormVisible: true,
      color: LIST_COLORS[randomColorIndex],
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
      formInputs: { name, shop },
      color,
    } = this.state;

    if (isListEditing) {
      editList(editingListId, name, shop, color);
    } else {
      addList(name, shop, color);
    }

    this.setState({
      isListFormVisible: false,
      formInputs: {
        name: '',
        shop: '',
      },
    });
  };

  onEditListButtonPress = (id, name, shop, color) => {
    this.setState({
      isListFormVisible: true,
      isListEditing: true,
      editingListId: id,
      formInputs: {
        name,
        shop,
      },
      color,
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

  onColorChange = color => {
    this.setState({
      color,
    });
  };

  render() {
    const { lists } = this.props;
    const { isListFormVisible, isListEditing, formInputs, color } = this.state;
    return (
      <Container>
        <Header />

        {Object.keys(lists).length > 0 && (
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
          inputRefs={this.inputRefs}
          focusInput={this.focusInput}
          color={color}
          onColorChange={this.onColorChange}
        />
        <ActionButton onPress={this.onActionButtonPress} />
      </Container>
    );
  }
}

ShoppingListsScreen.propTypes = {
  lists: PropTypes.instanceOf(Object).isRequired,
  addList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  openList: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  lists: filter(state.shoppingList.lists, ({ isActive }) => isActive === true),
});

const mapDispatchToProps = dispatch => bindActionCreators({ addList, editList, deleteList, openList, addProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListsScreen);
