// @flow

type MessageBase = {
  context: ?string,
  descr: string,
  end: number,
  endline: number,
  line: number,
  path: string,
  start: number,
};

export type MessageBlame = MessageBase & {
  type: 'Blame',
  loc: {
    source: string,
    type: 'SourceFile' | 'LibFile',
    start: {
      column: number,
      line: number,
      offset: number,
    },
    end: {
      column: number,
      line: number,
      offset: number,
    },
  },
};

export type MessageComment = MessageBase & { type: 'Comment' };

export type Message = MessageBlame | MessageComment;

export type FlowError = {
  kind: 'infer',
  level: 'error',
  message: Array<Message>, 
};

export type FlowResult = {
  errors: Array<FlowError>,
  flowVersion: string,
  passed: boolean,
};
