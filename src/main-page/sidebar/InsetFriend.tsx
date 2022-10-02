import * as React from 'react';
import styled from 'styled-components';

import Image from '../../components/image-placeholder/Image';
import IsOnline from '../../components/is-online-div/IsOnline';

const InsetFriendComponent = styled('div')`
& p {
  align-self: center;
}
`;

const InsetComponentItem = styled('div')`
height: 2.125rem;
display: flex;
margin: 0.25rem;
border-radius: .25rem;
cursor: pointer;
`;

// const InsetComponentIsOnline = styled('div')`
// 	width: .5rem;
// 	background-color: ${(props) => {
//     return props.online ? '#70CC16' : '#B5B5B5';
//   }};
// 	height: .5rem;
// 	border-radius: .25rem;
// 	align-self: center;
// 	margin-right: .375rem;
// `;

function InsetFriend(props) {
  const handleClickProfile = (profile) => {
    console.log('bitch!');
    props.changePersonPreview(profile);
  };
  return (
    <InsetFriendComponent>
      <div style={{ display: 'flex' }}>
        <p style={{ flex: 1, margin: '1rem 0' }}>{props.title.toUpperCase()}</p>
        <p style={{ marginRight: '1.25rem' }}>{props.data.length}</p>
      </div>
      {props.data.map((item) => {
        return (
          <InsetComponentItem
            onClick={() => handleClickProfile(item)}
            key={Math.random()}
          >
            <IsOnline online={item.online} />
            <Image src={item.image} />
            <p>{item.name}</p>
          </InsetComponentItem>
        );
      })}
    </InsetFriendComponent>
  );
}
export default InsetFriend;
