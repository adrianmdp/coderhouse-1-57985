import {
  doc,
  getDoc,
  addDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

const getUser = async (userId) => {
  const db = getFirestore();
  const userRef = doc(db, "users", userId);
  const snapshot = await getDoc(userRef);

  if (snapshot.exists())
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
};

const getUsers = () => {
  // code
};

const addUser = async (data) => {
  // const data = {
  //   name: "Adrian",
  //   email: "asd@asd",
  //   password: "asdsdfsdf",
  //   country: "asd",
  // };

  const db = getFirestore();
  const userRef = collection(db, "users");
  const { id } = await addDoc(userRef, data);

  return id;
  // code
};

const updateUser = (id, data) => {
  // Code
};

const removeUser = () => {};

export const userServices = { getUser, getUsers, addUser, removeUser };
