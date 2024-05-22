// For doing admin stuff
import {
  DocumentSnapshot,
  Firestore,
  QuerySnapshot,
  Timestamp,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { FirebaseStorage } from "firebase/storage";
import {
  AdministrativeConstructorConfig,
  AdministrativeConstructorConfigOptions,
  LuadDocumentObject,
  // LuadDocumentDocument,
} from "./interfaces/adminInterfaces";

class Administrative {
  // Initializing Firebase
  firestore: Firestore;
  firebaseStorage: FirebaseStorage;
  options: AdministrativeConstructorConfigOptions;
  constructor(config: AdministrativeConstructorConfig) {
    this.firestore = config.firestore;
    this.firebaseStorage = config.firebaseStorage;
  }

  // Setup and fetch posts
  luadDocuments: LuadDocuments;

  async init() {
    this.luadDocuments = new LuadDocuments(
      this.firestore,
      this.options.firestoreDocumentCollectionPath
    );
  }
}

class LuadDocuments {
  database: Firestore;
  documents: LuadDocument[];
  path: string;
  constructor(database: Firestore, path: string) {
    this.database = database;
  }

  async updateDocuments() {
    const documentSnapshots = await getDocs(
      collection(this.database, this.path)
    );
    const LuadDocumentClasses = documentSnapshots.docs.map((doc) =>
      this.toLuadDocumentClass(doc)
    );
  }

  toLuadDocumentClass(documentSnapshot: DocumentSnapshot) {
    const LuadDocumentInstance = new LuadDocument(
      this.database,
      documentSnapshot.id,
      documentSnapshot.data()!
    );
    return LuadDocumentInstance;
  }
}

class LuadDocument {
  head?: {
    title?: string;
    author?: string;
    creationDate?: [number, string, string, string];
    creationDateRaw?: Timestamp;
    lastModified?: [number, string, string, string];
    lastModifiedRaw?: Timestamp;
    headerImage?: {
      large?: string;
      largeFullPath?: string;
      medium?: string;
      mediumFullPath?: string;
      small?: string;
      smallFullPath?: string;
      tiny?: string;
      tinyFullPath?: string;
    };
    meta?: {
      category?: string[];
    };
  };
  body?: string;
  id: string;
  database: Firestore;

  // TODO FIX THIS PROPERTY, NOT DONE YET
  snapshot: DocumentSnapshot;

  constructor(database: Firestore, id: string, data: LuadDocumentObject) {
    this.id = id;
    this.body = data.body;
    this.head = data.head;
    this.database = database;
  }

  delete() {
    return deleteDoc(doc(this.database, this.snapshot.ref.path));
  }
}

export { Administrative, LuadDocument };
