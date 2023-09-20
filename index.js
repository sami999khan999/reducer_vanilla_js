"use-strict";

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Redux is an open-source JavaScript library that is commonly used for managing the state of web applications in a predictable and centralized manner. It is often used in conjunction with libraries like React for building user interfaces, although it can be used with other frameworks or libraries as well. Redux was inspired by the Flux architecture, and it provides a way to manage the state of an application by maintaining a single global "store" that holds the entire application's state. //

//============================================================================================================================================//

// // 1. Single Source of Truth: In Redux, the application's entire state is stored in a single JavaScript object called the "store." This makes it easy to see and understand the current state of the application. //

// // 2. State is Read-Only: In Redux, you cannot directly modify the state. Instead, you dispatch actions, which are plain JavaScript objects describing what happened. Reducer functions then specify how the state should change in response to these actions, returning a new state. //

// // 3. Changes are Made with Pure Functions: Reducers are pure functions, which means they produce the same output for the same input and have no side effects. This predictability is crucial for debugging and testing. //

// // 4. Unidirectional Data Flow: Data flows in a single direction in Redux: from the view (or user interface) to the store and back to the view. This helps maintain a clear and predictable data flow. //

// // 5. Middleware: Redux allows you to use middleware to add custom logic, such as logging or asynchronous actions, between the dispatching of an action and the point it reaches a reducer. //

// // 6. Time Travel Debugging: Because Redux maintains a history of actions and states, it's possible to implement time travel debugging, which allows developers to step backward and forward through an application's state changes for easier debugging. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // Example-1

// const redux = require("redux");
// const createStore = redux.createStore;

// const BUY_PASTA = "BUT_PASTA";

// function buyPasta() {
//   return {
//     type: BUY_PASTA,
//     payload: 20,
//   };
// }

// const initialState = {
//   numOfPasta: 20,
//   numOfPezza: 10,
// };

// const pastaReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_PASTA:
//       return {
//         ...state,
//         numOfPasta: state.numOfPasta - 1,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(pastaReducer);

// console.log("INITIAL STATE:", store.getState());

// // In Redux, subscribe and unsubscribe are methods provided by the Redux store to manage the notification of changes to the state. They are used to listen for state changes and to stop listening when necessary. //

// const unsubscribe = store.subscribe(() =>
//   console.log("UPDATED STATE:", store.getState())
// );

// store.dispatch(buyPasta());
// store.dispatch(buyPasta());
// store.dispatch(buyPasta());

// unsubscribe();

//============================================================================================================================================//

// // Example-2

// const redux = require("redux");
// const createStore = redux.createStore;

// const buYCar = () => {
//   return {
//     type: "BUY_CAR",
//     dispatch: 2,
//   };
// };

// const initialState = {
//   numOfCar: 100,
//   numOTruck: 20,
// };

// const reducre = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUY_CAR":
//       return {
//         ...state,
//         numOfCar: state.numOfCar - action.dispatch,
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducre);

// console.log("INITIAL STATE", store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log("UPDATED STATE", store.getState());
// });

// store.dispatch(buYCar());
// store.dispatch(buYCar());
// store.dispatch(buYCar());

// unsubscribe();

//============================================================================================================================================//

// // Example-3

// const redux = require("redux");
// const createStore = redux.createStore;

// const buyFrout = () => {
//   return {
//     type: "BUY_MANGO",
//     dispatch: 50,
//   };
// };

// const initialState = {
//   numOfMango: 100,
//   numOfOrange: 50,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUY_MANGO":
//       return {
//         ...state,
//         numOfMango: state.numOfMango - action.dispatch,
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// console.log("INITIAL STATE", store.getState());

// const unsubscribe = store.subscribe(() => {
//   console.log("UPDATED STATE", store.getState());
// });

// store.dispatch(buyFrout());
// store.dispatch(buyFrout());
// store.dispatch(buyFrout());

// unsubscribe();

//============================================================================================================================================//

// // Example-4

const redux = require("redux");
const createStore = redux.createStore;
const combineReducres = redux.combineReducers;

const BUY_FOOTBALL = "BUY_FOOTBALL";

const buyFootball = (qty) => {
  return {
    type: BUY_FOOTBALL,
    quantity: qty,
  };
};

const reStockFootball = (qty) => {
  return {
    type: "RESTOCK_FOOTBALL",
    quantity: qty,
  };
};

const buyShues = (qty) => {
  return {
    type: "BUY_SHUE",
    quantity: qty,
  };
};

const reStockShue = (qty) => {
  return {
    type: "RESTOCK_SHUE",
    quantity: qty,
  };
};

const initialState = {
  numOfFlltball: 20,
  numOfShues: 10,
};

const footbaallReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_FOOTBALL":
      return {
        ...state,
        numOfFlltball: state.numOfFlltball - action.quantity,
      };

    case "RESTOCK_FOOTBALL":
      return {
        ...state,
        numOfFlltball: state.numOfFlltball + action.quantity,
      };

    default:
      return state;
  }
};

const shueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_SHUE":
      return {
        ...state,
        numOfShues: state.numOfShues - action.quantity,
      };

    case "RESTOCK_SHUE":
      return {
        ...state,
        numOfShues: state.numOfShues + action.quantity,
      };

    default:
      return state;
  }
};

const maltipolReducers = combineReducres({
  football: footbaallReducer,
  shue: shueReducer,
});

const store = createStore(maltipolReducers);

console.log("INITIAL STATE:", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("UPDATED STATE", store.getState());
});

store.dispatch(buyFootball(5));
store.dispatch(reStockFootball(10));

store.dispatch(buyShues(1));
store.dispatch(reStockShue(5));

unsubscribe();
