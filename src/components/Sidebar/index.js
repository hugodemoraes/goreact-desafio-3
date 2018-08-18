import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MarkerActions } from '../../store/ducks/markers';

import { Container, Menu, User, UserInfo, RemoveButton } from './style';

const Sidebar = ({ markers, removeMarker }) => (
  <Container>
    <Menu>
      <ul>
        {markers.data.map(marker => (
          <User key={marker.user.id}>
            <img src={marker.user.avatar_url} alt={marker.user.login} />
            <UserInfo>
              <strong>{marker.user.name}</strong>
              <span>{marker.user.login}</span>
            </UserInfo>
            <RemoveButton
              onClick={() => removeMarker(marker.user.id)}
              onKeyPress={() => removeMarker(marker.user.id)}
              role="button"
              tabIndex="0"
            >
              <i className="fa fa-times-circle" />
            </RemoveButton>
            <i className="fa fa-angle-right" />
          </User>
        ))}
      </ul>
    </Menu>
  </Container>
);

Sidebar.propTypes = {
  markers: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
    })),
  }).isRequired,
  removeMarker: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  markers: state.markers,
});

const mapDispatchToProps = dispatch => bindActionCreators(MarkerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
