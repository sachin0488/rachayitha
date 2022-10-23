import React from "react";

const size = {
  mobileS: "370px",
  mobileM: "475px",
  mobileL: "625px",
  tablet: "768px",
  laptop: "1024px",
  laptopS: "1280px",
  laptopM: "1500px",
  laptopL: "1680px",
  desktop: "1900px",
};

const breakPoints = () => {
  const mobileS = `(min-width: ${size.mobileS})`;
  const mobileM = `(min-width: ${size.mobileM})`;
  const mobileL = `(min-width: ${size.mobileL})`;
  const tablet = `(min-width: ${size.tablet})`;
  const laptop = `(min-width: ${size.laptop})`;
  const laptopS = `(min-width: ${size.laptopS})`;
  const laptopM = `(min-width: ${size.laptopM})`;
  const laptopL = `(min-width: ${size.laptopL})`;
  const desktop = `(min-width: ${size.desktop})`;

  return {
    mobileS,
    mobileM,
    mobileL,
    tablet,
    laptop,
    laptopS,
    laptopM,
    laptopL,
    desktop,
  };
};

export default breakPoints;
