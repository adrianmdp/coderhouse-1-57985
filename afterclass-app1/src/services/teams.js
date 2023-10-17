import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

const getTeams = async () => {
  const db = getFirestore();
  const collref = collection(db, "teams");
  const snapshot = await getDocs(collref);
  return snapshot.docs.map((elem) => ({ id: elem.id, ...elem }));
};

const createTeam = async (data) => {
  const db = getFirestore();

  const collref = collection(db, "teams");

  await addDoc(collref, data);
};

export const teamServices = { createTeam, getTeams };
