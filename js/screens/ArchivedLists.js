import React from 'react';
import List from '../containers/List';

const ArchivedListsScreen = props => <List isActive={false} listTitle="Archived lists" {...props} />;

export default ArchivedListsScreen;
