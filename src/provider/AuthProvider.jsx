import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  // Create User With Email and Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Logout
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Login User Using Email
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login With Google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // Update User Info
  const updateUserInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Get Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
        setUser(null);
      }
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authValue = {
    createUser,
    loginUser,
    userLogout,
    user,
    loading,
    updateUserInfo,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
