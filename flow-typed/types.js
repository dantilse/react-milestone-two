// @flow

export type Image = {
  id: string,
  title: string,
  description: string,
  photographer: string,
  handle: string,
  country: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare module 'styled-components' {
  declare module.exports: any;
}
