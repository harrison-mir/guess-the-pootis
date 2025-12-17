import { Realtime } from 'ably';

const ably = new Realtime({ key: process.env.NEXT_PUBLIC_ABLY_KEY });

export const getChannel = (roomCode) => {
  return ably.channels.get(`room-${roomCode}`);
};

export const getAblyConnection = () => {
  return ably.connection;
};

export const disconnectAbly = () => {
  ably.close();
};