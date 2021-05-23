import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

import './OptionBox.css';
import { useHistory } from 'react-router';

const OptionBox = ({title, subtitle, image, contact, path}) => {

    const history = useHistory();

    //history.push(path.toString())}

    return (
        <Card>
            <CardContent>
                <div className='optionBox' onClick={(e) => {path ? history.push(`${path}`) : e.preventDefault() }}>
                    <div className='optionBox__left'>
                        <h2 className='infoBox__cases'>{title}</h2>
                        <Typography className='infoBox__title' color='textSecondary'>{subtitle}</Typography>
                        <Typography className='infoBox__title' color='textSecondary'>{contact}</Typography>
                    </div>
                    {
                        image ? (
                            <div className='optionBox__right'>
                                <img className='optionBox__image' src={image} alt=""/>
                            </div>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </CardContent>
        </Card>
    );
}

export default OptionBox