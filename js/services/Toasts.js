import { Toast } from 'native-base';

const TOAST_DURATION = 1000;

export const showToast = (text, type = '') => {
  Toast.show({
    text,
    type,
    duration: TOAST_DURATION,
  });
};
