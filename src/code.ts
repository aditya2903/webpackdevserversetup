// import { Observable } from 'rxjs';
// var Observable1 = require('rxjs/Observable').Observable;
// var rxjs = require('rxjs');
// // var map = require('rxjs/add/operator/map');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// import { map } from "rxjs/operators";
// console.log(dom.window.document.querySelector("p").textContent);

// // import { take, finalize } from 'rxjs/operators';

// // //emit value in sequence every 1 second
// // const source = interval(1000);
// // //output: 0,1,2,3,4,5....
// // const example = source.pipe(
// //   take(5), //take only the first 5 values
// //   finalize(() => console.log('Sequence complete')) // Execute when the observable completes
// // )
// // const subscribe = example.subscribe(val => console.log(val));

// //   let p = new Promise((resolve, reject) => {
// //     let a = true;
// //     if (a === true) {
// //       resolve('promise resolved');
// //     } else {
// //       reject('promise rejected');
// //     }
// //   });

// // p.then((message)=>{
// //   console.log('this is the then' + message);
// // }).catch((message) => {
// //   console.log('this is the error' + message);
// // });

// // let test = new Promise(resolve => {
// //   console.log('in promise execute function');
// //   resolve('welcome');
// // });

// // console.log('before calling then function');

// // test.then(console.log);

// // const welcomeObservable$ = new Observable(observer => {
// //   console.log("In observable producer function");
// //   observer.next("welcome");
// //   observer.complete();
// // });

// // console.log('before calling the observable subscribe');
// // welcomeObservable$.subscribe(console.log);


// const source = rxjs.fromEvent(dom.window.document, 'click');
// const example = source.pipe(map(event => `Event time: ${event}`));
// const subscribe = example.subscribe(val => console.log(val));

