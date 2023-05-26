/*
 *
 *  Testing tools for invertase/react-native-firebase use only.
 *
 *  Copyright (C) 2018-present Invertase Limited <oss@invertase.io>
 *
 *  See License file for more information.
 */
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

export const testFunctionRemoteConfigUpdate = functions.https.onCall(data => {
  console.log(Date.now(), data);

  admin.initializeApp();
  const remoteConfig = admin.remoteConfig();

  return new Promise(function (resolve, reject) {
    remoteConfig
      .getTemplate()
      .then((template: any) => {
        console.log('received template: ' + JSON.stringify(template, null, 2));
        resolve('not implemented');
      })
      .catch((err: string) => {
        console.error('remoteConfig.getTemplate failure: ' + err);
        reject('not implemented');
      });
  });
});
