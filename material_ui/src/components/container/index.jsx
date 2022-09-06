import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
const ContainerComponent = () => {
    return (
        <>
            <CssBaseline>
                {/* xs, sm, md, lg, xl */}
                <Container maxWidth="lg" fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
                </Container>
            </CssBaseline>
        </>
    );
};

export default ContainerComponent;
