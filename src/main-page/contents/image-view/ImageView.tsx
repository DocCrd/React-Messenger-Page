import * as React from 'react';
import styled, { css } from 'styled-components';

const View = styled('div')`
${(props) =>
  props.open &&
  css`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  z-index: 40;
`}
`;
const Image = styled('img')`
height: 100%;
width: auto;
`;
const ImageView = (props) => {
  return (
    <View onClick={props.click} open={props.isOpen}>
      {props.isOpen && <Image src={props.image} alt="" />}
    </View>
  );
};

export default ImageView;
