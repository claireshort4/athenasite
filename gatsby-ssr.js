import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="goldin"
      rel="preload"
      href="/fonts/goldin.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />
  ]);
};
