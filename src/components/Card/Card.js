import React from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
// import Woman from '../assets/woman.png';
import DeleteIcon from '@mui/icons-material/Delete';
import './Card.css'

const Cards = ({ id, image, text, date, comment }) => {
  return (
      <div>
            <Card sx={{ maxWidth: 345 }} className="Card">
                {/* <CardMedia
                component="img"
                height="140"
                image={Woman}
                alt="woman"
                /> */}
                <CardContent>
                    <Typography variant='h6' color='secondary'>
                        {text}
                    </Typography>
                    <Typography variant='body1' color='black' sx={{ marginTop: 3 }}>
                        {date}
                    </Typography>
                    <Typography variant='body2' color='black' sx={{ marginTop: 2 }}>
                        {comment}
                    </Typography>
                </CardContent>
                <CardActions className='Icon-wrap'>
                    <DeleteIcon className="deleteIcon" sx={{ fontSize: 25 }}/>
                </CardActions>
            </Card>
      </div>
  )
}

export default Cards