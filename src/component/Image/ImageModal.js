import React from 'react';
import {
    Typography,
    Card,
    CardActionArea,
    CardMedia,
    CardActions,
    CardContent,
    IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        marginLeft: theme.spacing(10),
    },
    media: {
        height: 400,
    },
    explanation: {
        maxHeight: 210,
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            width: '0.2em'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.1)',
            outline: '1px solid #f5f5f5'
        }
    }
}));

const ImageModal = ({ image }) => {
    const classes = useStyles();

    const handleMediaClicked = () => {

    }

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={handleMediaClicked}>
                <CardMedia
                    className={classes.media}
                    image={image.url}
                    title={image.title}
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {image.title}
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
    )
}

export default ImageModal
