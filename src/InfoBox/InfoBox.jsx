import React from 'react';

import { Card, CardContent, Typography } from '@material-ui/core';

const InfoBox = ({title, cases, total,image}) => {
    return (
        <Card className='infoBox'>
            <CardContent>
                {
                    // title
                    // cases
                    // total
                }
                <div> 
                <Typography className='infoBox__title' color='textSecondary' > {title} </Typography>
                <h2 className='infoBox__cases' >{cases}</h2>
                <Typography className='infoBox__total' color='textSecondary' >{total} Total</Typography>
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

export default InfoBox