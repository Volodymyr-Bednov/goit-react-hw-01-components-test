import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './Profile/user.json';
import data from './data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        width: '1200px',
        height: '100vh',
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: '0 auto',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList data={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
