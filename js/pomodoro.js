$(document).ready(function(){
	 var buzzer = $("#myAudio")[0];
	 var count = parseInt($("#num").html());
	 var breakTime = parseInt($("#breakNum").html());
    $("#reset").hide();

	 $("#start").click(function(){
		var counter = setInterval(timer,1000);
		breakTime *=60;
		count *=60;
		function timer(){
			$("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").hide();
			$("#timeType").show();
			$("#timeType").html("Session Time:");
			count -=1;
			if(count === 0){
				buzzer.play();
				clearInterval(counter);
				var startBreak = setInterval(breakTimer,1000);				
				$("#num").hide();
			}

			if(count%60>=10){
				$("#num").html(Math.floor(count/60)+":"+count%60);
			}else{
				$("#num").html(Math.floor(count/60)+":"+"0"+count%60)
			}
			
			
		function breakTimer(){
			$("#timeType").html("Break Time :");
			$("#timeType").show();
			$("#breakNum").show();
			breakTime -=1;
				if(breakTime===0){
				buzzer.play();
				clearInterval(startBreak);
				$("#reset").show();
				$("#breakNum").hide();
			}
			if(count%60>=10){
				$("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60);
			}else{
				$("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60)
			}
		}
	}



	 });

	 $("#reset").click(function(){
		count=25;
		breakTime = 25;
		$("#num").html(count);
		$("#breakNum").html(breakTime);
		$("#start, #num, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2").show();
		$("#timeType, #reset").hide();
	 });



    $("#minus5Clock").click(function(){
        if(count >5){
            count -=5;
            $("#num").html(count);
        }
    });

    $("#add5Clock").click(function(){
        count +=5;
        $("#num").html(count);
	 });
	 

	 $("#minus5Break").click(function(){
		if(breakTime >5){
			 breakTime -=5;
			 $("#breakNum").html(breakTime);
		}
  });

  $("#add5Break").click(function(){
		breakTime +=5;
		$("#breakNum").html(breakTime);
  });


});