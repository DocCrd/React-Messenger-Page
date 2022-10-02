import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
const DropDownContainer = styled('div')`
color: #ffffff;
width: 10rem;
position: relative;
`;
const DropDownHeader = styled('div')`
display: inline-box;
align-items: center;
// width: ;
`;
const DropDownLabelContainer = styled('div')`
background: #3577EF;
border-radius: 0.25rem;
height: 1.5rem;
width: 8.35rem;
margin-right: 0.125rem;
text-align: center;
${(props) =>
  props.opened &&
  css`
  border-radius: 0.25rem 0.25rem 0 0;
`}
`;
const DropDownLabel = styled('p')`
margin: .125rem auto;
`;
const DropDownArrowContainer = styled('div')`
background: #3577EF;
width: 1.5rem;
height: 1.5rem;
text-align: center;
border-radius: 0.25rem;
`;
const DropDownArrow = styled('img')`
margin: .6rem auto;
user-select: none;
`;
const DropDownListContainer = styled('div')`
position: absolute;
background: #3577EF;
color: #ffffff;
width: 8.35rem;
border-radius: 0 0 0.25rem 0.25rem;
`;
const DropDownList = styled('ul')`
list-style: none;
`;
const DropDownListItem = styled('li')``;
const fruitArray = ['message', 'call'];

function ActionBar(props) {
  const [arrowType, setArrowType] = useState('./rect1.svg');
  const [checked, setChecked] = useState(false);
  const [fruit, setFruit] = useState(fruitArray[0]);
  const handleCheck = () => {
    setChecked((prev) => !prev);
    setArrowType(arrowType === 'rect1.svg' ? 'rect2.svg' : 'rect1.svg');
  };

  return (
    <DropDownContainer>
      <DropDownHeader>
        <DropDownLabelContainer opened={checked}>
          <DropDownLabel>{fruit.toLocaleLowerCase()}</DropDownLabel>
        </DropDownLabelContainer>
        <DropDownArrowContainer onClick={handleCheck}>
          <DropDownArrow src={`./icons/${arrowType}`} />
        </DropDownArrowContainer>
      </DropDownHeader>
      {checked && (
        <DropDownListContainer>
          <DropDownList>
            {fruitArray.map((item) => {
              return (
                <DropDownListItem
                  onClick={() => {
                    setFruit(item);
                    setChecked((prev) => !prev);
                  }}
                  key={Math.random()}
                >
                  {item}
                </DropDownListItem>
              );
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default ActionBar;
