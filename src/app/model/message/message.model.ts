import {WebSocketConnection} from '../ws-connection/ws-connection.model';
export interface Message {
  data: string,
  length: number
  time?: Date,
  isReceived: boolean
  wsConnection?: WebSocketConnection
}
