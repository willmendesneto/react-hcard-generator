import React from 'react';
import { render } from 'react-dom';
import './googleFonts.js';
import 'normalize.css';
import './styles/global.css';
import HCardBuilderWrapper from './containers/HCardBuilderWrapper';
import {install as offlineInstall} from 'offline-plugin/runtime';

if (process.env.NODE_ENV === 'production') {
  offlineInstall();
}

render(<HCardBuilderWrapper />, document.getElementById('root'));
