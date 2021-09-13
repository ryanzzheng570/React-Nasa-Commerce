import React from 'react'

const ImageModal = ({ image }) => {
    return (
        <div>
            <span>{image.date}</span>
            <span>{image.explanation}</span>
            <span>{image.hdurl}</span>
            <span>{image.title}</span>
        </div>
    )
}

export default ImageModal
