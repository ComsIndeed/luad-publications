import { Firestore, Timestamp } from "firebase/firestore";
import { FirebaseStorage } from "firebase/storage";

export interface AdministrativeConstructorConfig {
  firestore: Firestore;
  firebaseStorage: FirebaseStorage;
  options: AdministrativeConstructorConfigOptions;
}

export interface AdministrativeConstructorConfigOptions {
  firestoreDocumentCollectionPath: string;
}

export interface LuadDocumentObject {
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
}
