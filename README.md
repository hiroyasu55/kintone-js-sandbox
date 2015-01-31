kintone JavaScript sandbox
===================

### Nodeのインストール

[Node.js](http://nodejs.org/)をインストールしておく必要がある

#### Mac

``` {.bash}
  brew install node
```

brewを使っていない場合は、[これ](http://qiita.com/is0me/items/475fdbc4d770534f9ef1)とかを参考にインストールしてください

#### Windows

[これ](http://qiita.com/roana0229/items/29232508e71559d0fd5f)とかを参考にインストールしてください
普通に、[本家](http://nodejs.org/)からパッケージをダウンロードしてインストールしてもいいです


### 依存ライブラリのインストール

依存ライブラリは npm を用いて管理されている.

``` {.bash}
  npm install
```

以上で依存ライブラリがインストールされる。


### JavaScriptやSASSのビルド

Gulp タスクが幾つか用意されている.

#### ビルド

ビルドするためには

``` {.bash}
  npm run build
```

を実行する. これを実行する前に `npm install` を行って依存ライブラリ
が正しくインストールしておく必要がある.

ビルド元ファイルは `src` 以下にある. ビルド後のファイルは基本的
に `web` 以下に出力される.

#### Watch

開発時に, ファイルの変更を検知して, ビルド + ライブリロードなどといっ
たことを自動的に行ってくれるタスクが用意されている.

監視プロセスを立ち上げるためには以下のコマンドを実行する.

``` {.bash}
  npm run watch
```

このコマンドを実行すると, ブラウザが開きプロジェクトのトップページが表
示される.

ファイルの変更の監視対象は現在のところは `web` 以下である.

###


### kintone JavaScript sandboxの利用例

1.Repositoryをfork
2.Repository名をプロジェクトの名前にrename
3.ローカルにgit clone
4.適当に開発
5.git push
