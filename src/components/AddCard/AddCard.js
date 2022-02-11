import React, { useState } from 'react';
import { Card, styled, Box, TextareaAutosize, Button } from '@mui/material';
import './AddCard.css';
import AddIcon from '@mui/icons-material/Add';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import TextField from '@mui/material/TextField';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3,
};

const AddCard = ({ handleAddCard }) => {
  // const [cardText, setCardText] = useState('');

  const [memo, setMemo] = useState({
      title: '',
      text: ''
  })

  const handleChange = (event) => {
    setMemo(event.target.value);
  };

  const handleSaveClick = () => {
    if(memo.trim().length > 0){
      handleAddCard(memo);
      setMemo('');
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className='Card AddCard'>
        <div>
            <AddIcon className='AddIcon' type='button' onClick={handleOpen}/>
        </div>
        <div>
          <StyledModal
            open={open}
            onClose={handleClose}
            BackdropComponent={Backdrop}
          >
              <Box sx={style}>
                <TextField
                  name="title"
                  value={memo.title}
                  onChange={handleChange}
                  id="outlined-basic" 
                  label="Title"
                  variant="outlined" 
                  size='small' 
                  fullWidth 
                />
                <TextareaAutosize
                    value= {memo.text}
                    onChange={handleChange}
                    name="text"
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Comment"
                    defaultValue=""
                    style={{ width: 395, height: 300, marginTop: 10 }}
                />
                <div className='button-wrap'>
                  <Button 
                    onClick={handleSaveClick}
                    variant="contained" 
                    sx={{ marginTop: 1 }}>
                    Save
                  </Button>
                </div>
              </Box>
            </StyledModal>
        </div>
    </Card>
  )
}

export default AddCard