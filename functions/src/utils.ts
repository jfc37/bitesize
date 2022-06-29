import * as admin from 'firebase-admin';
import * as serviceAccount from './service-account.json';

console.error('MMMMMMMM', 'calling admin.initializeApp');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

export const auth = admin.auth();
export const firestore = admin.firestore();
export const storage = admin.storage();
