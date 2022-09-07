import React from 'react';
import { ClickAwayListener, Box } from '@mui/material';
const ClickAwayCpn = () => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    const handleClickAway = () => {
        setOpen(false);
    };
    const styles = {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
                <button onClick={handleClick}>Click me!</button>
                {open && (
                    <Box style={styles}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quod sed eius odit sequi distinctio exercitationem,
                        accusamus officia rem deserunt necessitatibus et
                        delectus nostrum minima labore repellat assumenda
                        recusandae reprehenderit omnis.
                    </Box>
                )}
            </Box>
        </ClickAwayListener>
    );
};

export default ClickAwayCpn;
