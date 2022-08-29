//경기 관련 전역 변수 선언

var PlayerName=[];
var PIIndex=1
var CAIndex=1
var B1Index=1
var B2Index=1
var B3Index=1
var SSIndex=1
var LFIndex=1
var CFIndex=1
var RFIndex=1

var StatusDefensepositionChange=0;

PlayerName = ["Null",
	      "채시훈[17]","신희주[11]","나건우[9]","최재원[12]","박종현[10]",
	      "이현서[14]","한재준[7]","홍승완[13]","조규민[3]","손영빈[22]",
	      "장성환[15]","배준석[16]","이시헌[18]","김병철[19]","김상현[20]",
	      "김태완[21]","함성현[]",
	      "하윤[1]","강동훈[21]","고근태[14]","고수혁[13]","곽민준[11]",
	      "김보현[6]","김시우[5]","김하민[17]","박경원[0]","송용진[22]",
	      "원태웅[20]","이광준[9]","정태원[0]","최윤우[19]","최은석[12]",
	      "함수밀[18]","선수17"];

function NextPI(){
	PIIndex= PIIndex+1	
	if (PIIndex > PlayerName.length-1 ) {
		PIIndex = 1
	} 
	document.getElementById("PIName-text").innerHTML=PlayerName[PIIndex]
}
function LastPI(){
	PIIndex= PIIndex-1	
	if (PIIndex < 1 ) {
		PIIndex = PlayerName.length-1
	} 
	document.getElementById("PIName-text").innerHTML=PlayerName[PIIndex]
}
function NextCA(){
	CAIndex= CAIndex+1	
	if (CAIndex > PlayerName.length-1 ) {
		CAIndex = 1
	} 
	document.getElementById("CAName-text").innerHTML=PlayerName[CAIndex]
}
function LastCA(){
	CAIndex= CAIndex-1	
	if (CAIndex < 1 ) {
		CAIndex = PlayerName.length-1
	} 
	document.getElementById("CAName-text").innerHTML=PlayerName[CAIndex]
}
function NextB1(){
	B1Index= B1Index+1	
	if (B1Index > PlayerName.length-1 ) {
		B1Index = 1
	} 
	document.getElementById("B1Name-text").innerHTML=PlayerName[B1Index]
}
function LastB1(){
	B1Index= B1Index-1	
	if (B1Index < 1 ) {
		B1Index = PlayerName.length-1
	} 
	document.getElementById("B1Name-text").innerHTML=PlayerName[B1Index]
}
function NextB2(){
	B2Index= B2Index+1	
	if (B2Index > PlayerName.length-1 ) {
		B2Index = 1
	} 
	document.getElementById("B2Name-text").innerHTML=PlayerName[B2Index]
}
function LastB2(){
	B2Index= B2Index-1	
	if (B2Index < 1 ) {
		B2Index = PlayerName.length-1
	} 
	document.getElementById("B2Name-text").innerHTML=PlayerName[B2Index]
}
function NextB3(){
	B3Index= B3Index+1	
	if (B3Index > PlayerName.length-1 ) {
		B3Index = 1
	} 
	document.getElementById("B3Name-text").innerHTML=PlayerName[B3Index]
}
function LastB3(){
	B3Index= B3Index-1	
	if (B3Index < 1 ) {
		B3Index = PlayerName.length-1
	} 
	document.getElementById("B3Name-text").innerHTML=PlayerName[B3Index]
}
function NextSS(){
	SSIndex= SSIndex+1	
	if (SSIndex > PlayerName.length-1 ) {
		SSIndex = 1
	} 
	document.getElementById("SSName-text").innerHTML=PlayerName[SSIndex]
}
function LastSS(){
	SSIndex= SSIndex-1	
	if (SSIndex < 1 ) {
		SSIndex = PlayerName.length-1
	} 
	document.getElementById("SSName-text").innerHTML=PlayerName[SSIndex]
}
function NextLF(){
	LFIndex= LFIndex+1	
	if (LFIndex > PlayerName.length-1 ) {
		LFIndex = 1
	} 
	document.getElementById("LFName-text").innerHTML=PlayerName[LFIndex]
}
function LastLF(){
	LFIndex= LFIndex-1	
	if (LFIndex < 1 ) {
		LFIndex = PlayerName.length-1
	} 
	document.getElementById("LFName-text").innerHTML=PlayerName[LFIndex]
}
function NextCF(){
	CFIndex= CFIndex+1	
	if (CFIndex > PlayerName.length-1 ) {
		CFIndex = 1
	} 
	document.getElementById("CFName-text").innerHTML=PlayerName[CFIndex]
}
function LastCF(){
	CFIndex= CFIndex-1	
	if (CFIndex < 1 ) {
		CFIndex = PlayerName.length-1
	} 
	document.getElementById("CFName-text").innerHTML=PlayerName[CFIndex]
}
function NextRF(){
	RFIndex= RFIndex+1	
	if (RFIndex > PlayerName.length-1 ) {
		RFIndex = 1
	} 
	document.getElementById("RFName-text").innerHTML=PlayerName[RFIndex]
}
function LastRF(){
	RFIndex= RFIndex-1	
	if (RFIndex < 1 ) {
		RFIndex = PlayerName.length-1
	} 
	document.getElementById("RFName-text").innerHTML=PlayerName[RFIndex]
}

function DefensepositionChange(){
	if (StatusDefensepositionChange==0 ) {
		StatusDefensepositionChange = 1
		document.getElementById("MainBoard").src = "./DefensePosition.png"
		document.getElementById("PI-text").style.visibility = "visible"
		document.getElementById("PIName-text").style.visibility = "visible"
		document.getElementById("CA-text").style.visibility = "visible"
		document.getElementById("CAName-text").style.visibility = "visible"
		document.getElementById("B1-text").style.visibility = "visible"
		document.getElementById("B1Name-text").style.visibility = "visible"
		document.getElementById("B2-text").style.visibility = "visible"
		document.getElementById("B2Name-text").style.visibility = "visible"
		document.getElementById("B3-text").style.visibility = "visible"
		document.getElementById("B3Name-text").style.visibility = "visible"
		document.getElementById("SS-text").style.visibility = "visible"
		document.getElementById("SSName-text").style.visibility = "visible"
		document.getElementById("LF-text").style.visibility = "visible"
		document.getElementById("LFName-text").style.visibility = "visible"
		document.getElementById("CF-text").style.visibility = "visible"
		document.getElementById("CFName-text").style.visibility = "visible"
		document.getElementById("RF-text").style.visibility = "visible"
		document.getElementById("RFName-text").style.visibility = "visible"
	} 
	else {
		StatusDefensepositionChange = 0
		document.getElementById("MainBoard").src = "./DefensePositionTransparent.png"
		document.getElementById("PI-text").style.visibility = "hidden"
		document.getElementById("PIName-text").style.visibility = "hidden"
		document.getElementById("CA-text").style.visibility = "hidden"
		document.getElementById("CAName-text").style.visibility = "hidden"
		document.getElementById("B1-text").style.visibility = "hidden"
		document.getElementById("B1Name-text").style.visibility = "hidden"
		document.getElementById("B2-text").style.visibility = "hidden"
		document.getElementById("B2Name-text").style.visibility = "hidden"
		document.getElementById("B3-text").style.visibility = "hidden"
		document.getElementById("B3Name-text").style.visibility = "hidden"
		document.getElementById("SS-text").style.visibility = "hidden"
		document.getElementById("SSName-text").style.visibility = "hidden"
		document.getElementById("LF-text").style.visibility = "hidden"
		document.getElementById("LFName-text").style.visibility = "hidden"
		document.getElementById("CF-text").style.visibility = "hidden"
		document.getElementById("CFName-text").style.visibility = "hidden"
		document.getElementById("RF-text").style.visibility = "hidden"
		document.getElementById("RFName-text").style.visibility = "hidden"	}
}
