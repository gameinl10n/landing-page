import React, { useState, memo, useCallback } from 'react';
import LoadingSpinner from './LoadingSpinner';

const GalleryItem = memo(({ activity }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  return (
    <div 
      className="gallery-item"
      style={{
        width: `${activity.width}px`
      }}
    >
      <div 
        className="gallery-image-wrapper"
        style={{
          height: `${activity.height}px`
        }}
      >
        {(isLoading || hasError) && (
          <LoadingSpinner />
        )}
        <img
          src={activity.image}
          alt={activity.title}
          className={`gallery-image ${isLoading || hasError ? 'hidden' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      </div>
      <div className="gallery-info">
        <h3 className="gallery-title">{activity.title}</h3>
        <p className="gallery-description">{activity.description}</p>
      </div>
    </div>
  );
});

GalleryItem.displayName = 'GalleryItem';

export default GalleryItem;

