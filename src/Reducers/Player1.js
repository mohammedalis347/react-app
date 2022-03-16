const initialState = {
  name: "john",
  score: 80,
};

export default function Player1Reducer(state = initialState, action) {
  console.log(action);
  const { type } = action;
  switch (type) {
    case "INC_PLAYER1_SCORE":
      return { ...state, score: state.score + 1 };
    case "DEC_PLAYER1_SCORE":
      return { ...state, score: state.score - 1 };
    default:
      return state;
  }
}
