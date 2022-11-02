import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from '../../components/image-placeholder/Image';

const MessageContainer = styled('div')`
display: flex;
flex-direction: row;
margin: 0.625rem 0;
& p {
  margin: 0;
}
`;
const MessagePhotoContainer = styled('div')`
align-self: start;
padding-right: 1rem;
@media screen and (max-width: 450px) {
  & {
    padding-right: 0.5rem;
  }
}
`;
const MessageInfoContainer = styled('div')`
display: flex;
flex-direction: row;
& p{
  margin: none;
}

@media screen and (max-width: 450px) {
  & p{
    align-self: center;
  }
}
`;
const MessageName = styled('p')`
font-weight: bold;
`;
const MessageTime = styled('p')`
color: #8D8D8D;
`;
const MessageImage = styled('img')`
width: 16.5rem;
height: 12.5rem;
object-fit: cover;
border-radius: 0.25rem;
margin: 1rem 0;
`;
function MessageSplitter(props) {
  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return '<a href="' + url + '">' + url + '</a>';
    });
  }

  function urlifyAtSign(text) {
    var urlRegex = /(@[^\s]+)/g;
    let profileUrl = 'https://react-ts-qgoeh3.stackblitz.io/';
    return text.replace(urlRegex, function (url) {
      return '<a href=' + profileUrl + '>' + url + '</a>';
    });
  }

  function urlRecognizer(msg) {
    if (/(https?:\/\/[^\s]+)/.test(msg)) {
      return <MessageImage onClick={props.imageclick} src={msg} />;
    }

    return <p>{msg}</p>;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {props.msg.map((item, index) => {
        return urlRecognizer(item);
      })}
    </div>
  );
}

function Message(props) {
  const [mediaQuery, setMediaQuery] = useState(false);

  function wrapMsg(msg) {
    if (msg instanceof Array) return msg;
    else return [msg];
  }
  useEffect(() => {
    console.log();
    const handler = (e) => setMediaQuery(e.matches);
    window.matchMedia('(max-width: 450px)').addEventListener('change', handler);
  });
  return (
    <MessageContainer>
      {mediaQuery || (
        <MessagePhotoContainer>
          <Image src={props.image} />
        </MessagePhotoContainer>
      )}

      <div className="msg-contents">
        <MessageInfoContainer>
          {mediaQuery && (
            <MessagePhotoContainer>
              <Image src={props.image} />
            </MessagePhotoContainer>
          )}
          <MessageName>{props.name}&nbsp;</MessageName>
          <MessageTime>{props.time}</MessageTime>
        </MessageInfoContainer>
        <MessageSplitter
          imageclick={props.imageclick}
          msg={wrapMsg(props.msg)}
        />
      </div>
    </MessageContainer>
  );
}

export default Message;
