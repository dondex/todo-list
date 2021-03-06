import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './Card.css'

const Cards = ({ id, title, date, text, handleDeleteCard }) => {
  return (
      <div>
            <Card sx={{ maxWidth: 345 }} className="Card">
                <CardContent>
                    <Typography variant='h6' color='secondary'>
                        {title}
                    </Typography>
                    <Typography variant='body1' color='black' sx={{ marginTop: 3 }}>
                        {date}
                    </Typography>
                    <Typography variant='body2' color='black' sx={{ marginTop: 2 }}>
                        {text}
                    </Typography>
                </CardContent>
                <CardActions className='Icon-wrap'>
                    <DeleteIcon 
                    className="deleteIcon" 
                    onClick={()=> handleDeleteCard(id)}
                    sx={{ fontSize: 25 }}/>
                </CardActions>
            </Card>
      </div>
  )
}

export default Cards