import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {
    
    return (
        <div className="card animate__bounceIn animate__delay-4s">
         
          <div className="card-img-container  ">
          <img src={url} alt={title}/>

          </div>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}