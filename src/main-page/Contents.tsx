import * as React from 'react';
import { useState, useEffect } from 'react';
import Message from './contents/Message';
import { Temporal } from '@js-temporal/polyfill';
import Scrollbar from '@layerhub-io/react-custom-scrollbar';
import styled from 'styled-components';

import Header from './contents/Header';
import Footer from './contents/Footer';
import ImageView from './contents/image-view/ImageView';

const Content = styled('div')`
display: flex;
flex: 4;
flex-grow: 5;
max-width: 73.5rem;
flex-direction: column;
justify-content: space-between;
heiht: 100%;
`;

const MainContent = styled('div')`
grid-area: c;
padding-left: 1.5rem;
height: 100%;
`;

const ContentsComponentMessageHeader = styled('div')`
position: relative;
display: flex;
justify-content: center;
padding-top: 0.625rem;
height: 0.625rem;
padding-right: 1.5rem;
`;
const ContentsComponentMessageTime = styled('p')`
	background-color: white;
	z-index: 33;
	text-align: center;
	position: absolute;
	margin-top: -9px;
	padding: 0 10px;
  color: #8D8D8D;
`;
const ContentsComponentMessageLine = styled('div')`
	border-top: 1px solid;
	z-index: -1;
	width: 100%;
  opacity: 0.2;
`;

const rawMessages = [
  {
    name: 'Jeshua Stout',
    msg: '@pierrhack I did for 6 days in Iceland',
    image: 'https://source.unsplash.com/user/c_v_r/100x100',
    // image: './icons/subscribers.svg',
    date: '2022-02-04T01:01+07:00',
  },
  {
    name: 'Harold Adams',
    msg: [
      'Which country to visit next? This is a photo with my friends - celebrating in Balimy-top-places.jpg',
      'https://puzzleit.ru/files/puzzles/62/61596/_background.jpg',
    ],
    image: 'https://source.unsplash.com/user/c_v_r/150x150',
    // image: './icons/subscribers.svg',
    date: '2022-02-04T03:22+07:00',
  },
  {
    name: 'Aada Laine',
    msg: '@har_adams wow it’s amazing, I want to buy a van and travelling next year',
    // image: 'https://source.unsplash.com/user/c_v_r',
    image: './icons/subscribers.svg',
    date: '2022-03-04T05:06+07:00',
  },
  {
    name: 'Nala Hester',
    msg: 'Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).',
    // image: 'https://source.unsplash.com/user/c_v_r',
    image: './icons/subscribers.svg',
    date: '2022-03-04T08:36+07:00',
  },
  {
    name: 'Ramon Bateman',
    msg: "@aa_da What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.",
    // image: 'https://source.unsplash.com/user/c_v_r',
    image: './icons/subscribers.svg',
    date: '2022-03-04T09:36+07:00',
  },
  {
    name: 'Sally Soil',
    msg: 'Скиньте ссылку на фото, чтобы увидеть это в сообщениях',
    // image: 'https://source.unsplash.com/user/c_v_r',
    image: './icons/subscribers.svg',
    date: '2022-05-04T01:18+07:00',
  },
];

function Contents() {
  const [imageClickedSrc, setSrc] = useState('');
  const [imageOpened, setOpened] = useState(false);
  const [messages, setMessages] = useState(rawMessages);
  const [lastMessage, setLastMessage] = useState(messages[messages.length - 1]);

  const days = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  function toYa(dayNumber) {
    return months[dayNumber].replace(/[й,ь,т]$/, (val) => {
      return val === 'т' ? val + 'а' : 'я';
    });
  }

  function getAmOrPmOrNothing(item) {
    let localDate = Temporal.Instant.from(item.date)
      .toZonedDateTimeISO(Temporal.Now.timeZone())
      .toLocaleString();
    let checkLocalDate = /\s[a,p](\s+)?m\s/.test(localDate);
    if (checkLocalDate) {
      return /\s[a,p](\s+)?m\s/.exec(localDate)[0].replace(/\s/g, '');
    }

    return;
  }

  function shaveTime(time) {
    let shavedTime = time.split(':');
    return `${shavedTime[0]}:${shavedTime[1]}`;
  }

  function getTemporalDate(date) {
    return Temporal.Instant.from(date).toZonedDateTimeISO(
      Temporal.Now.timeZone()
    );
  }

  function imageClick(event) {
    if (imageOpened) {
      setOpened(false);
      return;
    }
    setSrc(event.target.src);
    setOpened(true);
  }

  function lastMessageCheck(message) {
    if (lastMessage.name !== message.name) return;

    if (
      getTemporalDate(lastMessage.date).minute !==
      getTemporalDate(message.date).minute
    )
      return;
    return true;
  }

  function handleSetMessages(message) {
    let newMessages = [];
    if (lastMessageCheck(message)) {
      let changedMessage = lastMessage;

      if (!(changedMessage.msg instanceof Array)) {
        changedMessage.msg = [changedMessage.msg];
      }
      changedMessage.msg.push(message.msg);

      newMessages = [...messages];
      newMessages[newMessages.length - 1] = changedMessage;
      message = changedMessage;
    } else {
      newMessages = [...messages, message];
    }
    setMessages(newMessages);
    setLastMessage(message);
    setTimeout(scrollToBottom, 300);
  }

  const scrollToBottom = () => {
    document
      .querySelectorAll('.msg-contents')
      [
        document.querySelectorAll('.msg-contents').length - 1
      ].lastChild.scrollIntoView({
        behavior: 'smooth',
      });
  };

  useEffect(() => {
    document.querySelector(
      '#main-content > div:nth-child(2) > div:nth-child(1)'
    ).style.overflowX = 'hidden';
    document.querySelector(
      '#main-content > div:nth-child(2) > div:nth-child(1)'
    ).style.marginBottom = '0';
    // setTimeout(scrollToBottom, 300);
  });

  return (
    <Content>
      <Header />
      <MainContent id="main-content">
        <ImageView
          click={imageClick}
          image={imageClickedSrc}
          isOpen={imageOpened}
        />
        <Scrollbar>
          {messages.map((item, index) => {
            let temporalDate = getTemporalDate(item.date);
            let time = temporalDate.toPlainTime().toString();
            let dayOfWeek = temporalDate.dayOfWeek;
            let monthsInYear = temporalDate.month;
            let dayOfMonth = temporalDate.day;
            let messageTime = getAmOrPmOrNothing(item)
              ? `${shaveTime(time)} ${getAmOrPmOrNothing(item)}`
              : shaveTime(time);

            let condition =
              !messages[index - 1] ||
              temporalDate.day !==
                getTemporalDate(messages[index - 1].date).day;
            if (condition) {
              return (
                <div key={Math.random()}>
                  <ContentsComponentMessageHeader>
                    <ContentsComponentMessageTime>
                      {days[dayOfWeek - 1]},&nbsp;
                      {dayOfMonth}&nbsp;{toYa(monthsInYear - 1)}
                    </ContentsComponentMessageTime>
                    <ContentsComponentMessageLine />
                  </ContentsComponentMessageHeader>
                  <Message
                    imageclick={imageClick}
                    key={index}
                    name={item.name}
                    msg={item.msg}
                    image={item.image}
                    time={messageTime}
                  />
                </div>
              );
            }

            return (
              <Message
                imageclick={imageClick}
                key={index}
                name={item.name}
                msg={item.msg}
                image={item.image}
                time={messageTime}
              />
            );
          })}
        </Scrollbar>
      </MainContent>
      <Footer enter={handleSetMessages} />
    </Content>
  );
}

export default Contents;
