export const incplayer1 = () => async (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: "INC_PLAYER1_SCORE",
    });
  }, 2000);
};

export const decplayer1 = () => async (dispatch) =>
  dispatch({
    type: "DEC_PLAYER1_SCORE",
  });

export const incplayer2 = () => async (dispatch) =>
  dispatch({
    type: "INC_PLAYER2_SCORE",
  });

export const decplayer2 = () => async (dispatch) =>
  dispatch({
    type: "DEC_PLAYER2_SCORE",
  });

export const fetchUser = () => async (dispatch) => {
  dispatch({
    type: "FETCH_DATA_START",
  });
  try {
    const res = await fetch("https://jsonplaceholderbhxs.typicode.com/users");
    const users = await res.json();
    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: users,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_DATA_FAIL",
      payload: "Failed to fetch users!",
    });
  }
};
