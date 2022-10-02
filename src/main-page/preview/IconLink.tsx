import * as React from 'react';
function IconLink(props) {
  const social = [
    {
      word: 'facebook',
      path: 'fb-ico.svg',
    },
    {
      word: 'twitter',
      path: 'tw-ico.svg',
    },
    {
      word: 'instagram',
      path: 'in-ico.svg',
    },
    {
      word: 'linkedin',
      path: 'li-ico.svg',
    },
  ];

  function switchSocial(str) {
    for (let index = 0; index < social.length; index++) {
      const word = social[index].word;
      const regExp = new RegExp(word);

      if (regExp.test(str)) {
        return social[index].path;
      }
    }

    return;
  }

  return (
    <div style={{ marginRight: '0.4rem' }}>
      <a href={props.link}>
        <img src={`./icons/social/${switchSocial(props.link)}`} alt="" />
      </a>
    </div>
  );
}

export default IconLink;
