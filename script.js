function randomNum(num){
  	return Math.floor(Math.random() * num);
}
var nums = document.querySelectorAll(".number");   
//var randomNumber = randomNum(100);
//document.getElementByTagName("div").innerHTML = randomNumber;
var update = function(){
	//nums[2].innerHTML = randomNum(3);
	//console.log(nums.length);
	for(i = 0; i < nums.length;i++){
		nums[i].innerHTML = randomNum(4);
	}
}
var matchAlert = function(){
	if(nums[0].innerHTML === nums[1].innerHTML){
		window.alert("Horray" + " "+ nums[0].innerHTML + " " + "matches!!!!")
	}
	if(nums[0].innerHTML === nums[2].innerHTML){
		window.alert("Horray" + " "+ nums[2].innerHTML + " " + "matches!!!!")
	}
	if(nums[1].innerHTML === nums[2].innerHTML){
		window.alert("Horray" + " "+ nums[1].innerHTML + " " + "matches!!!!")
	}
}
var matchNUmb =function(){
	if(nums[0].innerHTML === nums[1].innerHTML){
		nums[0].classList.add("highlight");
		nums[1].classList.add("highlight");
	
	}
	else if(nums[0].innerHTML === nums[2].innerHTML){
		nums[0].classList.add("highlight");
		nums[2].classList.add("highlight");
	}
	else if(nums[1].innerHTML === nums[2].innerHTML){
		nums[1].classList.add("highlight");
		nums[2].classList.add("highlight");
	}
};
update();
matchAlert();
matchNUmb();
    