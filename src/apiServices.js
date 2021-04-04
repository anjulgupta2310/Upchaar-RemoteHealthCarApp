import {db} from './config';
export const submitUser = (Id,license,email,phone, name, password) => {
  return new Promise(function (resolve, reject) {
    let key;
    if (Id != null) {
      key = Id;
    } else {
      key = db().ref().push().key;
    }
    let dataToSave = {
      Id: key,
      license: license,
      email:email,
      phone:phone,
      name: name,
      password: password,
    };
    db()
      .ref('users/' + key)
      .update(dataToSave)
      .then((snapshot) => {
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
