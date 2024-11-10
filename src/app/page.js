'use client';
import React, { useState } from 'react';
import Home from './Components/Home';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Page() {
  const [isRotating, setIsRotating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTitleClick = () => {
    setIsRotating(!isRotating);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div style={{ width: '100dvw', height: '100dvh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <Home isRotating={isRotating} />
      {/* <a href="https://www.pinterest.com/olegmoshkovich/analog-future/" target='_blank' style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.8rem', color: 'lightgrey' }}>Blog</a> */}
      <a onClick={handleDialogOpen} style={{ position: 'absolute', bottom: '2rem', left: '2rem', fontSize: '0.8rem', color: 'lightgrey', cursor: 'pointer' }}>About</a>
      <Dialog
        open={isDialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          sx: {
            width: '610px',
            backgroundColor: '#0a0a0a',
            color: 'white',
          },
        }}
      >
        <DialogTitle variant="body2">About</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100px',
            '@media (max-width: 600px)': {
              height: '120px',
            },
          }}
        >
          <Typography variant="body2">
            Analog Future is an agency operating on the intersection of AEC and technology.
            <br />
            We are currently exploring concepts of time, daily patterns, digital workspaces and expert ai systems.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary" sx={{ color: 'white' }}>
            <Typography variant="caption">Close</Typography>
          </Button>
        </DialogActions>
      </Dialog>
      <a href="https://x.com/analogfuture00" target='_blank' style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.8rem', color: 'lightgrey' }}>Thoughts</a>
      <style jsx>{`
        @media (max-width: 600px) {
          h1 {
            margin-top: 1em;
            margin-bottom: 1em;
          }
        }
      `}</style>
    </div>
  );
}
