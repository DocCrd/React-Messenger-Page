import * as React from 'react';
import styled from 'styled-components';

const HeaderComponent = styled('div')`
grid-area: h;
height: 5rem;
display: flex;
padding: 0 1rem;
border-bottom: 1px solid #00000040;

& div {
  display: inline-flex;
}
& img {
  padding: 0 .25rem;
  align-self: center;
  height: 1rem;
}
& p {
  align-self: center;
  margin: 0;
  padding: 0 .25rem;
}

@media screen and (max-width: 450px) {
  .subscribes {
    display: none;
  }
  .subscribe {
    display: none;
  }
}
`;
const HeaderComponentSearchbarHolder = styled('div')`
padding: 1.5rem  .625rem
`;
const HeaderComponentSearchbar = styled('input')``;
const HeaderComponentLabel = styled('p')`
align-self: center;
font-weight: 700;
font-size: 1.25rem;
line-height: 1.5rem;
`;
const HeaderComponentHashtag = styled('div')`
flex: 1;
	display: flex;
	align-items: center;
`;

const Subscribes = styled('div')`

p {
  color: '#8D8D8D';
}
`;
function Header() {
  return (
    <HeaderComponent>
      <HeaderComponentHashtag>
        <HeaderComponentLabel>#general</HeaderComponentLabel>
        <object
          id="like-star"
          type="image/svg+xml"
          data="./icons/like-star.svg"
          width="16"
          height="16"
        >
          Your browser does not support SVG
        </object>
      </HeaderComponentHashtag>
      <Subscribes className="subscribes">
        <img src="./icons/subscribers.svg" alt="subscribers ico" />
        <p className="qnt">1,249</p>
      </Subscribes>
      <HeaderComponentSearchbarHolder>
        <HeaderComponentSearchbar type="text" placeholder="Search.." />
      </HeaderComponentSearchbarHolder>
      <div style={{ alignItems: 'center' }} className="subscribe">
        <object
          id="like-star"
          type="image/svg+xml"
          data="./icons/subscribe.svg"
          width="16"
          height="16"
        >
          Your browser does not support SVG
        </object>
      </div>
      <div className="settings">
        <img src="./icons/settings.svg" alt="settings ico" />
      </div>
    </HeaderComponent>
  );
}

export default Header;
