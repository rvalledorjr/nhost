import { NhostClient, NhostProvider } from '@nhost/react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const client = new NhostClient({
  subdomain: 'localhost'
})

export default function App() {
  return (
    <NhostProvider nhost={client}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar />
      </View>
    </NhostProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
