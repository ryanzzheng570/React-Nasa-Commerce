import React, { useState } from 'react'
import {
    IconButton,
    ClickAwayListener,
    Tooltip
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';

//Styling
const useStyles = makeStyles((theme) => ({
    liked: {
        color: 'red'
    }
}));

//Like Button Hook
const LikedButton = () => {
    const classes = useStyles();

    const [isLiked, setIsLiked] = useState(false);
    const [showToolTip, setShowToolTip] = useState(false);

    //Handler for Like image
    const handleLikeImage = () => {
        setIsLiked(!isLiked);
        setShowToolTip(true);
    }

    //Handler to close tool tip
    const handleToolTipClose = () => {
        setShowToolTip(false);
    }

    return (
        <ClickAwayListener onClickAway={handleToolTipClose}>
            <Tooltip
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={handleToolTipClose}
                open={showToolTip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={isLiked ? "Liked" : "Unliked"}
                placement='top'
            >
                <IconButton onClick={handleLikeImage}>
                    <FavoriteIcon className={isLiked ? classes.liked : ''} />
                </IconButton>
            </Tooltip>
        </ClickAwayListener>
    )
}

export default LikedButton
