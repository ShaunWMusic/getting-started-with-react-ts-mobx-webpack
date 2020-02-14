import { observable } from "mobx";
import { createContext } from 'react';

class CounterStore {
  @observable  public counter: number = 0;
}

export const CounterStoreContext = createContext(new CounterStore());


// props to Ben Awad for creating this video -> https://www.youtube.com/watch?v=oQiMXRsO4o4