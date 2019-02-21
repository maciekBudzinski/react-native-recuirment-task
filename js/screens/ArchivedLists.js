import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import filter from 'lodash.filter';
import ListForm from '../components/shoppingLists/ListForm';
import { editList, deleteList, openList } from '../modules/shoppingList/actions';
import ShoppingListsList from '../components/common/ShoppingListsList';
import Header from '../components/shoppingLists/Header';

class ArchivedListsScreen extends Component {
  state = {
    isListFormVisible: false,
    editingListId: null,
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

  onTextInputChange = (inputName, text) => {
    this.setState(prevState => ({
      formInputs: {
        ...prevState.formInputs,
        [inputName]: text,
      },
    }));
  };

  onSaveListButtonPress = () => {
    const { editList } = this.props;
    const {
      editingListId,
      formInputs: { name, shop },
      color,
    } = this.state;

    editList(editingListId, name, shop, color);

    this.setState({
      isListFormVisible: false,
      formInputs: {
        name: '',
        shop: '',
      },
    });
  };

  onRequestListFormModalClose = () => {
    this.setState({
      isListFormVisible: false,
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
    deleteList(id);
  };

  onColorChange = color => {
    this.setState({
      color,
    });
  };

  onListPress = id => {
    const { navigation, openList } = this.props;
    openList(id);
    navigation.navigate('Details');
  };

  render() {
    const { lists } = this.props;
    const { isListFormVisible, isListEditing, formInputs, color } = this.state;
    return (
      <Container>
        <Header title="Archived lists" />

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
      </Container>
    );
  }
}

ArchivedListsScreen.propTypes = {
  lists: PropTypes.instanceOf(Object).isRequired,
  editList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  openList: PropTypes.func.isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  lists: filter(state.shoppingList.lists, ({ isActive }) => isActive === false),
});

const mapDispatchToProps = dispatch => bindActionCreators({ editList, deleteList, openList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArchivedListsScreen);
