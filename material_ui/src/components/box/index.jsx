import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const BoxComponent = () => {
    return (
        <Box mt={3}>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            ></Box>
            <Box component="span" sx={{ p: 3, border: '1px solid gray' }}>
                <Button variant="outlined">Save</Button>
            </Box>
            <Box
                component="button"
                color={'red'}
                px={3}
                py={1}
                borderRadius={1}
                fontWeight={'bold'}
            >
                Save
            </Box>
        </Box>
    );
};

export default BoxComponent;
