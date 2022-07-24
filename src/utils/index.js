import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

export const signInWithUserCredentials = async (auth, email, password) => {
  try {
    const userCreds = await signInWithEmailAndPassword(auth, email, password);
    console.log({ userCreds });
    return userCreds.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log({ errorCode, errorMessage });
  }
};

export const signOutUser = async (auth) => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log({ errorCode, errorMessage });
  }
};

/* export const monitorAuthState = (auth) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      return {
        shouldShowHomePage: true,
      };
    }
    return {
      shouldShowHomePage: false,
    };
  });
};
 */
