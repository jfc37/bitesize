import * as functions from 'firebase-functions';
import { auth } from './utils';

export const setSuperUserClaims = functions
  .region('australia-southeast1')
  .https.onCall(setSuperUserClaimsFn);

export async function setSuperUserClaimsFn() {
  await auth.setCustomUserClaims('KV3LWupuh8RrKmk1hJx9DQsQjM02', {
    admin: true,
  });
}
