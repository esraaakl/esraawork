import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContectProvide } from './components/store/auth-context';

import './index.css';
import App from './App';

ReactDOM.render(
<AuthContectProvide >
<App />
</AuthContectProvide>
, document.getElementById('root'));
