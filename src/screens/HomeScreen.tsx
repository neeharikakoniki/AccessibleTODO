import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootState } from '../store/store';
import AddTodoInput from '../components/AddTodoInput';
import TodoItem from '../components/TodoItem';

const HomeScreen = () => {
  const todos = useSelector((state: RootState) => state.todos.items);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Accessible To-Do List</Text>
        <AddTodoInput />
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TodoItem id={item.id} title={item.title} completed={item.completed} />
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>No tasks yet. Add one!</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default HomeScreen;
