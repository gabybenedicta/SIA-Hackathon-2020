import React from 'react';
import { Button, Platform, Text, View } from 'react-native';
import {
  useAutoDiscovery,
  useAuthRequest,
  makeRedirectUri,
} from 'expo-auth-session';
import { maybeCompleteAuthSession } from 'expo-web-browser';

if (Platform.OS === 'web') {
  maybeCompleteAuthSession();
}

const useProxy = true;

export default function App() {
  // Endpoint
  const discovery = useAutoDiscovery(
    'https://dev-976155.okta.com/oauth2/default'
  );

  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '0oara8r34BlKWfClc4x6',
      scopes: ['openid', 'profile'],
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'https://auth.expo.io/@anonymous/SIAFE2020-62285ed9-6220-4cd4-8d47-e2bff0e80297',
        useProxy,
      }),
    },
    discovery
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        title='Login!'
        disabled={!request}
        onPress={() => promptAsync({ useProxy })}
      />
      {response && <Text>{JSON.stringify(response, null, 2)}</Text>}
    </View>
  );
}