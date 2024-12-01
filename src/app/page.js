'use client';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

// Custom hook to detect if the app is opened on a mobile device
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
      setIsMobile(window.innerWidth <= 600 || isMobileDevice);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default function Page() {
  const isMobile = useIsMobile();
  const [isRotating, setIsRotating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

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

  const handleShareDialogOpen = () => {
    setIsShareDialogOpen(true);
  };

  const handleShareDialogClose = () => {
    setIsShareDialogOpen(false);
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
          AF is an outlet for ideas, expressed through code, words, and images.
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
      <Dialog
        open={isShareDialogOpen}
        onClose={handleShareDialogClose}
        PaperProps={{
          sx: {
            width: '610px',
            backgroundColor: '#0a0a0a',
            color: 'white',
          },
        }}
      >
        <DialogTitle variant="body2">Share</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100px',
            '@media (max-width: 600px)': {
              height: '120px',
            },
          }}
        >
          <img src="/images/qrcode.png" alt="Share" style={{ width: '80px', height: '80px', marginTop: '10px' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleShareDialogClose} color="primary" sx={{ color: 'white' }}>
            <Typography variant="caption">Close</Typography>
          </Button>
        </DialogActions>
      </Dialog>
      <Stack direction="row" spacing={2} sx={{ position: 'absolute', bottom: '2rem', right: '2rem', fontSize: '0.8rem', color: 'lightgrey' }}>
      {/* <a href="https://x.com/analogfuture00" target='_blank' >Words</a>
      <a href="https://www.pinterest.com/olegmoshkovich/maybe-it-feels-like-this/" target='_blank' >Images</a> */}
        <Typography
          variant='caption'
          onClick={handleShareDialogOpen}
          sx={{
            cursor: 'pointer',
            color: 'lightgrey',
          }}
        >
          Share
        </Typography>
      </Stack>
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
