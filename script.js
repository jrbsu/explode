$(document).ready(function() {
	let words = []
	$(".word").each(function(){
		words.push($(this).text());
		$(this).text("");
	});
	for (var i=0;i<words.length;i++) {
		let a = words[i].split("")
		for (var j=0;j<a.length;j++) {
			if (a[j] == " ") {
				$(".word:eq(" + i + ")").append("&nbsp;");
			} else {
				$(".word:eq(" + i + ")").append("<span class='letter'>" + a[j] + "</span>");
			}
		}
	}
});

$(".word").hover(
	function() {
		let wordLength = $(this).children().length;
		for (var i=0;i<wordLength;i++) {
			let randomTranslate1 = Math.floor(Math.random() * 60);
			let randomTranslate2 = Math.floor(Math.random() * 60);
			let rotate = Math.floor(Math.random() * 40);
			//let randomColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
			let randomDeg = Math.floor(Math.random() * 360);
			let randomColor = "hsl(" + randomDeg + ", 80%, 50%)";
			let a = "translate(" + underHalf(randomTranslate1, 30) + "%, " + underHalf(randomTranslate2, 30) + "%) rotate(" + underHalf(rotate, 20) + "deg)";
			$(this).children().eq(i)
				.css("transform", a)
				//.css("color", randomColor);
				.css("color", "black")
			$("body").css("background-color", randomColor);
		}
	}, function() {
		let wordLength = $(this).children().length;
		for (var i=0;i<wordLength;i++) {
			let a = "translate(" + 0 + "%, " + 0 + "%) rotate(" + 0 + "deg)";
			$(this).children().eq(i)
				.css("transform", a)
				.css("color", "white")
		}
	}
);

function underHalf(value, max) {
	let a = 0;
	if (value > max) {
		return (value - max);
	} else {
		return (value * -1);
	}
}