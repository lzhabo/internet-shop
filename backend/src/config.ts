import path from "path";
import { config } from "dotenv";
import { loadVar } from "./utils";

config({ path: path.join(__dirname, "../.env") });

export const mongoUrl = loadVar("MONGO_URL");
export const port = loadVar("PORT", true);
export const googleServiceAccount = {
  type: loadVar("TYPE"),
  projectId: loadVar("PROJECT_ID"),
  privateKeyId: loadVar("PRIVATE_KEY_ID"),
  privateKey: loadVar("PRIVATE_KEY"),
  clientEmail: loadVar("CLIENT_EMAIL"),
  clientId: loadVar("CLIENT_ID"),
  authUri: loadVar("AUTH_URI"),
  tokenUri: loadVar("TOKEN_URI"),
  authProviderX509CertUrl: loadVar("AUTH_PROVIDER_X509_CERT_URL"),
  clientX509CertUrl: loadVar("CLIENT_X509_CERT_URL"),
};
export const googleStorageBucket = loadVar("STORAGE_BUCKET");
export const firebaseDatabaseUrl = loadVar("DATABASE_URL");
