// Variable
let FileImport // Instance

// Class
class FILEIMPORT{
    constructor(){
        this.FileList = []; // 読み込むファイルの一覧
        this.LoadList = []; // 読み込ませるファイル一覧(絶対パス)
        this.RunLevel = ""; // Run.jsの階層位置
        this.Script = ""; // Scriptタグの処理用
        this.UpTemp = ""; // 上層移動処理のTemp
    }
    
    Load(FL){
        // 初期化
        this.FileList = [];
        this.LoadList = [];
        this.RunLevel = "";
        this.Script = "";
        this.UpTemp = "";

        // 変数
        this.FileList = FL;
        
        // <script>のsrc(run.js)を取得
        this.Script = document.getElementsByTagName("script");

        if (this.Script[this.Script.length - 1].src){
            // srcあり
            this.RunLevel = this.Script[this.Script.length - 1].src.slice(0, this.Script[this.Script.length - 1].src.lastIndexOf("/"));
        }
        else {
            // srcなし
            console.error("Error: srcが見つけられませんでした.");
            return null;
        }

        // FileListの中身を確認
        if (this.FileList.length == 0){
            // ない
            console.error("Error: 読み込むファイルが指定されていません.");
            return null;
        }
        else {
            // ある
            console.log("%cSuccess: File Load.","color:yellow");
        }

        // 絶対パス変換処理
        while (true){
            if (this.FileList[0].match(/^(http\:\/\/|https\:\/\/)/)){
                // リンク
                this.LoadList.push(this.FileList[0]);
            }
            else if (this.FileList[0].match(/^\.\.\//)){
                // 上層
                this.UpTemp = this.RunLevel;
                while (true){
                    if (this.FileList[0].match(/^\.\.\//)){
                        this.UpTemp = this.UpTemp.slice(0,this.UpTemp.lastIndexOf("/") + 1);
                        this.FileList[0] = this.FileList[0].replace("../","");
                    }
                    else {
                        this.LoadList.push(this.UpTemp + this.FileList[0]);
                        break;
                    }
                }
            }
            else if (this.FileList[0].match(/^\/\//)){
                // http or https
                this.LoadList.push(this.FileList[0]);
            }
            else {
                // 下層
                this.LoadList.push(this.RunLevel + "/" + this.FileList[0]);
            }

            // Break
            if (this.FileList.length == 1){
                break;
            }
            else {
                this.FileList.shift();
            }
        }

        // onload後に書き込み
        window.addEventListener('DOMContentLoaded', FileImport._Read());
    }

    _Read(){
        while (true){
            if (this.LoadList != 0){
                this.Script = document.createElement('script');
                this.Script.src = this.LoadList[0];
                document.head.appendChild(this.Script); 
                //document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', "<script src=\"" + this.LoadList[0] + "\"></script>");
                this.LoadList.shift();
            }
            else {
                break;
            }
        }
        console.log("%cSuccess: Imported.","color:yellow");
    }
}

// Instance
FileImport = new FILEIMPORT;

// Copyright: https://github.com/Meziro039