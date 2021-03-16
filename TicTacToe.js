$(document).ready(function(){
	var x = "x";
	var o = "o";
	var turns = 0;

	var spot1 = $('#1');
	var spot2 = $('#2');
	var spot3 = $('#3');
	var spot4 = $('#4');
	var spot5 = $('#5');
	var spot6 = $('#6');
	var spot7 = $('#7');
	var spot8 = $('#8');
	var spot9 = $('#9');
	
    	$('#game li').on('click', function(){
		        if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
		         	spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
		       	spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
		        	spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
		         	spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			        spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			        spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			        spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o'))  
		{
            $("#screen").text('Winner: O').css('font-weight', 'bold');
			$('#game li').text('+');
			$('#game li').removeClass('disable');
			$('#game li').removeClass('o');
			$('#game li').removeClass('x');
		} else if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x'))
		{
            $("#screen").text('Winner: X').css('font-weight', 'bold');
			$('#game li').text('+');
			$('#game li').removeClass('disable');
			$('#game li').removeClass('o');
			$('#game li').removeClass('x');
		}
		 else if(turns == 9){
            $("#screen").text('Tie Game').css('font-weight', 'bold');
			$('#game li').text('+');
			$('#game li').removeClass('disable');
			$('#game li').removeClass('o');
			$('#game li').removeClass('x');
			turns = 0;
		}
		 else if($(this).hasClass('disable')){
            $("#screen").text('This spot is already filled').css('font-weight', 'bold');
		}
		 else if(turns%2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
				spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
				spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
				spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
				spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
				spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
				spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
				spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o'))
				{
                $("#screen").text('Winner: O').css('font-weight', 'bold');
				turns = 0;
			}
		} else {
			turns++;
			$(this).text(x);
			$(this).addClass('disable x');
			if(spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
				spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
				spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
				spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
				spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
				spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
				spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
				spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
			){
                $("#screen").text('Winner: X').css('font-weight', 'bold');
			turns = 0;
			}
		}
	});
		
		$("#reset").click(function(){
			
		$("#game li").text("+");
		$("#screen").text("");
		$("#game li").removeClass('disable');
		$("#game li").removeClass('o');
		$("#game li").removeClass('x');
		turns = 0;
	});
});