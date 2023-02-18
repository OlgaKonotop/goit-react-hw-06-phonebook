export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter,
//       });
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: todos(state.todos, action),
//       });
//     case TOGGLE_TODO:
//       return Object.assign({}, state, {
//         todos: todos(state.todos, action),
//       });
//     default:
//       return state;
//   }
// }
