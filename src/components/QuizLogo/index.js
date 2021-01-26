import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <></>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
