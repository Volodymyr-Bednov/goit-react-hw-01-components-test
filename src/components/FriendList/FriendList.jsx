import { FriendListItem } from './FriendListItem';
import { FrendsContainer, FrendsCard } from './FriendList.styled';

export const FriendList = ({ data }) => {
  //console.log(props);

  return (
    <FrendsContainer>
      <FrendsCard>
        {data.map(item => (
          <FriendListItem key={item.id} friendItem={item} />
        ))}
      </FrendsCard>
    </FrendsContainer>
  );
};
