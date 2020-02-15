import {createActions} from 'redux-actions';

export const {changeName, userRequest, userSuccess, userFailure} = createActions({
    CHANGE_NAME: (name) => ({name}),
    USER_REQUEST: () => ({}),
    USER_SUCCESS: (data) => (data),
    USER_FAILURE: (error) => (error),
});

export const loadUser = () => {
    return async (dispatch) => {
      try {
        dispatch(userRequest());
        const result = await fetch('/api/profile.json');
        await console.log("RESULT ", result.body);
        dispatch(userSuccess(await result.json()));
      }
      catch(e) {
        dispatch(userFailure(e))
      }
    }
  }