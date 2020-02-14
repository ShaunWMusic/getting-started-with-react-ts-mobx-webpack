import { observer } from "mobx-react"
import { useContext } from "react"
import { CounterStoreContext } from "./CounterStore"
import React from "react"

export const CounterComponent = observer(() => {
  const counterStore = useContext(CounterStoreContext)
  return (
    <>
      <div>
        <h1>{counterStore.counter}</h1>
      </div>
      <div>
        <h1>Click this button to increment by 1</h1>
        <button onClick={() => counterStore.counter++}>Increase</button>
      </div>
      <div>
        <h1>Click this button to increment by 1</h1>
        <button onClick={() => counterStore.counter--}>Decrease</button>
      </div>
    </>
  );
});