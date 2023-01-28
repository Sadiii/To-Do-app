"use client";
import { useState } from "react";
import {
  Flex,
  Heading,
  Button,
  Input,
  Checkbox,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, DeleteIcon } from "@chakra-ui/icons";
export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formbackground = useColorModeValue("gray.100", "gray.700");
  let [todos, setTodo] = useState([
    { Activity: "Wake up Early", State: true },
    { Activity: "Drink Water", State: true },
    { Activity: "Hit the gym or Walk", State: false },
    { Activity: "Breakfast", State: true },
  ]);

  let [addtodo, setaddtodo] = useState("");

  function clickHandler(elem: any) {
    let newtodo = todos.map((todo) => {
      if (todo.Activity == elem.Activity) {
        todo.State = !todo.State;
      }
      return todo;
    });
    setTodo(newtodo);
  }

  function addtodoHandler() {
    let newtodo = { Activity: addtodo, State: false };
    setTodo([...todos, newtodo]);
  }
  function deleteHandler(elem: any) {
    console.log(todos);
    let newtodo = todos.filter((todo) => {
      if (todo.Activity == elem.Activity) return false;
      return true;
    });
    console.log(newtodo);
    setTodo(newtodo);
  }
  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          background={formbackground}
          padding={12}
          rounded={6}
        >
          <Button onClick={toggleColorMode} style={{ width: "fit-content" }}>
            {" "}
            {formbackground == "gray.100" ? <SunIcon /> : <MoonIcon />}
          </Button>
          <Heading padding={6}>To Do App!</Heading>

          <Stack direction="row" mb={3}>
            <Input
              placeholder=" Add new todo"
              focusBorderColor="teal.500"
              mb={3}
              onChange={(e) => {
                setaddtodo(e.target.value);
              }}
            />
            <Button
              onClick={addtodoHandler}
              mb={2}
              padding="5"
              colorScheme="teal"
            >
              {" "}
              Add todo
            </Button>
          </Stack>

          <Stack spacing={5} direction="column">
            {todos.map((todo) => {
              return (
                <>
                  <Stack direction="row">
                    <Checkbox
                      colorScheme={"green"}
                      defaultChecked={todo.State}
                      onChange={() => clickHandler(todo)}
                      key={todo.Activity}
                    >
                      {todo.Activity}
                    </Checkbox>
                    <Button size="sm" onClick={() => deleteHandler(todo)}>
                      <DeleteIcon />
                    </Button>
                  </Stack>
                </>
              );
            })}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
