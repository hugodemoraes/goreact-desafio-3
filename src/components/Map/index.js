import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserModalActions } from '../../store/ducks/userModal';

import { UserImage } from './style';

class Map extends Component {
  static propTypes = {
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
      loading: PropTypes.bool,
    }).isRequired,
    openUserModal: PropTypes.func.isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.55072224622715,
      longitude: -46.63310979808336,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.resizeWindow);
    this.resizeWindow();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeWindow);
  }

  resizeWindow = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    this.props.openUserModal({ latitude, longitude });
  };

  render() {
    const { markers } = this.props;

    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOXTOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {markers.data.map(marker => (
          <Marker
            latitude={marker.latitude}
            longitude={marker.longitude}
            onClick={this.handleMapClick}
            captureClick
            key={marker.user.id}
          >
            <UserImage src={marker.user.avatar_url} alt={marker.user.login} />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  markers: state.markers,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
