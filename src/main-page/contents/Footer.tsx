import * as React from 'react';
import { useState, useEffect } from 'react';
import { Temporal } from '@js-temporal/polyfill';
import styled from 'styled-components';
import useWebSocket from 'react-use-websocket';

const WS_URL = 'wss://d5d9tdvm408pflg7ivbe.apigw.yandexcloud.net/ws';

const FooterComponent = styled('form')`
height: 4.75rem;
display: flex;
padding: 0 .625rem;
grid-area: f;
align-items:center;
border-top: 1px solid #00000040;

& div {
  flex:1;
  height:100%;
  display: flex;
  align-items: center;
}

& img {
  height: 1rem;
}

`;

const FooterComponentInput = styled('input')`
border: none;
width: 100%;
height: 96%;
border: none;
`;
function Footer(props) {
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState, getWebSocket } = useWebSocket(
    WS_URL,
    {
      share: true,
      shouldReconnect: () => false,
    }
  );

  useEffect(() => {
    lastMessage && ofMessageFlyesIn(lastMessage.data);
    // lastMessage && setMessageHistory((prev) => prev.concat(lastMessage.data));
  }, [lastMessage]);

  const readyStateString = {
    0: 'CONNECTING',
    1: 'OPEN',
    2: 'CLOSING',
    3: 'CLOSED',
  }[readyState];

  const [inputText, setInputText] = useState('');
  async function ofMessageFlyesIn(msgBlob) {
    const msg = await msgBlob.text();
    const message = {
      name: 'Kyle Rease',
      msg: msg,
      image: 'https://source.unsplash.com/user/c_v_r/250x250',
      date: Temporal.Now.zonedDateTimeISO().toString(),
    };
    props.enter(message);
  }
  function onFormSubmit(e) {
    e.preventDefault();
    sendMessage(inputText);

    setInputText('');
  }
  function handleInput(e) {
    setInputText(e.target.value);
  }
  return (
    <FooterComponent onSubmit={onFormSubmit}>
      <div style={{ justifyContent: 'space-around' }}>
        <img src="./icons/clip.svg" alt="" />
        <img src="./icons/micro.svg" alt="" />
      </div>
      <div style={{ flex: 10, width: '100%' }}>
        <FooterComponentInput
          value={inputText}
          onInput={handleInput}
          type="text"
          placeholder="Message in #general"
        />
      </div>
      <div style={{ justifyContent: 'center' }}>
        <img src="./icons/smile.svg" alt="" />
      </div>
    </FooterComponent>
  );
}

export default Footer;
