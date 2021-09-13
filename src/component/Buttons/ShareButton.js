import React, { useState } from 'react'
import {
    IconButton,
    ClickAwayListener,
    Tooltip
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

//Share Button Hook
const ShareButton = ({ imageUrl }) => {
    const [isShareLinkCopied, setIsShareLinkCopied] = useState(false);

    //Handler to share the iamge Link
    const handleShareImageLink = (url) => {
        navigator.clipboard.writeText(url);
        setIsShareLinkCopied(true);
    }

    //Handler to close the Copied tooltip
    const handleShareToolTipClose = () => {
        setIsShareLinkCopied(false);
    }
    return (
        <ClickAwayListener onClickAway={handleShareToolTipClose}>
            <Tooltip
                PopperProps={{
                    disablePortal: true,
                }}
                onClose={handleShareToolTipClose}
                open={isShareLinkCopied}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Copied"
                placement='top'
            >
                <IconButton onClick={() => handleShareImageLink(imageUrl)}>
                    <ShareIcon />
                </IconButton>
            </Tooltip>
        </ClickAwayListener>
    )
}

export default ShareButton
