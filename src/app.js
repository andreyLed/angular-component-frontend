import ng from 'angular';
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import 'animate.css/animate.css';
import 'sweetalert/dist/sweetalert.css';
import 'sweetalert/dist/sweetalert.min.js';

import ngComponents from './components';
import ngFocusMe from './directives/focusMe';


ng.module('app', [ngComponents, ngFocusMe]);
