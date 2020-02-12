import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  // useEffect(() => {

  // });

  const addTodo = () => {
    let newTodo = text;
    let arr = todo;
    arr.push(newTodo);
    setTodo({ todo: arr });
    setText({ text: "" });
  }

  const deleteTodo = (t) => {
    let arr = todo;
    let pos = arr.indexOf(t);
    arr.splice(pos, 1);
    setTodo({ todo: arr });
  }

  const renderTodos = () => {
    return todo.length > 0 && todo.map(t => {
      return (
        <TouchableOpacity onPress={deleteTodo} key={t}>
          <Text style={styles.todo}> {t} </Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View style={styles.wholeStyle}>
      <View style={styles.viewStyle}>
        <Text style={styles.header}>TODO app</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <Button
          title="Add Todo"
          onPress={addTodo}
          disabled={!text}
        />
        <View style={{ marginTop: 100 }} />
        {renderTodos()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wholeStyle: {
    backgroundColor: "#0288D1",
    flex: 1
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  inputStyle: {
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    width: 300
  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  todo: {
    fontSize: 24,
    color: 'red'
  }
}
);
