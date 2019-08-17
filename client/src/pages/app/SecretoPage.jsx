import React from 'react';
import { connect } from 'react-redux';
import { userSignOut } from '../../redux/Auth/user.actions';

function SecretoPage({ userSignOut }) {
  return (
    <div>
      SecretoPage <button onClick={userSignOut}>unlock</button>{' '}
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { userSignOut };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecretoPage);
