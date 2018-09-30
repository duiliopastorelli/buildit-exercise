import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { FaHome } from 'react-icons/fa';
import blue from '@material-ui/core/colors/blue';

const cities = ['Warszawa', 'London'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

/**
 * This Component is part of a material design library.
 * Please see https://material-ui.com for further documentation
 */
class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { classes, onClose, selectedValue, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Select a city</DialogTitle>
        <div>
          <List>
            {cities.map(email => (
              <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <FaHome />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class CityDialog extends React.Component {
  state = {
    open: false,
    selectedCity: this.props.currentCity,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedCity: value, open: false });
  };

  componentDidUpdate(prevProps, prevState) {
    //Check if the state changed compared to the previous state
    if (this.state.selectedCity !== prevState.selectedCity) {

      //Fetch the forecasts for the new city
      this.props.fetchNewCity(this.state.selectedCity);
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Change city</Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedCity}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

CityDialog.propTypes = {
  fetchNewCity: PropTypes.func.isRequired,
};

export default CityDialog;