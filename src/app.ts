import { app,  } from 'google-play-scraper'; 

app({appId: 'free.programming.programming'}) 
	.then(console.log, console.log);

function myFunc(x: any) {
	console.log(x);
}

myFunc(1);