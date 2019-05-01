var turn = "X";
$('td').on('click', function(){
	var $square = $(this);
	if($square.text() == ""){
		$square.text(turn);
	if(turn == "X"){
		turn = "O";
	}else{
		turn = "X";
	}
	$('#turn').text(turn + "'s turn");
	}
});

$("button").click(function(){
	$("td").text("");
	$('#turn').text("X's turn");
});