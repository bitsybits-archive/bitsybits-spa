import Dexie from 'dexie'

const db = new Dexie('BitsybitsSpa');

db.version(1).stores({
  devices: "++id, name, &hash"
});

db.open().catch(function(error) {
  console.log('Uh oh : ' + error);
});

export default db;