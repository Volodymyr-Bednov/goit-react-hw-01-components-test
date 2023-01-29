import { FriendListItem } from './FriendListItem';

export const FriendList = ({ data }) => {
  //console.log(props);

  return (
    <ul class="friend-list">
      {data.map(item => (
        <FriendListItem key={item.id} friendItem={item} />
      ))}
    </ul>
  );
};
