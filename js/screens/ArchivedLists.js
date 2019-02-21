import React from 'react';
import List from './List';

const ArchivedListsScreen = props => <List isActive={false} listTitle="Archived lists" {...props} />;

export default ArchivedListsScreen;
