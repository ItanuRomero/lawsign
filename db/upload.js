import { nanoid } from 'nanoid';

export async function findSubUserById(db, userId) {
  return db.collection('subUsers').findOne({
    _id: userId,
  }).then((user) => user || null);
}

export async function findSubUserByEmail(db, email) {
  return db.collection('subUsers').findOne({
    email,
  }).then((user) => user || null);
}

export async function updateSubUserById(db, id, update) {
  return db.collection('subUsers').findOneAndUpdate(
    { _id: id },
    { $set: update },
    { returnOriginal: false },
  ).then(({ value }) => value);
}

export async function insertSubUser(db, {
  email, password, bio = '', name, profilePicture,
}) {
  return db
    .collection('subUsers')
    .insertOne({
      _id: nanoid(12),
      emailVerified: false,
      profilePicture,
      email,
      password,
      name,
      hash,
      link_as3,
    })
    .then(({ ops }) => ops[0]);
}
