import React, { Component } from 'react';
import { connect } from 'react-redux';

class _LinkAccountDialog extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { onDismiss } = this.props;
    return (
      <div className="modal" id="link-acct-modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                <i className="fa fa-cog"></i> Link New Account</h4>
            </div>
            <div className="modal-body">
              <button>GitHub</button>
              <hr/>
              <button>Leeds Beckett University</button>
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