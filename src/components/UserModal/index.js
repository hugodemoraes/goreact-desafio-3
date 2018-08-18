import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MarkerActions } from '../../store/ducks/markers';
import { Creators as UserModalActions } from '../../store/ducks/userModal';

import { Container, Form, Action } from './style';

class UserModal extends Component {
  static propTypes = {
    addMarkerRequest: PropTypes.func.isRequired,
    closeUserModal: PropTypes.func.isRequired,
    markers: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
  };

  state = {
    userNameInput: '',
  };

  handleAddUserMarker = async (e) => {
    e.preventDefault();

    await this.props.addMarkerRequest(this.state.userNameInput);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleAddUserMarker}>
          <strong>Adicionar novo usuário</strong>
          <input
            type="text"
            placeholder="Usuário no Github"
            value={this.state.userNameInput}
            onChange={(e) => {
              this.setState({ userNameInput: e.target.value });
            }}
          />
          <Action>
            <button type="button" onClick={this.props.closeUserModal}>
              Cancelar
            </button>
            <button type="submit">
              {!this.props.markers.loading ? 'Salvar' : <i className="fa fa-spinner fa-pulse" />}
            </button>
          </Action>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers,
});

const MapDispatchToProps = dispatch =>
  bindActionCreators({ ...MarkerActions, ...UserModalActions }, dispatch);

export default connect(
  mapStateToProps,
  MapDispatchToProps,
)(UserModal);
