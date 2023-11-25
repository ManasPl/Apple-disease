// Dropzone.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Image = ({ onDrop }) => {
  const handleDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      onDrop(file);
    }
  }, [onDrop]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop an image here, or click to select one</p>
    </div>
  );
};

const dropzoneStyles = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default Image;
