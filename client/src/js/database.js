// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
 openDB('conatcts',1,{
    upgrade(db) {
        if (db.objectStoreNames.contains('conatcts')) {
          console.log('conatcts database already exists');
          return;
        }
        db.createObjectStore('conatcts', { keyPath: 'id', autoIncrement: true });
        console.log('conatcts database created');
      },
 })
};


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    console.log('Post to the database');
    const contactsDb = await openDB('conatcts', 1);
    const tx = contactsDb.transaction('conatcts', 'readwrite');
    const store = tx.objectStore('conatcts');
    const request = store.add({ name, home, cell, email });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
};

// TODO: Complete the getDb() function below:
export const getDb = async (id) => {
  console.log('GET from the database');
  const contactsDb = await openDB('conatcts', 1);
  const tx = contactsDb.transaction('conatcts', 'readonly');
  const store = tx.objectStore('conatcts');
  const request = store.get(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  console.log('DELETE from the database', id);
  const contactsDb = await openDB('conatcts', 1);
  const tx = contactsDb.transaction('conatcts', 'readwrite');
  const store = tx.objectStore('conatcts');
  const request = store.delete(id);
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
