import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="london"
      rel="preload"
      href="/fonts/london.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,
    <link
      key="marco"
      rel="preload"
      href="/fonts/marco.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />
  ]);
};
