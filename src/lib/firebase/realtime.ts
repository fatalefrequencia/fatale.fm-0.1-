import { 
  getDatabase, 
  ref, 
  set, 
  get,
  push,
  update,
  remove,
  query,
  orderByChild,
  equalTo,
  onValue,
  off,
  DatabaseReference 
} from 'firebase/database';
import { app } from './config';

const db = getDatabase(app);

export const createRealtimeData = async <T>(
  path: string,
  data: T
): Promise<string> => {
  try {
    const newRef = push(ref(db, path));
    await set(newRef, data);
    return newRef.key as string;
  } catch (error) {
    throw error;
  }
};

export const updateRealtimeData = async <T>(
  path: string,
  data: Partial<T>
): Promise<void> => {
  try {
    await update(ref(db, path), data);
  } catch (error) {
    throw error;
  }
};

export const getRealtimeData = async <T>(path: string): Promise<T | null> => {
  try {
    const snapshot = await get(ref(db, path));
    return snapshot.exists() ? snapshot.val() as T : null;
  } catch (error) {
    throw error;
  }
};

export const deleteRealtimeData = async (path: string): Promise<void> => {
  try {
    await remove(ref(db, path));
  } catch (error) {
    throw error;
  }
};

export const subscribeToRealtimeData = <T>(
  path: string,
  callback: (data: T | null) => void
): DatabaseReference => {
  const reference = ref(db, path);
  onValue(reference, (snapshot) => {
    callback(snapshot.exists() ? snapshot.val() as T : null);
  });
  return reference;
};

export const unsubscribeFromRealtimeData = (reference: DatabaseReference): void => {
  off(reference);
};