import * as React from 'react';
import styled from 'styled-components';

const IsOnline = styled('div')`
	width: .5rem;
	background-color: ${(props) => {
    return props.online ? '#70CC16' : '#B5B5B5';
  }};
	height: .5rem;
	border-radius: .25rem;
	align-self: center;
	margin-right: .375rem;
`;

export default IsOnline