import React, {Component} from 'react';
import {render} from 'react-dom';
import RepLogApp from './RepLog/RepLogApp';

const shouldShowHeart = false;

render(
    <div>
        <RepLogApp
            {...window.REP_LOG_APP_PROPS}
            withHeart = {shouldShowHeart}/>
    </div>,
    document.getElementById('lift-stuff-app')

);