import React from 'react';

export const navigationRef = React.createRef();

//Helper for navigation ref
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
