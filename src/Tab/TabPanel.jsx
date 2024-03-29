import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OptionBox from '../Options/OptionBox';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce({Centers}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Punjab" icon={<LocationOnIcon />} {...a11yProps(0)} />
          <Tab label="Delhi" icon={<LocationOnIcon />} {...a11yProps(1)} />
          <Tab label="Uttar Pardesh" icon={<LocationOnIcon />} {...a11yProps(2)} />
          <Tab label="Haryana" icon={<LocationOnIcon />} {...a11yProps(3)} />
          <Tab label="Himachal" icon={<LocationOnIcon />} {...a11yProps(4)} />
          <Tab label="Uttrakhand" icon={<LocationOnIcon />} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className='heading__test'>
        {
            Centers?.filter( (item) => {
                if (item.data.state.toLowerCase() === 'west bengal') {
                    return item;
                }
            } ).map(center => (
                center && center.data ? (
                    <div>
                        <OptionBox
                        title={center.data.name}
                        subtitle={center.data.address}
                        contact={center.data.contact}
                        />
                    </div>
                ) : (
                    <div className='hidden'>
                        <h3 style={{ color: 'gray' }}>No results found !!</h3>
                    </div>
                )
            ))
        }
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className='heading__test'>
        {
            Centers?.filter( (item) => {
                if (item.data.state.toLowerCase() === 'delhi') {
                    return item;
                }
            } ).map(center => (
                center && center.data ? (
                    <div>
                        <OptionBox
                        title={center.data.name}
                        subtitle={center.data.address}
                        contact={center.data.contact}
                        />
                    </div>
                ) : (
                    <div className='hidden'>
                        <h3 style={{ color: 'gray' }}>No results found !!</h3>
                    </div>
                )
            ))
        }
      </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className='heading__test'>
        {
            Centers?.filter( (item) => {
                if (item.data.state.toLowerCase() === 'maharashtra') {
                    return item;
                }
            } ).map(center => (
                center && center.data ? (
                    <div>
                        <OptionBox
                        title={center.data.name}
                        subtitle={center.data.address}
                        contact={center.data.contact}
                        />
                    </div>
                ) : (
                    <div className='hidden'>
                        <h3 style={{ color: 'gray' }}>No results found !!</h3>
                    </div>
                )
            ))
        }
      </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className='heading__test'>
        {
            Centers?.filter( (item) => {
                if (item.data.state.toLowerCase() === 'telangana') {
                    return item;
                }
            } ).map(center => (
                center && center.data ? (
                    <div>
                        <OptionBox
                        title={center.data.name}
                        subtitle={center.data.address}
                        contact={center.data.contact}
                        />
                    </div>
                ) : (
                    <div className='hidden'>
                        <h3 style={{ color: 'gray' }}>No results found !!</h3>
                    </div>
                )
            ))
        }
      </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className='heading__test'>
        {
            Centers?.filter( (item) => {
                if (item.data.state.toLowerCase() === 'tamil nadu') {
                    return item;
                }
            } ).map(center => (
                center && center.data ? (
                    <div>
                        <OptionBox
                        title={center.data.name}
                        subtitle={center.data.address}
                        contact={center.data.contact}
                        />
                    </div>
                ) : (
                    <div className='hidden'>
                        <h3 style={{ color: 'gray' }}>No results found !!</h3>
                    </div>
                )
            ))
        }
      </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className='heading__test'>
        {
            Centers?.filter( (item) => {
                if (item.data.state.toLowerCase() === 'karnataka') {
                    return item;
                }
            } ).map(center => (
                center && center.data ? (
                    <div>
                        <OptionBox
                        title={center.data.name}
                        subtitle={center.data.address}
                        contact={center.data.contact}
                        />
                    </div>
                ) : (
                    <div className='hidden'>
                        <h3 style={{ color: 'gray' }}>No results found !!</h3>
                    </div>
                )
            ))
        }
      </div>
      </TabPanel>
    </div>
  );
}