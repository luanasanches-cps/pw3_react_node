import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
 apiKey: "AIzaSyAbcFcy28g-YLWGg9Ls_xltarqNGokRpvU",
  authDomain: "miniblog-pauli.firebaseapp.com",
  projectId: "miniblog-pauli",
  storageBucket: "miniblog-pauli.appspot.com",
  messagingSenderId: "521500036510",
  appId: "1:521500036510:web:b2a7b6b41c01d03d0fda8f",
  measurementId: "G-00VGGC4PNE"
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db};