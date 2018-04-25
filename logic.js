window.onload = function () {
	var x = new Array(); //stores the fourth point and also the next three random points
	var uin = new Array(); //userinput is stored in the arrray
	var out = new Array(); //output of the values after comparing the values from the x array
	var a = Math.random(); //first coordinate
	var b = Math.random(); //second coordinate
	var c = Math.random(); //third coordinate
	var d = Math.random(); //fourth coordinate
	var points = new Array(); //points that are scored by the users
	var j; //used to add score
	var l=0; // used to calculate score
	x.push(d); //pushing the fourth coordinate into array x i.e, array for storing coordinates
	var chart = new CanvasJS.Chart("chartContainer", {
		data: [
		{
			type: "spline",
			dataPoints: [
				{ y: a  },
				{ y: b  },
				{ y: c  },
				{ y: d  }
			]
		}
		]
	});
	chart.render();

	$("#addDataPoint").click(function () { //functions works for the predict button to display next three points
	$(this).prop("disabled",true);
	disp();
	for( o=0;o<=2;o++){
	var valu = Math.random() * Math.random() //logic we used it mul random num with random number
	x.push(valu); //pushing the random value into x array
	var length = chart.options.data[0].dataPoints.length;
	chart.options.data[0].dataPoints.push({ y: valu }); //pushes new value into chart
	chart.render();}
	});

	$("#updateDataPoint").click(function () { //function is used to get the result
		$(this).prop("disabled",true);
	var i = 0; //used to index of the x array
	console.log(x); //displaying x array i.e., coordinates array
	for(t = 0; t <= 2 ; t++){ //looping to compare the x values three times
	if ( x[i+1] < x[i] ){out.push("Less"); // if the second value is less than first then it will push the "less" into out array
	console.log(x);}else{out.push("Great")} //else great will be
 	x.shift();}
	console.log(out);
	var sc = Myf();
	disp1(sc);
	});
	function disp(){$("#list").css("display", "block"); for(o=0;o<=2;o++){ var lk = uin[o]; $('#us'+o+'er').html('<b>'+lk+'</b>');} }
	function disp1(sc){var cs =sc;$("#list1").css("display", "block"); for(o=0;o<=2;o++){ var lk = out[o]; $('#u'+o+'ser').html('<b>'+lk+'</b>');}$("#result").css("display", "block");$('#result').html('<b>you have scored: '+cs+'</b>')}
	function Myf(){
			for( i = 0 ; i <= 2; i++){
console.log(out)
			if( uin[i] == out[i]){
						points.push("1");
					      }else{points.push("0");}}
					console.log(points);
			for(i=0;i<=2;i++){
					  j = parseInt(points[i]);
					  l = l+j;
					}
						console.log(l);
						return l;
			}
	$("#l").click(function () {
if ( uin.length <= 2 ){ uin.push("Less");if(uin.length == 3){$(this).prop("disabled",true);}}else{ $("#al").css("display", "block"); {$(this).prop("disabled",true);}}
});
	$("#g").click(function () {if ( uin.length <= 2 ){ uin.push("Great");if(uin.length == 3){$(this).prop("disabled",true);}}else{ $("#al").css("display", "block");{$(this).prop("disabled",true);}}
});
}
