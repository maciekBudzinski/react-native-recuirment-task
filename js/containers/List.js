import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from '../components/shoppingList/AddButton';
import Form from '../components/shoppingList/Form';
import { addList, editList, openList, deleteList, addProduct } from '../modules/shoppingList/actions';
import ShoppingListsList from '../components/shoppingList/List';
import Header from '../components/shoppingList/Header';
import { LIST_COLORS } from '../style/colors';

class List extends Component {
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

    Alert.alert('Are you sure you want to delete this item?', 'Give me one more chance...', [
      { text: 'Cancel' },
      { text: 'Yes, delete', onPress: () => deleteList(id) },
    ]);
  };

  onColorChange = color => {
    this.setState({
      color,
    });
  };

  render() {
    const { isActive, lists } = this.props;
    const { isListFormVisible, isListEditing, color, formInputs } = this.state;
    return (
      <Container>
        <Header isActive={isActive} />
        <ShoppingListsList
          data={lists}
          onEditButtonPress={this.onEditListButtonPress}
          onDeleteButtonPress={this.onDeleteListButtonPress}
          onPress={this.onListPress}
        />
        <Form
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
        {isActive && <ActionButton onPress={this.onActionButtonPress} />}
      </Container>
    );
  }
}

List.propTypes = {
  isActive: PropTypes.bool.isRequired,
  addList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  openList: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  lists: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  lists: Object.values(state.shoppingList.lists).filter(({ isActive }) => isActive === ownProps.isActive),
});

const mapDispatchToProps = dispatch => bindActionCreators({ addList, editList, openList, deleteList, addProduct }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);