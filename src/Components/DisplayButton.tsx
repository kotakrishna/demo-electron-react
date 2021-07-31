import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';
export default function DisplayButton({title}) {
    
    return (
        <div>
            <Typography variant="h6">
                {title}
            </Typography>
        </div>
    )
}
