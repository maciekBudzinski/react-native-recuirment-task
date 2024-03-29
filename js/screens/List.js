import React, { Component } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from '../components/shoppingList/ActionButton';
import Form from '../components/shoppingList/Form';
import { addList, editList, openList, deleteList, changeSortOrder } from '../modules/shoppingList/actions';
import ShoppingLists from '../components/shoppingList/List';
import Header from '../components/shoppingList/Header';
import { LIST_COLORS } from '../style/colors';
import { listsByStatusSelector } from '../modules/shoppingList/selectors';

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

  onTextInputChange = (inputName, text) => {
    this.setState(prevState => ({
      formInputs: {
        ...prevState.formInputs,
        [inputName]: text,
      },
    }));
  };

  onColorChange = color => {
    this.setState({
      color,
    });
  };

  onRequestListFormModalClose = () => {
    this.setState({
      isListFormVisible: false,
      isListEditing: false,
    });
  };

  onActionButtonPress = () => {
    const randomColorIndex = Math.floor(Math.random() * LIST_COLORS.length);
    this.setState({
      isListFormVisible: true,
      color: LIST_COLORS[randomColorIndex],
    });
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
      this.setState({ isListEditing: false });
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

  onDeleteListButtonPress = id => {
    const { deleteList } = this.props;

    Alert.alert('Are you sure you want to delete this list?', 'Give me one more chance...', [
      { text: 'Cancel' },
      { text: 'Yes, delete', onPress: () => deleteList(id) },
    ]);
  };

  onListPress = id => {
    const { navigation, openList } = this.props;
    openList(id);
    navigation.navigate('Details');
  };

  onFilterButtonPress = () => {
    const { changeSortOrder } = this.props;
    changeSortOrder();
  };

  render() {
    const { isActive, isSortByNewest, lists } = this.props;
    const { isListFormVisible, isListEditing, isSortedByNewest, color, formInputs } = this.state;
    return (
      <Container>
        <Header isActive={isActive} isSortByNewest={isSortByNewest} onFilterButtonPress={this.onFilterButtonPress} />
        <ShoppingLists
          data={lists}
          isSortedByNewest={isSortedByNewest}
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
  isSortByNewest: PropTypes.bool.isRequired,
  lists: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
  addList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  openList: PropTypes.func.isRequired,
  changeSortOrder: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  lists: listsByStatusSelector(state, ownProps),
  isSortByNewest: state.shoppingList.isSortByNewest,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addList, editList, openList, deleteList, changeSortOrder }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
