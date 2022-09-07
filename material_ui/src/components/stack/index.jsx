import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const StackComponent = () => {
    //   direction=row-reverse, row, column, column-reverse
    //   justifyContent=space-between, flex-start, center, flex-end, space-around, space-evenly
    //   alignItems=baseline, flex-start, flex-end, center, stretch
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Stack py={3} spacing={2} direction="row">
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Stack
                py={3}
                spacing={2}
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
            >
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
        </Box>
    );
};

export default StackComponent;
