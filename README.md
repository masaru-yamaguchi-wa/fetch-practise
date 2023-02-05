# fetch-practise

localでちょっとしたアプリケーションを作ってみたく
jsonデータへの読み込み/書き込みを実装したかったが書き込みができなかった

## できたこと
- jsonをimportして読み込み
- fetchでgetして読み込み

## できなかったこと
postするなりでjsonデータを更新すること

## はまったこと
getの際に一つ目のthenのreturnを JSON.parse(response)にしてたら
変換してくれずここにめっちゃ時間使った

## やったこと
- fetch第一引数でjsonデータを指定するためにパスを色々試す
  - Devtoolの「ソース」にそもそも出てこない→読み取りは何でできる？
 
 ## どうするか
 - [json Server](https://www.npmjs.com/package/json-server)でlocalhostにサーバーを立ち上げるとできた的な[記事](https://www.i-ryo.com/entry/2021/02/20/062444)は見たが試してはいない
- fetchで出来ると勝手に思っている　パスの指定が悪い？
- localhostのソースに出現しないこともよくわからん
