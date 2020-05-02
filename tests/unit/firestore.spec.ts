import CharData from "@/types/CharData";

const fs = require("fs");
const testing = require("@firebase/testing");

const rules = fs.readFileSync("firestore.rules", "utf8");
const projectId = "iaia-app";

describe("FireStore", () => {
  beforeAll(async () => {
    await testing.loadFirestoreRules({ projectId, rules });
  });
  afterEach(async () => {
    await testing.clearFirestoreData({ projectId });
  });
  afterAll(async () => {
    await Promise.all(testing.apps().map((app: any) => app.delete()));
  });

  it("can add a character", () => {
    const auth = { uid: "Alice", email: "alice@gmail.com" };
    const db = testing.initializeTestApp({ projectId, auth }).firestore();
    const data: CharData = { profile: { name: "Taro" } };
    testing.assertSucceeds(db.collection("characters").add(data));
  });
});
