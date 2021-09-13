import React from 'react'
import ImageModal from './ImageModal'

const Images = ({ images }) => {
    return (
        <>
            {images.length > 0 && images.map((imageJSON, index) => {
                return (
                    <ImageModal key={index} image={imageJSON} />
                )
            })}
        </>
    )
}

export default Images
