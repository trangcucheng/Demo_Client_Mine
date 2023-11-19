/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';

export type WithChildrenProps<T = undefined> = T extends undefined
  ? {
      // eslint-disable-next-line prettier/prettier
      children?: ReactNode;
    }
  : T & {
      children?: ReactNode;
    };
