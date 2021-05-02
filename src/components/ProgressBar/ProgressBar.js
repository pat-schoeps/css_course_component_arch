/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--height": 8 + "px",
    "--padding": 0 + "px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--height": 12 + "px",
  },
  large: {
    "--borderRadius": 4 + "px",
    "--height": 24 + "px",
    "--padding": 4 + "px",
  }
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper style={styles} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Overflow>
        <Inner style={{width: `${value}%`}}></Inner>
      </Overflow>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  overflow: hidden;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Overflow = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: var(--borderRadius);
`

const Inner = styled.div`
  background: ${COLORS.primary};
  height: 100%;
  display: block;
`


export default ProgressBar;
