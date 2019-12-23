import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import React1 from './root.component.js';

function domElementGetter() {
  return document.getElementById("react1")
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: React1,
  domElementGetter,
})

export const bootstrap = [
  reactLifecycles.bootstrap,
];

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];