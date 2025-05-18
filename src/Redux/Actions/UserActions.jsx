import { startAuth, successAuth } from '../Reducers/UserSlice';

export const LoginWithGoogle = (dispatch, user) => {
    try {
        dispatch(startAuth());
        dispatch(successAuth({ user: {
            username: user.displayName,
            photo: user.photoURL,
            email: user.email
        } }));
    } catch (error) {
        console.log(error);
    }
};