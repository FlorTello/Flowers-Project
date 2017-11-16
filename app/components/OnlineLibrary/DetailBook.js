import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {toggleModal} from '../../actions'
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
      this.handleRequestClose = this.handleRequestClose.bind(this);
    }
       
    handleRequestClose(){
      this.props.toggleModal();
      console.log("cerrar")
    };

    render(){
        const { fullScreen, stateModal, bookModal } = this.props;
        console.log(this.props);

        return (
                <div>
                    <Dialog
                    fullScreen={fullScreen}
                    open={stateModal}
                    onRequestClose={this.handleRequestClose}
                    >
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                          <p>
                            <span>Author: </span>
                            {bookModal && bookModal.author}
                          </p>
                          <p>Description</p>
                          <p>{bookModal && bookModal.description}</p>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        
                    </DialogActions>
                    </Dialog>
                </div>
            );
    }
}

const mapStateToProps = (state)=>{
  const {stateModal,bookModal} = state.AppReducer;
  return {
    stateModal,
    bookModal
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    toggleModal(){
      dispatch(toggleModal())
    }
  }
}
const DetailBookWithRedux = connect(mapStateToProps, mapDispatchToProps)(DetailBook)
export default DetailBookWithRedux;