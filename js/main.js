var el = document.getElementById('rabbit')
var time = document.getElementById('time')
function showTime() {
	var today = new Date()

	var hour = today.getHours()
	var minutes = today.getMinutes()
	var seconds = today.getSeconds()

	if (seconds < 10) {
		seconds = '0' + seconds
	}

	if (minutes < 10) {
		minutes = '0' + minutes
	}

	if (hour > 12) {
		hour -= 12
	}

	var timeNow = hour + ":" + minutes + ":" + seconds
	time.textContent = timeNow
	el.className = 'animated rollOut'
	setTimeout(function () {
        showTime()
    }, 1000)
}

el.addEventListener('click', showTime)








