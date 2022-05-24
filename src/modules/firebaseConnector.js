import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "self-serve-flashcards.firebaseapp.com",
  databaseURL: "https://self-serve-flashcards-default-rtdb.firebaseio.com",
  projectId: "",
  storageBucket: "self-serve-flashcards.appspot.com",
  messagingSenderId: "",
  appId: ""
};

// TODO: This should be called once on app load
function initializeConnection(){
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Get a reference to the database service
  const database = getFirestore(app);
  return database
}

// This will become "getDeckByID" or similar
async function getFirstDeck(){
  const database = initializeConnection()

  const docRef = doc(database, "decks", "maMEfQKvyUhtNnSrBFv1");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const theDeck = docSnap.data()
    theDeck.id = docSnap.id
    console.log("Deck data to be returned:", theDeck)
    return theDeck
  } else {
    // doc.data() will be undefined in this case
    console.log("No such deck :(");
  }

}

async function getCardsFor(deck){
  // TODO: don't call this here it's ridiculous
  const database = initializeConnection()

  const cardSubcollectionRef = await getDocs(collection(database, "decks", deck.id, "cards"))
  // TODO: figure out how to error check here, .exits() doesn't work for cardSubcollectionRef

  // cardSubcollectionRef is not an array, so we can't use map
  let theCards = []
  cardSubcollectionRef.forEach(item => theCards.push(item.data()))
  console.log("Card data to be returned:", theCards);
  return theCards
}

export { getFirstDeck, getCardsFor }