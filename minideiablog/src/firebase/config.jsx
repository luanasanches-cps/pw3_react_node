import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCzvetyzpLnlV6-4duZfRuskmiDnEBcHMU",
  authDomain: "miniblog-icoma.firebaseapp.com",
  projectId: "miniblog-icoma",
  storageBucket: "miniblog-icoma.appspot.com",
  messagingSenderId: "643979843568",
  appId: "1:643979843568:web:94507c223cddc1cd20ef35",
  measurementId: "G-005V8EV8BX"
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db};