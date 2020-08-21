// initial state
const initialState = {
  myObj: { myFavNum: 10 },
  myBool: false,
  myArr: [7, "hello", true, [1, 2, 3], { amIAnObj: true }],
  myStr: "I am a string"
};

// action types
const UPDATE_MYOBJ = "UPDATE_MYOBJ";
const UPDATE_MYBOOL = "UPDATE_MYBOOL";
const UPDATE_MYARR = "UPDATE_MYARR";
const UPDATE_MYSTR = "UPDATE_MYSTR";

// action creators
export function updateMyObj() {
  return {
    type: UPDATE_MYOBJ,
    payload: {}
  };
}

export function updateMyBool() {
  return {
    type: UPDATE_MYBOOL,
    payload: false
  };
}

export function updateMyArr() {
  return {
    type: UPDATE_MYARR,
    payload: []
  };
}

export function updateMyStr() {
  return {
    type: UPDATE_MYSTR,
    payload: {}
  };
}

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MYARR:
      return {
        ...state,
        myArr: action.payload
      };
    case UPDATE_MYBOOL:
      return {
        ...state,
        myArr: "I am an orange"
      };
    case UPDATE_MYSTR:
      return {
        ...state,
        myArr: action.payload
      };
    case UPDATE_MYOBJ:
      return {
        ...state,
        myArr: action.payload
      };
    default:
      return state;
  }
}
