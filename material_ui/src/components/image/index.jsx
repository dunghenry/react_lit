import React from 'react';
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
    ListSubheader,
    IconButton,
} from '@mui/material';
import { data } from './data';
import InfoIcon from '@mui/icons-material/Info';
const Image = () => {
    return (
        // <ImageList sx={{ width: 500, height: 450 }} cols={2}>
        //     {data.map((item, i) => (
        //         <ImageListItem key={i}>
        //             <img src={item} loading="lazy" srcSet />
        //         </ImageListItem>
        //     ))}
        // </ImageList>
        // <ImageList sx={{ width: 500, height: 450 }}>
        //     <ImageListItem key="Subheader" cols={2}>
        //         <ListSubheader component="div">December</ListSubheader>
        //     </ImageListItem>
        //     {data.map((item, i) => (
        //         <ImageListItem key={i}>
        //             <img src={item} loading="lazy" />
        //             <ImageListItemBar
        //                 title={'Hi'}
        //                 subtitle={'@author'}
        //                 actionIcon={
        //                     <IconButton sx={{ color: 'red' }}>
        //                         <InfoIcon />
        //                     </IconButton>
        //                 }
        //             />
        //         </ImageListItem>
        //     ))}
        // </ImageList>
        <ImageList sx={{ width: 500, height: 450 }}>
            {data.map((item, i) => (
                <ImageListItem key={i}>
                    <img src={`${item}`} loading="lazy" />
                    <ImageListItemBar
                        title={"image"}
                        subtitle={<span>by: {"@author"}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

export default Image;
