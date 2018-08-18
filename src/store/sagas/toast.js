import { toast } from 'react-toastify';

export function showToast(action) {
  const { type, message } = action.payload;

  toast(message, {
    type: type.split('/')[1].toLowerCase(),
  });
}
