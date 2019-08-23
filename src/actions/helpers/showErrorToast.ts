import { IconName, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { createToaster } from './createToaster';

const errorToaster = createToaster();

const showErrorToast = (message: string, icon: IconName = IconNames.ERROR) => {
  errorToaster.show({
    message,
    icon,
    intent: Intent.DANGER,
    timeout: 1500,
  });
};

export default showErrorToast;
