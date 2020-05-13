$(document).ready(function() {
	$(".submit").click(function() {
		var num1 = parseInt($(".number-1").val());
		var num2 = parseInt($(".number-2").val());
		if(num1 == "" || num1 < 2 || num1 > 100 || num2 == "" || num2 < 2 || num2 > 100) {
			$(".result-box .error").show();
			$(".prime-found .count").hide();
			$(".prime-found .number-list").hide();
		} else {
			$(".result-box .error").hide();
			if(num1 > num2) {
				max = num1;
				min = num2;
			} else {
				max = num2;
				min = num1;
			}
			primeNumberList = primeFactorsTo(min, max);
			$(".prime-found .count span").text(primeNumberList.length);
			$(".prime-found .count").show();
			$(".prime-found .number-list").text(primeNumberList.join(","));
			$(".prime-found .number-list").show();
		}	
			
	});


});



function primeFactorsTo(min, max)
{
	primes = [];
	for (m = min; m <= max; m++) {
        var y = 0;
        for (x = 2; x <= max; x++) {
            if (m % x == 0 && m != x) {
                y++;
            }
            if (m < 10 && x == 1) {
                y++;
            }
        }
        if (y == 0) {
            primes.push(m);
        }
    }
    return primes;
}