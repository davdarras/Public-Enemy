import { NotificationType, NotifierPort } from "core/application/port";
import { useSnackbar } from "notistack";

/**
 * Global notifier
 * @returns notifier object use to notify users
 */
export const useNotifier = (): NotifierPort => {
  const { enqueueSnackbar } = useSnackbar();

  /**
   * info notification
   * @param message notify message
   */
  const info = (message: string): void => {
    notify({ message: message, type: "info" });
  };

  /**
   * warn notification
   * @param message notify message
   */
  const warn = (message: string): void => {
    notify({ message: message, type: "warning" });
  };

  /**
   * success notification
   * @param message notify message
   */
  const success = (message: string): void => {
    notify({ message: message, type: "success" });
  };

  /**
   * error notification
   * @param message notify message
   */
  const error = (message: string): void => {
    notify({ message: message, type: "error" });
  };

  /**
   * global notification method
   * @param message notify message
   */
  const notify = (notification: NotificationType): void => {
    enqueueSnackbar(notification.message, {
      variant: notification.type,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  };

  return { success, error, warn, info };
};

export default useNotifier;
