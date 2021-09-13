import React, { useState } from 'react';
import {
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardActions,
    CardContent,
    IconButton,
    Modal,
    Fade
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        marginLeft: theme.spacing(10),
        marginBottom: theme.spacing(5)
    },
    media: {
        height: 400,
    },
    explanation: {
        maxHeight: 230,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '0.2em'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid #f5f5f5'
        }
    },
    content: {
        height: 320
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        width: 1280,
        height: 720
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hdimage: {
        height: '100%',
        width: '100%'
    }
}));

const ImageModal = ({ image }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const handleMediaClicked = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea onClick={handleMediaClicked}>
                    <CardMedia
                        className={classes.media}
                        image={image.url}
                        title={image.title}
                    />
                </CardActionArea>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {image.title}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component='p'>
                        {image.date}
                    </Typography>
                    <Typography className={classes.explanation} variant="body2" color="textSecondary" component="p">
                        {image.explanation}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <FavoriteBorderRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <Modal
                className={classes.modal}
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={isOpen}>
                    <div className={classes.paper}>
                        <img className={classes.hdimage} src={image.hdurl} alt={image.title} />
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default ImageModal
