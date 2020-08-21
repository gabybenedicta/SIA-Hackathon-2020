import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { Button, Platform, StyleSheet, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

const useProxy = Platform.select({ web: false, default: true });

export default function App() {
  // Endpoint
  const discovery = useAutoDiscovery('https://dev-976155.okta.com/oauth2/default');
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

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync({ useProxy });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
})