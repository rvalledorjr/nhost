import { NhostClient, NhostProvider } from '@nhost/react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { TodoList } from './components/TodoList'

const client = new NhostClient({
  subdomain: 'localhost'
})

export default function App() {
  return (
    <NhostProvider nhost={client}>
      <View style={styles.container}>
        <TodoList />
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
