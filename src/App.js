import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './state/counter/counterSlice';
import { todoUpdate } from './state/todo/todo'
function App() {
  return (
    <div className="App container my-5">
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="">
      <h1>
        Counter
      </h1>
      <strong>
        {count}
      </strong>

      <button className='btn btn-primary' onClick={() => dispatch(increment())}>Click +</button>

      <TodoList></TodoList>

      <PersonalInfo></PersonalInfo>

    </div>
  )
}

const TodoList = () => {
  const todoView = useSelector(state => state.todo.value);
  const dispatch = useDispatch()
  const textValue = useRef()

  console.log(todoView)
  const createAction = (event) => {
    event.preventDefault();
    dispatch(todoUpdate(textValue.current.value));
    event.target.reset();
  }
  return (
    <div className="">
      <h1>
        Todo List
      </h1>
      <form action="" onSubmit={(event) => createAction(event)}>
        <input className='form-control' type="text" ref={textValue} />
        <button className='btn btn-primary my-4' type='submit'> Create Todo</button>
      </form>

      {
        todoView !== [] && (
          <ul>
            {todoView.map(v => {
              return (
                <li key={v}>
                  {v}
                </li>
              )
            })}
          </ul>
        )
      }
    </div>
  )
}

const PersonalInfo = () => {
  const username = useRef();
  const email = useRef();
  const country = useRef();
  const info_view = useSelector(state=> state.personalInfo.value);
  const dispatch = useDispatch();

  const personalInfoSubmit = event=> {
    event.preventDefault();
    // let infoData = {
    //   username: username.current.value,
    //   email: email.current.value,
    //   country: country.current.value
    // }
    dispatch('b')
  }

  //console.log(info_view)
  return (
    <div className="">
      <h1>
        Personal Information
      </h1>

      <form action="" onSubmit={event=> personalInfoSubmit(event)}>

        <div className="input-group d-block mb-3">
          <label htmlFor="" className='form-label d-block mb-2'>Username</label>
          <input ref={username} className='form-control w-100' type="text" />
        </div>

        <div className="input-group d-block mb-3">
          <label htmlFor="" className='form-label d-block mb-2'>Email</label>
          <input ref={email} className='form-control w-100' type="email" name="" id="" />
        </div>
        <div className="input-group d-block mb-3">
          <label htmlFor="" className='form-label d-block mb-2'>Country</label>
          <input ref={country} className='form-control w-100' type="text" />
        </div>

        <div className="input-group">
          <button className='btn btn-primary' type="submit">Submit</button>
        </div>
      </form>

    </div>
  )
}