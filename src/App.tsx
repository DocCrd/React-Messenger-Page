import * as React from 'react';
import { useEffect, useState } from 'react';
import Contents from './main-page/Contents';
import Sidebar from './main-page/Sidebar';
import Preview from './main-page/Preview';

const profiles = [
  {
    online: true,
    name: 'Orlando Diggs',
    image:
      'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701420671.jpg',
    profession: 'Isit inc. sr. Mechanic',
  },
  {
    name: 'Carmen Velasco',
    image:
      'https://e7.pngegg.com/pngimages/829/637/png-clipart-rage-comic-internet-meme-trollface-know-your-meme-girl-face-comics-face.png',
    online: true,
    profession: 'Indila',
  },
  {
    name: 'Marie Jensen',
    image:
      'https://i.pinimg.com/originals/1f/26/ee/1f26ee20919d2cdc1bf4beedf1a5d82a.jpg',
    online: false,
    profession: 'KeyStone Manager',
  },
  {
    name: 'Alex Lee',
    image: './icons/subscribers.svg',
    online: false,
    profession: 'hirurg',
  },
  {
    name: 'Leo Gill',
    image: './icons/subscribers.svg',
    online: false,
    profession: 'HistoryMaker',
  },
  {
    name: 'Britney Cooper',
    image: './icons/subscribers.svg',
    online: false,
    profession: 'REACT DEVELOPER',
  },
];

export default function App() {
  const [personPreview, setPersonPreview] = useState({
    name: 'Amilia Luna',
    image: 'https://source.unsplash.com/user/c_v_r/100x100',
    profession: 'UI/UX Designer',
  });
  useEffect(() => {
    document.title = 'Messenger Page';
  });
  const changePersonPreview = (profile) => {
    console.log('so what the fuck?');
    console.log(profile);
    setPersonPreview(profile);
  };
  return (
    <div className="App">
      <Sidebar changePersonPreview={changePersonPreview} profiles={profiles} />
      <Contents />
      <Preview person={personPreview} />
    </div>
  );
}
