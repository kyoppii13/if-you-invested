import React, { VFC } from 'react';
import { Typography, Paper } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import theme from '../lib/theme';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    },
    mainText: {
      fontSize: 64,
      fontWeight: 900,
      color: theme.palette.primary.main,
    },
    tickerField: {
      color: theme.palette.primary.main,
      width: '200px',
      margin: theme.spacing(0, 2),
      '& .MuiInputBase-root': {
        fontSize: 64,
        fontWeight: 900,
      },
    },
    tickerDropdown: {
      backgroundColor: theme.palette.background.default,
    },
    yearField: {
      fontSize: 64,
      fontWeight: 900,
      margin: theme.spacing(0, 2),
    },
    yearMenuItem: {
      backgroundColor: theme.palette.background.default,
    },
  }),
);

const Main: VFC = () => {
  const classes = useStyles();
  const tickers = [
    { title: 'Unity', year: 0 },
    { title: 'Crawd', year: 1 },
  ];
  const [selectedYear, setYear] = React.useState(2000);

  return (
    <div className={classes.root}>
      <Typography className={classes.mainText}>If you invested</Typography>
      <Autocomplete
        options={tickers}
        getOptionLabel={(option: { title: string }) => option.title}
        disableClearable
        PaperComponent={({ children }) => (
          <Paper className={classes.tickerDropdown}>{children}</Paper>
        )}
        renderInput={(params) => (
          <TextField
            {...params} // eslint-disable-line react/jsx-props-no-spreading
            variant="standard"
            className={classes.tickerField}
          />
        )}
      />
      <Typography className={classes.mainText}>in</Typography>
      <Select
        value={selectedYear}
        onChange={(event) => setYear(event.target.value as number)}
        className={classes.yearField}
      >
        {Array(20)
          .fill(0)
          .map((year, index) => (
            <MenuItem className={classes.yearMenuItem} value={index + 2000}>
              {index + 2000}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};
export default Main;
