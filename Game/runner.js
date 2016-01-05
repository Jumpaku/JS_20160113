
//ランナクラス
function Runner(x, y, w, h) {
    var imgs = [];
    for (var i = 0; i < 12; ++i) {
        imgs[i] = new Image();
        imgs[i].src = "./img/frame-" + String(i) + ".png";
    }

    this.imgs = imgs;//アニメーションで使う画像の配列
    this.index = 0;//画像の添字
    this.x = x;//画像の左上のx座標
    this.y = y;//画像の左上のy座標
    this.w = w;//画像の幅
    this.h = h;//画像の高さ
    this.state = "run";//ランナの状態

    //ランナのジャンプを開始する関数
    this.startJump = (function () {
        canvas.removeEventListener("click", this.startJump);
        this.state = "jump";
        this.y0 = this.y;
        this.time = 0.0;
    }).bind(this);

    canvas.addEventListener("click", this.startJump);
}

Runner.prototype.update = function () {
    if (this.state === "run") {
        this.index = (++this.index) % this.imgs.length;
    }
    else if (this.state === "jump") {
        var q = 0.0;
        var p = 500.0;
        var a = (this.y0 - q) / (p * p);
        this.time += 50.0
        this.y = a * (this.time - p) * (this.time - p) + q;
        if (this.y > this.y0) {
            this.y = this.y0;
            this.state = "run";
            canvas.addEventListener("click", this.startJump);
        }
    }
    else {

    }
}

Runner.prototype.draw = function () {
    ctx.drawImage(this.imgs[this.index], this.x, this.y, this.w, this.h);
}
