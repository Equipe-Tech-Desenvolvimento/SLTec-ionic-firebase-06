// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // 2.1) Altere os dados abaixo, conforme seu aplicativo do Firebase
  firebase: {
    apiKey: "AIzaSyAQPzyyQbhgJXsLYCAj37JXQLsjvaCfgoU",
    authDomain: "ecolog-dfa6c.firebaseapp.com",
    databaseURL: "https://ecolog-dfa6c.firebaseio.com",
    projectId: "ecolog-dfa6c",
    storageBucket: "ecolog-dfa6c.appspot.com",
    messagingSenderId: "766718764122",
    appId: "1:766718764122:web:cdbf39d1317c22886f2463",
    measurementId: "G-F3366FKDPM"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
