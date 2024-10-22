import React, { useState } from 'react';
import { TextField, Button, Typography, CircularProgress, Box, InputAdornment } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery
import { useTheme } from '@mui/material/styles'; // Import useTheme

function ChatComponent() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen size is small

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(''); // Reset response
    try {
      const res = await fetch(`/api/ai?question=${encodeURIComponent(question)}`);
      const data = await res.json();
      setResponse(data.answer || 'No response available');
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('Failed to fetch response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: isMobile ? '80%' : 500, mt: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Chat with KindRobot"
          value={question}
          onChange={handleInputChange}
          required
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '20px',
              '& fieldset': {
                borderColor: 'darkgrey', // Consistent border color
              },
              '&:hover fieldset': {
                borderColor: 'darkgrey', // Prevent hover style change
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', // Prevent focus style change
                borderWidth: '1px', // Change border width on focus
              },
            },
            '& .MuiInputLabel-root': {
              color: 'black !important', // Ensure the label color is black
            },
          }}
          InputLabelProps={{
            shrink: true,
            required: false, // This removes the asterisk
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: 'gray',
                    borderRadius: '50%',
                    minWidth: 'auto',
                    padding: 0,
                    '&:hover': {
                      backgroundColor: 'darkgray',
                    },
                  }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress sx={{ color: 'darkgrey' }} size={24} /> : <ArrowForwardIcon />}
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </form>
      {response && (
        <Box
          mt={4}
          sx={{
            maxWidth: 500,
            height: '50px', // Set fixed height
            backgroundColor: '#ececec',
            borderRadius: '20px',
            p: 2,
            overflowY: 'auto', // Make it scrollable
          }}
        >
          <Typography
            variant="body2"
            component="pre"
            sx={{
              whiteSpace: 'pre-wrap', // Ensures text wraps within the box
              wordWrap: 'break-word', // Breaks long words to prevent overflow
              color: 'black',
            }}
          >
            {response}
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default ChatComponent;
