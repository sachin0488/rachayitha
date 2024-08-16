import React from 'react';
import styled from '@emotion/styled';
import SelectLanguage from 'modules/Landing/Sections/Header/components/SelectLanguage';

const SelectLanguageContainer = () => {
  return (
    <Container>
      <SelectLanguage />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  right: -30%;
  @media (max-width: 700px) {
    position: static;
    margin-left: 0.3rem;
  }
`;

export default SelectLanguageContainer;
