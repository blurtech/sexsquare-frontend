import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import './feedStyles.scss';


const FeedMenu = () => {

    return (
        <div className="menuContainer">
          <ul className="menu">
            <li>Main</li>
            <li>Fucks</li>
            <li>People</li>
            <li>Tags</li>
            <li>About</li>

          </ul>
        </div>
    )
};

export default FeedMenu
