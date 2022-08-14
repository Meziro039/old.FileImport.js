# 概要
JavaScriptファイルを一括読み込みするモジュールです。  
複数のファイルがある場合記述量が減り便利です。  

# 使い方

## HTML(利用者側)
`<head>`内に以下を記述してください。  
```
<script src="{/module/}FileImport.js"></script>
<script src="{/module/Run.js}"></script>
```
`{}`内はそれぞれ合わせた値を入力してください。  

## JS(作成者側)
run.js(任意名)を作成して以下のような記述をして下さい。  
```
FileImport.Load([
    "module/hoge.js",
    "../module/fuga.js",
    "http://example.com",
    "//example.com"
])
```
<!-- head内に記述する。 -->
# 動作確認
- Brave(PC)
- Chrome(PC)
- Safari(iOS)

# 更新履歴

## Ver0.0.1
2022-08-14  

<!--
# 製作時間

## FileImport.js
Ver0.0.1
2022-08-14 200min
-->
