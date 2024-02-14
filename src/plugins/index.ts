import mitt, { Emitter } from 'mitt';
import { AppEvent } from './constants';
export * from './constants';

type EmitterEvent = {
    [AppEvent.REMOVE_CANVAS]: void;
    [AppEvent.UNDO_DRAW]: void;
};

export type CustomEmitter = Emitter<EmitterEvent>;

export const emitter: CustomEmitter = mitt<EmitterEvent>();
