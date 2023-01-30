import { FrendsCardItem } from './FriendList.styled';
export const FriendListItem = ({ friendItem }) => {
  //console.log(friendItem);
  const { avatar, isOnline, name } = friendItem;

  //console.log(avatar, isOnline, name);
  return (
    <FrendsCardItem>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FrendsCardItem>
  );
};
