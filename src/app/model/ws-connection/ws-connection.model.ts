import {ConnectionStatus} from '../../common/connection-status';
import {Message} from '../message/message.model';

export interface WebSocketConnection {
  id: string,
  url: string,
  rawConnection: any
  status: ConnectionStatus,
  messages: Message[]
}
