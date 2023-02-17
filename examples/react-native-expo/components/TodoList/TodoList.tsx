import { useNhostClient } from '@nhost/react'
import gql from 'graphql-tag'
import { useState } from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

interface Todo {
  id: string
  title: string
  done: boolean
}

const TODOS = gql`
  {
    todos {
      id
      title
    }
  }
`

export default function TodoList() {
  const [data, setData] = useState<Todo[]>([])
  const client = useNhostClient()

  async function fetchData() {
    try {
      const { data, error } = await client.graphql.request(TODOS, null, { useAxios: false })

      console.log(data, error)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {data && data.length === 0 && (
          <>
            <Text style={{ textAlign: 'center' }}>No todos</Text>
            <Button title="Fetch Data" onPress={fetchData} />
          </>
        )}
        <FlatList
          data={data}
          renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        />
      </View>
    </SafeAreaView>
  )
}
