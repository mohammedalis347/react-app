const initialData = {
  users: [],
  loading: false,
  error: null,
};

export default function usersReducer(state = initialData, action) {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "FETCH_DATA_FAIL":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "FETCH_DATA_START":
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
}
