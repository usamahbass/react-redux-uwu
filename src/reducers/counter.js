const counterReducers = (state = 0, action) => {
  switch (action.type) {
    case "REFRESH":
      return (state = 0);
    case "HANDLETYPE":
      return (state = 1);
    case "PLUS":
      return (state = "+");
    default:
      return state;
  }
};

export default counterReducers;
