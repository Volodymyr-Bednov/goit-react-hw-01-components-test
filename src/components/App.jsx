import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList/FriendList';
import user from './user.json';
import data from './data.json';
import friends from './FriendList/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
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
    </div>
  );
};