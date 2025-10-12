import * as Notifications from 'expo-notifications';

type PushTokenResult = {
  token?: string;
  error?: string;
};

export const registerForPushNotificationsAsync = async (): Promise<PushTokenResult> => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return { error: 'Permissão de push negada' };
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  return { token };
};
