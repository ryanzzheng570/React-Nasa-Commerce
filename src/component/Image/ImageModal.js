import React, { useState } from 'react';
import {
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardActions,
    CardContent,
    Modal,
    Fade,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import LikedButton from '../Buttons/LikedButton';
import ShareButton from '../Buttons/ShareButton'
//Styling
const useStyles = makeStyles((theme) => ({
    container: {
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

//ImageModal Hook
const ImageModal = ({ image }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    //Handler for larger image clicked
    const handleMediaClicked = () => {
        setIsOpen(true);
    }

    //Handler to close the larger iamge
    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Card className={classes.container}>
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
                    <LikedButton />
                    <ShareButton imageUrl={image.url} />
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
