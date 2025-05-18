import { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p } from '../Constants/data';

import { addDoc, collection } from "firebase/firestore";

import { db } from "./FirebaseApp";

export const addData = async (doc) => {
    try {
        const docRef = await addDoc(collection(db, "movies"), doc);
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

// addData(p);