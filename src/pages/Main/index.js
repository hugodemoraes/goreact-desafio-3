import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Sidebar from '../../components/Sidebar';
import Map from '../../components/Map';
import UserModal from '../../components/UserModal';

import { Container } from './style';

const Main = ({ userModal }) => (
  <Container>
    <Sidebar />

    <ToastContainer />

    <Map />

    {userModal.open && <UserModal />}
  </Container>
);

Main.propTypes = {
  userModal: PropTypes.shape({
    open: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  userModal: state.userModal,
});

export default connect(mapStateToProps)(Main);
