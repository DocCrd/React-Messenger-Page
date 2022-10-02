import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const InsetComponent = styled('ul')`
padding: 0;
margin-right: 1rem;
`;
const InsetComponentItemLabel = styled('p')`
margin: 0;
align-self:center;
`;
const InsetComponentItem = styled('li')`
height: 1.875rem;
list-style: none;
padding-left: 0.75rem;
display:flex;
cursor: pointer;
${(props) =>
  props.checked &&
  css`
  background-color: #ffffff2f;
  display: flex;
  border-radius: 0.25rem;
  position:sticky;
  top:0;
  `}
`;
function InsetItem(props) {
  return (
    <InsetComponentItem
      onClick={() => {
        props.checker(props.title);
      }}
      checked={props.check === props.title}
    >
      <InsetComponentItemLabel>{props.title}</InsetComponentItemLabel>
    </InsetComponentItem>
  );
}

function Inset(props) {
  const [checked, setChecked] = useState('# general');
  return (
    <InsetComponent>
      <div style={{ display: 'flex', margin: '1rem 0' }}>
        <p style={{ flex: 1 }}>{props.title.toUpperCase()}</p>
        <p style={{ marginRight: '0.25rem' }}>{props.data.length}</p>
      </div>
      {props.data.map((item) => {
        return (
          <InsetItem
            check={checked}
            checker={setChecked}
            title={item.title}
            key={Math.random()}
          />
        );
      })}
    </InsetComponent>
  );
}
export default Inset;
