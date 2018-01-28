import Dexie from 'dexie'

const db = new Dexie('BitsybitsSpa');

db.version(2).stores({
  devices: "&hash, name"
});

db.open().catch(function(error) {
  console.log('Uh oh : ' + error);
});

export default db;