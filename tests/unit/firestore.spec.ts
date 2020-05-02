import CharData from "@/types/CharData";

const fs = require("fs");
const testing = require("@firebase/testing");

const rules = fs.readFileSync("firestore.rules", "utf8");
const projectId = "iaia-app";

describe("FireStore rules", () => {
  beforeAll(async () => {
    await testing.loadFirestoreRules({ projectId, rules });
  });
  afterEach(async () => {
    await testing.clearFirestoreData({ projectId });
  });
  afterAll(async () => {
    await Promise.all(testing.apps().map((app: any) => app.delete()));
  });

  function initDB(auth: { uid: string; email: string } | null) {
    return testing.initializeTestApp({ projectId, auth }).firestore();
  }

  it("should be unable to add character if doe not authorized", async () => {
    const db = initDB(null);
    await testing.assertFails(
      db.collection("characters").add({ profile: { name: "Taro" } })
    );
  });

  it("should be unable to add someone else's character", async () => {
    const db = initDB({ uid: "alice", email: "alice@example.com" });
    await testing.assertFails(
      db.collection("characters").add({ profile: { name: "Taro" } })
    );
  });

  it("should be enable to add my character", async () => {
    const db = initDB({ uid: "alice", email: "alice@example.com" });
    await testing.assertSucceeds(
      db.collection("characters").add({ userId: "alice" })
    );
  });
});
