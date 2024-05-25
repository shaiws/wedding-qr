import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Masonry from 'react-masonry-css';
import './App.css';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f8f8f8;
`;

const GalleryTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
    text-align: center;
font-family: 'HebTitle', sans-serif;
`;

const MediaWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, transform 0.3s;
  background-color: #fff;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const ImageViewer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://image-gallery-backend-zxcswoqr5a-uc.a.run.app/list')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const isVideo = (fileName) => {
    const videoFormats = [
      '.mp4',
      '.webm',
      '.ogg',
      '.ogv',
      '.avi',
      '.mov',
      '.wmv',
      '.flv',
      '.mkv',
      '.3gp',
      '.m4v',
      '.m4p',
      '.m4b',
      '.m4r',
      '.m4a',
      '.f4v',
      '.f4p',
      '.f4a',
      '.f4b',
    ];
    return videoFormats.some((format) => fileName.toLowerCase().endsWith(format));
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <GalleryContainer>
      <GalleryTitle>❤️ הרגעים ששותפו איתנו</GalleryTitle>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image) => (
          <MediaWrapper
            key={image.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layout
          >
            {isVideo(image.name) ? (
              <video controls style={{ width: '100%', height: 'auto', display: 'block' }}>
                <source
                  src={`https://image-gallery-backend-zxcswoqr5a-uc.a.run.app/file/${image.id}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <LazyLoadImage
                alt={image.alt}
                src={`https://image-gallery-backend-zxcswoqr5a-uc.a.run.app/file/${image.id}`}
                effect="blur"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            )}
          </MediaWrapper>
        ))}
      </Masonry>
    </GalleryContainer>
  );
};

export default ImageViewer;