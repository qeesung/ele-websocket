import {
  createStore,
  Store,
  compose,
  StoreEnhancer
} from 'redux';

import {WebConnectionReducer, WebSocketConnectionState} from './model/ws-connection/ws-connection.reducer';
import {OpaqueToken} from '@angular/core';

const devTools: StoreEnhancer<WebSocketConnectionState> =
  window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

export function createAppStore(): Store<WebSocketConnectionState> {
  return createStore<WebSocketConnectionState>(
    WebConnectionReducer,
    compose(devTools)
  );
}

const AppStore: OpaqueToken = new OpaqueToken('SomeToken');

export const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
];
