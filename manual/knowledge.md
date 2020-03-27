# Knowledge

## React で Netlify の環境変数を利用する方法

Netlify にはデプロイ環境における環境変数を設定する機能がある。 [Settings > Build & Deploy > Enviroment]

アクセストークンのような git リポジトリに置きたくないデータを登録しておくために使うことができる。

ただし、あくまでもシェル変数なので、参照できるのはビルドスクリプトだけで、 React アプリのコンポーネントからはアクセスできない。 React のコード中から process.env でアクセスできるようにするためには、改めて React アプリに取り込む仕掛けが必要になる。

一つ目は、ビルドコマンドの中に環境変数を含める方法。

```sh
% REACT_APP_TOKEN=$NETLIFY_APP_TOKEN yarn build
```

これで Netlify に登録した変数 NETLIFY_APP_TOKEN が process.env.REACT_APP_TOKEN でアクセスできるようになる。

二つ目は、 .env の中身にシェル変数を入れる方法。

```sh
# .env
REACT_APP_TOKEN=$NETLIFY_TOKEN
```

React アプリの環境設定として .env を使うのは一般的だが、シェル変数も展開してくれるので、 Netlify の環境変数が React アプリ内に取り込まれるようになるのだ。
