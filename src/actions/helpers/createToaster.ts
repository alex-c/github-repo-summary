import { Toaster, Position } from '@blueprintjs/core';

export const createToaster = () =>
  Toaster.create({
    className: 'error-toaster',
    position: Position.TOP_RIGHT,
  });
