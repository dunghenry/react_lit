import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
const ComboBox = () => {
    const data = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
    ];
    return (
        <Autocomplete
            disablePortal
            id="combo-box"
            options={data}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    );
};

export default ComboBox;
