"use client"
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';

const UploadPage = () => {
  const [gameId, setGameId] = useState('');
  const [gameName, setGameName] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [price, setPrice] = useState('');
  const [devId, setDevId] = useState('');
  const [selectedImage, setSelectedImage] = useState("");
  const toast = useToast();

  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('gameId', gameId);
    formData.append('gameName', gameName);
    formData.append('description', description);
    formData.append('releaseDate', releaseDate);
    formData.append('price', price);
    formData.append('devId', devId);
    formData.append('image', selectedImage);

    // Perform the API call or submit the form data here
    // Replace this with your actual API endpoint or form submission logic

    console.log(formData);

    // Show success toast message
    toast({
      title: 'Game uploaded',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedImage("");
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Upload Game</Heading>

      <form onSubmit={handleFormSubmit}>
        <FormControl mb={4}>
          <FormLabel>Game ID</FormLabel>
          <Input value={gameId} onChange={(e) => setGameId(e.target.value)} placeholder="Game ID" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Game Name</FormLabel>
          <Input value={gameName} onChange={(e) => setGameName(e.target.value)} placeholder="Game Name" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Release Date</FormLabel>
          <Input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Price</FormLabel>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Developer ID</FormLabel>
          <Input value={devId} onChange={(e) => setDevId(e.target.value)} placeholder="Developer ID" />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Image</FormLabel>
          <Input type="file" onChange={handleImageChange} accept="image/*" />
        </FormControl>

        <Button type="submit">Upload</Button>
      </form>
    </Box>
  );
};

export default UploadPage;
