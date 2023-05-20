import React from 'react'
import { render } from 'react-dom'
import {config} from './modules/config.js'
import AppService from './modules/app.service.js'
import './modules/ts.module'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'
import App from '../App.js'
console.log('Config key:', config.key);

const service = new AppService('Hello blt')

render(<App/>, document.getElementById('app'))