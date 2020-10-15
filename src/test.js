
const string = `
我们又见面啦，我给自己画了一张画，来看看...

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

*::before,
*::after {
   box-sizing: border-box;
}
.box{
	min-height: 100vh;
}

.cat{
	width: 400px;
	height: 300px;
	background-color: black;
	position: relative;
	border-radius: 50%;
	margin-bottom: -100px;		
}

.earLeft,
.earRight{
	width: 130px;
	height: 250px;
	border: 4px solid black;
	position: absolute;
	margin-top: -150px;
	background-color: white;
}

.earLeft{
	border-radius:  70% 30% 0% 0% / 100% 100% 0% 0%;
	margin-left: -15px;
	transform: rotate(-10deg);
	display: flex;
	justify-content: flex-end;
	align-items: center;	
}
.earRight{
	border-radius:30% 70% 0% 0% / 100% 100% 0% 0%;
	margin-left: 280px;
	transform: rotate(10deg);	
}
.eyeLeft,
.eyeRight{
	width: 150px;
	height: 120px;
	background-color: white;
	position: absolute;
	animation: blink 3s infinite ease-in;
	
}

@keyframes blink {
	0% { height: 0%; }
	90% { height: 30%; }
	50% { height: 30%; }
	100% { height: 40%; }
}

.eyeLeft{
	top: 100px;
	border-radius: 50% 50% 50% 50% / 60% 50% 40% 40%; ;
}


.eyeRight{
	top: 100px;
	left: 250px;
	border-radius:50% 50% 50% 50% / 50% 60% 40% 40%;
}

.smallEyeLeft{
	width: 20px;
	height: 45px;
	background-color: black;
	border-radius: 50%;
	margin-left: 100px;
	margin-top: 35px;
	position: relative;
	
}
.light{
	width: 9px;
	height: 9px;
	background-color: white;
	margin-left: 12px;
	margin-top: 16px;
	position: absolute;	
	border-radius: 50%;
	animation: blink 0.8s infinite ease-in;
}

@keyframes blink {
	0% { margin-top: 16px; }
	20% { margin-top: 12px; }
	40% { margin-top: 18px; }
	60% {margin-top: 12px; }
	80% {margin-top: 18px; }
	100% { margin-top: 16px; }

}
.smallEyeRight{
	width: 20px;
	height: 45px;
	background-color: black;
	border-radius: 50%;
	margin-left: 30px;
	margin-top: 35px;
}

.nose{
	position: absolute;
	top: 60%;
	left: 50%;
	height: 6%;
	width: 10%;
	background: white;
	transform: translateX(-50%);
	border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
}
html{
	background-color: black;
}

`

const player = {
	id: undefined,
	time: 50,
	ui: {
		demo: document.querySelector('#demo'),
		demo2: document.querySelector('#demo2')
	},
	events: {
		'#btnPause': 'pause',
		'#btnPlay': 'play',
		'#btnSlow': 'slow',
		'#btnNormal': 'normal',
		'#btnFast': 'fast'
	},
	n: 1,
	init: () => {
		player.ui.demo.innerText = string.substring(0, player.n)
		player.ui.demo2.innerHTML = string.substring(0, player.n)
		player.bindEvents()
		player.play()
	},


	bindEvents: () => {
		// document.querySelector('#btnPause').onclick = player.pause,

		for (let key in player.events) {
			if (player.events.hasOwnProperty(key)) {
				const value = player.events[key]
				document.querySelector(key).onclick = player[value]
			}
		}
	},
	// const run = () 
	run: () => {
		player.n += 1
		if (player.n > string.length) {
			window.clearInterval(player.id)
			return
		}
		player.ui.demo.innerText = string.substr(0, player.n)
		player.ui.demo2.innerHTML = string.substr(0, player.n)
		player.ui.demo.scrollTop = player.ui.demo.scrollHeight
	},
	// const play = ()
	play: () => {
		player.id = setInterval(player.run, player.time)
	},
	// const pause = ()
	pause: () => {
		window.clearInterval(player.id)
	},
	slow: () => {
		player.pause()
		player.time = 100
		player.play()
	},

	normal: () => {
		player.pause()
		player.time = 50
		player.play()
	},

	fast: () => {
		player.pause()
		player.time = 0
		player.play()
	},
}

player.init()
