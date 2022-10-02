import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const DropDownContainer = styled('div')`
color: ${(props) => props.color};
position: relative;
z-index: 33;
`;
const DropDownHeader = styled('div')`
display: inline-box;
align-items: center;
`;
const DropDownLabelContainer = styled('div')`
background-color: ${(props) => props.bcolor};
border-radius: 0.25rem;
height: 1.5rem;
width: ${(props) => props.wione};
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
${(props) => props.label}
`;
const DropDownArrowContainer = styled('div')`
background-color: ${(props) => props.bcolor};
width:  ${(props) => props.witwo};
height: 1.5rem;
justify-content: center;
align-items: center;
border-radius: 0.25rem;
display: flex;
`;
const DropDownArrow = styled('img')`
margin: .6rem auto;
user-select: none;
`;
const DropDownListContainer = styled('div')`
background-color: ${(props) => props.bcolor};
color: ${(props) => props.color};
position: absolute;
width: ${(props) => props.wione};
border-radius: 0 0 0.25rem 0.25rem;
display: flex;
`;
const DropDownList = styled('ul')`
list-style: none;
padding: unset;
margin: 0.5rem auto;
`;
const DropDownListItem = styled('li')``;

function DropdownMenu(props) {
  const [checked, setChecked] = useState(false);
  const [fruit, setFruit] = useState(props.elements[0]);
  const [leather, setLeather] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
    setLeather(!leather);
  };

  return (
    <DropDownContainer color={props.color}>
      <DropDownHeader>
        <DropDownLabelContainer
          bcolor={props.bcolor}
          wione={props.wione}
          opened={checked}
        >
          <DropDownLabel label={props.label}>{fruit}</DropDownLabel>
        </DropDownLabelContainer>
        <DropDownArrowContainer
          bcolor={props.bcolor}
          witwo={props.witwo}
          onClick={handleCheck}
        >
          <object
            onClick={handleCheck}
            id="arrow-dropdown"
            type="image/svg+xml"
            data="./icons/arrow-dropdown.svg"
            width="10"
            height="10"
          >
            Your browser does not support SVG
          </object>
        </DropDownArrowContainer>
      </DropDownHeader>
      {checked && (
        <DropDownListContainer
          bcolor={props.bcolor}
          color={props.color}
          wione={props.wione}
        >
          <DropDownList>
            {props.elements.map((item) => {
              if (item === fruit) {
                return;
              }
              return (
                <DropDownListItem
                  onClick={() => {
                    setFruit(item);
                    setChecked((prev) => !prev);
                  }}
                  key={Math.random()}
                >
                  <p>{item}</p>
                </DropDownListItem>
              );
            })}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}

export default DropdownMenu;
