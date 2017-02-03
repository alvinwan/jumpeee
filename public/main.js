
window.onload = function() {

	var canvas = document.getElementById("canvas"); 
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	var ctx = canvas.getContext("2d");
	var currentPlayer = new Player();
	var players = [];
	var time = 0;

	players.push(currentPlayer);
	var level = new Level('Level 1', 100, 10, 100, 10, 5);

	var redraw = function(){ 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        level.draw(ctx, level.next());
        for (var i=0; i<players.length; i++) {
            var player = players[i];
            player.draw(ctx);
        }
		requestAnimationFrame(redraw);
	}

	function update() {
        for (var i=0; i<players.length; i++) {
            var player = players[i];
            player.update(time);
        }
		time = time + 10;
		level.update(time);
	}
	
	window.onkeypress = function(e) {
		currentPlayer.startJump(time);
	}

	redraw(); 
	setInterval(update, 10);
}