import {
  Action,
  ActionCreator
} from 'redux';
import {WebSocketConnection} from './ws-connection.model';
import {Message} from '../message/message.model';

export const ESTABLISH_CONNECTION = '[Connection] Establish';
export const RELEASE_CONNECTION = '[Connection] Release';
export const ADD_MESSAGE = '[Connection] Add Message';

export interface EstablishConnectionAction extends Action {
  wsConnection: WebSocketConnection
}

export const establishConnection: ActionCreator<EstablishConnectionAction> = (wsConnection: WebSocketConnection) => ({
  type: ESTABLISH_CONNECTION,
  wsConnection: wsConnection
});


export interface ReleaseConnectionAction extends Action {
  wsConnection: WebSocketConnection
}

export const releaseConnection: ActionCreator<ReleaseConnectionAction> = (wsConnection: WebSocketConnection) => ({
  type: RELEASE_CONNECTION,
  wsConnection: wsConnection
});

export interface AddMessageAction extends Action {
  wsConnection: WebSocketConnection,
  message: Message
}

export const addMessage: ActionCreator<AddMessageAction> =
  (wsConnection: WebSocketConnection, messageArgs: Message): AddMessageAction => {
    const defaults = {
      time: new Date(),
      isReceived: false ,
      wsConnection: wsConnection
    };
    const message: Message = Object.assign({}, defaults, messageArgs);

    return {
      type: ADD_MESSAGE,
      wsConnection: wsConnection,
      message: message
    };
  };
