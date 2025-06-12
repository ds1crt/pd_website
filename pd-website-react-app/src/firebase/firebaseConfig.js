import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, query, onSnapshot, serverTimestamp, Timestamp } from "firebase/firestore";

// --- Firebase Configuration ---
// This object reads the environment variables from your .env file.
// Vite requires the 'VITE_' prefix to expose these to your frontend code.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// --- Initialize Firebase Services ---
let db, auth;
let currentUserId = null;
const appIdentifier = import.meta.env.VITE_FIREBASE_APP_NAME_ID || 'default-react-app';
const reviewsCollectionPath = `artifacts/${appIdentifier}/public/data/reviews`;

try {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  console.log("Firebase initialized successfully with Project ID:", firebaseConfig.projectId);
} catch (error) {
  console.error("Firebase initialization error:", error);
  console.error("Please ensure your .env file is correctly set up and you have restarted the development server.");
}

// --- Reusable Functions ---

export const ensureAuth = () => {
  return new Promise((resolve, reject) => {
    if (!auth) return reject(new Error("Firebase Auth not initialized."));
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      unsubscribe(); // Prevent memory leaks
      if (user) {
        currentUserId = user.uid;
        resolve(user);
      } else {
        try {
          const anonUser = await signInAnonymously(auth);
          currentUserId = anonUser.user.uid;
          resolve(anonUser.user);
        } catch (e) {
          reject(e);
        }
      }
    }, reject);
  });
};

export const addReview = async (name, comment) => {
  if (!db) throw new Error("Firestore is not initialized.");
  if (!currentUserId) await ensureAuth();
  if (!currentUserId) throw new Error("Authentication failed.");
  return addDoc(collection(db, reviewsCollectionPath), {
    name, comment, userId: currentUserId, timestamp: serverTimestamp()
  });
};

export const getReviews = (callback, errorCallback) => {
  if (!db) {
    if (errorCallback) errorCallback(new Error("Firestore is not initialized."));
    return () => {}; // Return a no-op unsubscribe function
  }
  const q = query(collection(db, reviewsCollectionPath));
  return onSnapshot(q, (snapshot) => {
    const reviews = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    reviews.sort((a, b) => {
      const timeA = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(0);
      const timeB = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(0);
      return timeB - timeA;
    });
    callback(reviews);
  }, errorCallback);
};
