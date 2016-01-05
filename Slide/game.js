var canvas;//htmlのcanvasエレメント
var ctx;//canvasの中身(2Dのコンテキスト)

/**
*canvasを初期化
*ランナを初期化
*/
function start() {
    canvas = document.getElementById("maincanvas");
    ctx = canvas.getContext("2d");

    var runner = new Runner(canvas.width/2 - 64, canvas.height/2 - 80, 128, 160);

    setInterval(update, 50.0, runner);
}

/**
*runnerを更新する
*runnerを描画する
*@param runner ランナ
*/
function update(runner) {
    runner.update();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    runner.draw();
}
