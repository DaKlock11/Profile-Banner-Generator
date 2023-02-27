
export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  photo: '',
  birthday: '',
  occupation: '',
  city: '',
  isEntered: false,
  submitDisabled: true
}

export function reducer (state, action) {
  switch(action.type) {
    case 'ON_FIELD_CHANGE': {
      const { name, value } = action;
      return {
        ...state,
        [name]: value
      };
    }
    case 'ON_ENTERED': {
      return {
        ...state,
        isEntered: true
      }
    }
    default: {
      return state;
    }
  }
}
