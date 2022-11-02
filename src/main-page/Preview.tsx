import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconLink from './preview/IconLink';
import AreaInfo from './preview/AreaInfo';
import DropdownMenu from '../components/popup/DropdownMenu';

import IsOnline from '../components/is-online-div/IsOnline';

const PreviewComponent = styled('div')`
max-width: 200px;
background-color: #C080FF70;
flex: 1;
@media screen and (max-width: 450px) {
  & {
    display: none;
  }
}
`;
const PreviewComponentImage = styled('img')`
width: 12.5rem;
height: 12.5rem;
object-fit: cover;
`;
const PreviewComponentContents = styled('div')`
margin: 20px;
`;
const PreviewComponentSocial = styled('div')`
display: inline-flex;
margin: 1.25rem 0;
`;

const rawInfos = [
  {
    type: 'Username',
    content: '@amilia_lu',
  },
  {
    type: 'Email',
    content: 'a-luna@gmail.com',
  },
  {
    type: 'Skype',
    content: 'amiluna',
  },
  {
    type: 'Timezone',
    content: '2:21 PM Local time',
  },
];
function Preview(props) {
  const [person, setPerson] = useState(props.person);
  const [infos, setInfos] = useState(person.infos ? person.infos : rawInfos);

  let links = [
    {
      link: 'https://facebook.com',
    },
    {
      link: 'https://twitter.com',
    },
    {
      link: 'https://instagram.com',
    },
    {
      link: 'https://linkedin.com',
    },
  ];

  const ContextElements = ['internetcall', 'phonecall', 'message'];

  return (
    <PreviewComponent>
      <div>
        <PreviewComponentImage src={props.person.image} />
      </div>
      <PreviewComponentContents>
        <div style={{ width: 'fit-content' }}>
          <div style={{ position: 'relative', width: 'fit-content' }}>
            <p style={{ fontWeight: 700 }}>{props.person.name}</p>
            <IsOnline
              changeStyles={{}}
              style={{
                position: 'absolute',
                top: '0.45rem',
                right: '-1.25rem',
              }}
              online={props.person.online}
            />
          </div>
          <p style={{ color: '#5F6164' }}>{props.person.profession}</p>
        </div>
        <PreviewComponentSocial>
          {links.map((item, index) => {
            return <IconLink key={index} link={item.link} />;
          })}
        </PreviewComponentSocial>
        <DropdownMenu
          elements={ContextElements}
          color="#ffffff"
          bcolor="#3577EF"
          wione="8.35rem"
          witwo="1.5rem"
        />
        <div style={{ marginTop: '1rem' }} className="infos">
          {infos.map((item, index) => {
            return (
              <AreaInfo key={index} type={item.type} content={item.content} />
            );
          })}
        </div>
      </PreviewComponentContents>
    </PreviewComponent>
  );
}

export default Preview;
