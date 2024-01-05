# Apple Disease Prediction System

## Overview

This repository presents an end-to-end system for predicting apple diseases using a deep neural network. The system includes a frontend developed with React, a backend powered by FastAPI, and a deep learning model trained with TensorFlow and Keras.

## Requirements

- React (for the frontend)
- FastAPI (for the backend)
- TensorFlow (for the deep learning model)
- Other necessary dependencies for the frontend and backend
- used react dropzone for handling images

## Frontend

The frontend provides an intuitive user interface for uploading images. Users can drag and drop or select images for disease prediction. The responsive design ensures a seamless experience across different devices.

## Backend

The backend employs FastAPI, a modern, fast, and web-based framework for building APIs. The Swagger documentation allows users to explore and test the API endpoints easily. 

## Deep Learning Model

The deep learning model is trained to classify apple diseases based on input images. The model is saved and loaded in the backend for making predictions.

## Model Architecture

- Input Layer: The model starts with an input layer, where images are resized and rescaled for consistent input dimensions.

- Data Augmentation: To enhance the model's ability to generalize, data augmentation is applied, introducing variations in the training dataset through random flips and rotations.

- Convolutional Layers: A series of convolutional layers with max-pooling is employed to capture hierarchical features from input images.

- Flatten Layer: The flatten layer reshapes the output from the convolutional layers into a flat vector.

- Dense Layers: Fully connected dense layers follow, helping the model learn intricate patterns from the flattened representation. A dropout layer is added for regularization to prevent overfitting.

- Output Layer: The final layer produces class probabilities using the softmax activation function, determining the predicted class for a given input.

## Model Compilation

The model is compiled using the Adam optimizer, sparse categorical crossentropy loss, and accuracy as the evaluation metric.

## Model Prediction

The predict function in the backend queries the trained model to make predictions on the uploaded images.



Conclusion
This repository provides a comprehensive system for predicting apple diseases, including a React frontend, FastAPI backend, and a trained deep learning model. Customize the system based on your requirements and experiment with different components to enhance performance.
