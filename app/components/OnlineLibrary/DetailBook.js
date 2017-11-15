import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {detailBookSelected} from '../../actions'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';

class DetailBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
          };
    }
    

    
      handleRequestClose = () => {
        this.setState({ open: this.props.openModal });
      };

    render(){
        console.log(this.props);
        const { fullScreen } = this.props;


        return (
                <div>
                    <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                    >
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Description
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        
                    </DialogActions>
                    </Dialog>
                </div>
            );
    }
}

export default DetailBook;