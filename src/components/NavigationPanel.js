import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AddRentals } from './AddRentals';

const defaultTheme = createTheme({
  tabs: {
    minHeight: '24px',
    height: '24px',
  },
});

export default function NavigationPanel() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Box sx={{ width: '100%' }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
        centered
        role="navigation"
        sx={{ minHeight: '36px', height: '36px' }}
      >
        <Tab label="Add Rentals" sx={{ textTransform: "none", minHeight: '36px', height: '36px' }}>
          <AddRentals />
        </Tab>
        <Tab label="View Rentals" sx={{ textTransform: "none", minHeight: '36px', height: '36px' }} />
        <Tab label="Get Rental Summary" sx={{ textTransform: "none", minHeight: '36px', height: '36px' }} />
      </Tabs>

      { value === 0 && (<AddRentals></AddRentals>)
        
      }

    </Box>
    </ThemeProvider>
  );
}