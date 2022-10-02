import * as React from 'react';
import styled from 'styled-components';
import Scrollbar from '@layerhub-io/react-custom-scrollbar';

import DropdownMenu from '../components/popup/DropdownMenu';

import Inset from './sidebar/Inset';
import InsetFriend from './sidebar/InsetFriend';

const SidebarComponent = styled('div')`
flex: 1;
padding: 2.125rem 1.5rem 0 1.5rem;
background: #25272A;
color: #B5B5B5;
width: 16.5rem;
display:flex;
flex-direction: column;
`;
const SidebarComponentInsets = styled('div')`
flex: 1;
margin-right: -1.25rem;
`;

const SidebarComponentLists = styled('div')`
display: flex;
& div {
  flex: 1;
}
`;

const SidebarComponentGearImage = styled('img')`
&:hover {
   width: 1rem;
   animation-name: rotation;
   animation-duration: 5s;
   animation-iteration-count: infinite;
   animation-timing-function: linear;
}

@-webkit-keyframes rotation {
   0% {-webkit-transform:rotate(0deg);
       -moz-transform:rotate(0deg);
       -o-transform:rotate(0deg);
       transform:rotate(0deg);}
   100% {-webkit-transform:rotate(360deg);
       -moz-transform:rotate(360deg);
       -o-transform:rotate(360deg);
       transform:rotate(360deg);}
}
@-moz-keyframes rotation {
   0% {-webkit-transform:rotate(0deg);
       -moz-transform:rotate(0deg);
       -o-transform:rotate(0deg);
       transform:rotate(0deg);}
   100% {-webkit-transform:rotate(360deg);
       -moz-transform:rotate(360deg);
       -o-transform:rotate(360deg);
       transform:rotate(360deg);}
}
@-o-keyframes rotation {
   0% {-webkit-transform:rotate(0deg);
       -moz-transform:rotate(0deg);
       -o-transform:rotate(0deg);
       transform:rotate(0deg);}
   100% {-webkit-transform:rotate(360deg);
       -moz-transform:rotate(360deg);
       -o-transform:rotate(360deg);
       transform:rotate(360deg);}
}
@keyframes rotation {
   0% {-webkit-transform:rotate(0deg);
       -moz-transform:rotate(0deg);
       -o-transform:rotate(0deg);
       transform:rotate(0deg);}
   100% {-webkit-transform:rotate(360deg);
       -moz-transform:rotate(720deg);
       -o-transform:rotate(360deg);
       transform:rotate(360deg);}
}
`;
function Sidebar(props) {
  const tags = [
    {
      title: '# general',
    },
    {
      title: '# support',
    },
    {
      title: '# marketing',
    },
    {
      title: '# thailand',
    },
    {
      title: '# bali',
    },
    {
      title: '# poland',
    },
    {
      title: '# austria',
    },
    {
      title: '# jobs',
    },
    {
      title: '# startups',
    },
    {
      title: '# italy',
    },
    {
      title: '# freelance',
    },
  ];

  const ContextElements = ['NomadList', 'FirstList', 'SecondList'];
  const LabelStyle = `
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  `;

  return (
    <SidebarComponent>
      <SidebarComponentLists>
        <DropdownMenu
          elements={ContextElements}
          color="#FFFFFF"
          bcolor="#25272A"
          wione=""
          witwo=""
          label={LabelStyle}
        />
        <SidebarComponentGearImage
          style={{ alignSelf: 'center', height: '1rem' }}
          src="./icons/gear-white.svg"
          alt=""
        />
      </SidebarComponentLists>
      <div
        style={{ display: 'flex', marginTop: '1.5rem' }}
        className="all-threads"
      >
        <img
          style={{ alignSelf: 'center', height: '1rem' }}
          src="./icons/message-white.svg"
          alt=""
        />
        <div style={{ marginLeft: '1rem' }}>
          <p>All threads</p>
        </div>
      </div>

      <SidebarComponentInsets>
        <Scrollbar style={{}}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Inset title="channels" data={tags} />
            <InsetFriend
              changePersonPreview={props.changePersonPreview}
              title="friends"
              data={props.profiles}
            />
          </div>
        </Scrollbar>
      </SidebarComponentInsets>
    </SidebarComponent>
  );
}

export default Sidebar;
