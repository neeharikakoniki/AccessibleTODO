import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim().length > 0) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <View style={styles.container} accessible={true}>
      <TextInput
        style={styles.input}
        placeholder="Add new task..."
        value={text}
        onChangeText={setText}
        allowFontScaling={true}
        accessibilityLabel="Add new task input"
        accessibilityHint="Enter task name here"
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAdd}
        accessibilityRole="button"
        accessibilityLabel="Add task"
        accessibilityHint="Adds your new task to the list"
      >
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', margin: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#C62828',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddTodoInput;
