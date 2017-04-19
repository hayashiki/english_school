# English School HP

# your need
- firebase account
- yarn
- Node.js

# firebase setup

```
yarn global add firebase-tools
cp .firebaserc.sample .firebaserc
cp config/.firebaserc.sample .firebaserc
```

``` coffeescript:.firebaserc
{
  "projects": {
    "default": "your-projedt-id"
  }
}
```

``` JavaScript:src/firebase/config.js
export const firebaseConfig = {
  apiKey: "your-key",
  authDomain: "your-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage",
  messagingSenderId: "your-sender-id"
};
```


# start

``yarn start``

# setup
### refs
* [FirebaseでWebサイトを無料でサクッと公開してみる - Qiita](http://qiita.com/Ijoru/items/5b27f1c32df2222514fb)
* [functions-samples/email-confirmation · firebase/functions-samples](https://github.com/firebase/functions-samples/tree/032044cda7c8e3d8c3b611ea17ed99a3cc369b15/email-confirmation)

### procedure
firebase consoleからwebappに追加を押し、表示されるfirebaseのconfig関連のkeyをfirebase/config.jsに作る

### reploy
```
yarn build
firebase deploy
```


