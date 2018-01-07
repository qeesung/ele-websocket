import {Action} from 'redux';
import * as WebSocketConnectionActions from './ws-connection.actions';
import {WebSocketConnection} from './ws-connection.model';
import {ConnectionStatus} from '../../common/connection-status';

export interface WebSocketConnectionState {
  connection: WebSocketConnection,
}

const initialWebSocketConnectionState: WebSocketConnectionState = {
  connection: null,
};

export const WebConnectionReducer = function (state: WebSocketConnectionState = initialWebSocketConnectionState,
                                              action: Action): WebSocketConnectionState {
  switch (action.type) {
    case WebSocketConnectionActions.ESTABLISH_CONNECTION:
      const newConnection = (<WebSocketConnectionActions.EstablishConnectionAction>action).wsConnection;
      return {
        connection: newConnection
      };

    case WebSocketConnectionActions.RELEASE_CONNECTION:
      const oldConnection = (<WebSocketConnectionActions.ReleaseConnectionAction>action).wsConnection;
      const connection = state.connection;

      if (connection !== null && oldConnection.id !== connection.id) {
        return state;
      }
      const releasedConnection = {...connection};
      releasedConnection.status = ConnectionStatus.DISCONNECTED;
      return {
        connection: releasedConnection
      };
    default:
      return state;
  }
};
