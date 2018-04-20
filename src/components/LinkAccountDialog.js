import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVendorList, createLink } from '../api';

class _LinkAccountDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: false,
      vendors: []
    };
  }

  componentDidMount() {
    getVendorList(this.props.token)
      .then(vendors => {
        this.setState({ vendors, isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false, error: true })
      });
  }

  onLinkAccount = vid => {
    console.log("Link vid:", vid, " to uid:", this.props.uid);
    const { onDismiss } = this.props;
    createLink(this.props.token, vid, ''+(Math.random() * 10**10))
      .then(res => {
        onDismiss();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { onDismiss } = this.props;
    const { vendors, isLoading, error } = this.state;
    return (
      <div className="modal" id="link-acct-modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                <i className="fa fa-cog"></i> Link New Account</h4>
            </div>
            <div className="modal-body">
              {isLoading && <span>Loading...</span>}
              {!isLoading && error && <span>Could not update list of vendors</span>}
              {!isLoading && vendors.map(vendor => (
                <div key={vendor.id} style={{
                      lineHeight: '38px',
                      marginBottom: '5px'
                    }}>
                  {vendor.name}
                  <button
                    className="btn btn-primary"
                    style={{float: 'right', clear: 'both'}}
                    onClick={_=>this.onLinkAccount(vendor.id)}>
                      LINK
                  </button>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={onDismiss}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  uid: user.uid,
  token: user.token
});

export const LinkAccountDialog = connect(mapStateToProps)(_LinkAccountDialog);