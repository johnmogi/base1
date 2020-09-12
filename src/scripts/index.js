import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap';


if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');
