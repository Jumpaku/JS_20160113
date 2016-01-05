var canvas;//html��canvas�G�������g
var ctx;//canvas�̒��g(2D�̃R���e�L�X�g)

/**
*canvas��������
*�����i��������
*/
function start() {
    canvas = document.getElementById("maincanvas");
    ctx = canvas.getContext("2d");

    var runner = new Runner(canvas.width/2 - 64, canvas.height/2 - 80, 128, 160);

    setInterval(update, 50.0, runner);
}

/**
*runner���X�V����
*runner��`�悷��
*@param runner �����i
*/
function update(runner) {
    runner.update();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    runner.draw();
}
