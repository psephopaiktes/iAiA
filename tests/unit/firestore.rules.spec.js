import firebase from "../../src/firebase";
import { assertSucceeds, loadFirestoreRules } from "@firebase/testing";
import { readFileSync } from "fs";

describe("Firestore", () => {
  loadFirestoreRules({
    projectId: "iaia-app",
    rules: readFileSync("../../firestore.rules")
  });
  const db = firebase.firestore();
  it("can add character", () => {
    const data = { userId: "123" };
    const character = db.collection("characters");
    assertSucceeds(character.add(data));
  });
});
