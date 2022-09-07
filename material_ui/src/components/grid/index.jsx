import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 400,
    color: theme.palette.text.primary,
}));
const GridComponent = () => {
    return (
        //  container
        //   direction=row-reverse, row, column, column-reverse
        //   justifyContent=space-between, flex-start, center, flex-end, space-around, space-evenly
        //   alignItems=baseline, flex-start, flex-end, center, stretch
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={8} lg={10} md={6} sm={6}>
                    <Item>lg=10</Item>
                </Grid>
                <Grid item xs={4} lg={2} md={6} sm={6}>
                    <Item>lg=2</Item>
                </Grid>
                <Grid item xs={4} lg={2} md={6} sm={6}>
                    <Item>lg=2 </Item>
                </Grid>
                <Grid item xs={4} lg={2} md={6} sm={6}>
                    <Item>lg=2</Item>
                </Grid>
                <Grid item xs={8} lg={8} md={6} sm={6}>
                    <Item>lg=8</Item>
                </Grid>
            </Grid>
            <Box my={1}>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}
                >
                    <Grid item xs={4}>
                        <Item>xs = 4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs = 4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs = 4</Item>
                    </Grid>
                </Grid>
            </Box>

            {/* auto */}

            <Box my={1}>
                <Grid container rowSpacing={1}>
                    <Grid item xs="auto">
                        <Item>xs = 3</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs = 6</Item>
                    </Grid>
                    <Grid item xs>
                        <Item>xs = 3</Item>
                    </Grid>
                </Grid>
            </Box>

            {/* columns */}
            <Box>
                <Grid container columns={18}>
                    <Grid item xs={6}>
                        <Item>xs = 6</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs = 6</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>xs = 6</Item>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>D</Avatar>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap py={1}>
                                Việc cắt bớt phải được áp dụng có điều kiện đối
                                với dòng văn bản dài này vì đây là dòng dài hơn
                                nhiều so với những gì vùng chứa có thể hỗ trợ.
                            </Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>D</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography noWrap py={1}>
                                Việc cắt bớt phải được áp dụng có điều kiện đối
                                với dòng văn bản dài này vì đây là dòng dài hơn
                                nhiều so với những gì vùng chứa có thể hỗ trợ.
                            </Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
                <StyledPaper
                    sx={{
                        my: 1,
                        mx: 'auto',
                        p: 2,
                    }}
                >
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                            <Avatar>D</Avatar>
                        </Grid>
                        <Grid item xs>
                            <Typography>
                                Việc cắt bớt phải được áp dụng có điều kiện đối
                                với dòng văn bản dài này vì đây là dòng dài hơn
                                nhiều so với những gì vùng chứa có thể hỗ trợ.
                            </Typography>
                        </Grid>
                    </Grid>
                </StyledPaper>
            </Box>
        </Box>
    );
};

export default GridComponent;
