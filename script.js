//your JS code here. If required.
const timer= document.querySelector("#timer");
function getTime(){
	const now = new Date();
	const hr = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	const year = now.getFullYear();
	const month = now.getMonth()+1;
	const day = now.getDate();
	return {hr,min,sec,year,month,day};
}
function formateTime(time){
    return `${time<10 ? "0" : ""}${time}`
}
function updateClock(){
    const time = getTime();
    const formateddate = `${time.year}/${formateTime(time.month)}/${formateTime(time.day)}`;
    const formatedtime = `${formateTime(time.hr)}:${formateTime(time.min)}:${formateTime(time.sec)}`
    timer.textContent = `${formateddate} ${formatedtime}`
}
setInterval(updateClock,1000);
