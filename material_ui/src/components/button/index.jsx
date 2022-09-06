import React from 'react';
import myAlert from '~/myAlert';
// import myAlert from '../../myAlert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LoadingButton from '@mui/lab/LoadingButton';
const ButtonComponent = () => {
    return (
        <div>
            {/* <button onClick={myAlert}>Click me!</button> */}
            <Button onClick={myAlert} variant="contained">
                Click me!
            </Button>
            <br />
            <br />
            <Button variant="text">My text</Button>
            <br />
            <br />
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <br />
            <br />
            <Button variant="outlined" href="https://github.com/dunghenry">
                My github
            </Button>
            <br />
            <br />
            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>
            <br />
            <br />
            <Button variant="contained" color="warning">
                Success
            </Button>
            <br />
            <br />
            <Button variant="contained" size="small">
                Size
                {/* samll medium large */}
            </Button>
            <br />
            <br />
            <Button component="label" variant="contained">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
            >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
            </IconButton>

            <br />
            <br />
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <br />
            <br />
            {/* icon */}

            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="add an alarm" color="secondary">
                <AlarmIcon />
            </IconButton>
            <IconButton aria-label="add an alarm" color="primary">
                <AddShoppingCartIcon fontSize="large" />
                {/* small, inherit, large */}
            </IconButton>
            <br />
            <br />
            <LoadingButton loading variant="outlined">
                Submit
            </LoadingButton>
            <LoadingButton
                loading
                size="small"
                endIcon={<SendIcon />}
                loadingPosition="end"
                variant="contained"
            >
                Send
            </LoadingButton>
        </div>
    );
};

export default ButtonComponent;
