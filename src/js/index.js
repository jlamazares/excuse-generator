/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#excusegenerator").innerHTML = generateExcuse();
};

function generateExcuse() {
  let who = ["the dog", "my grandma", "the mafia", "a sad clown"];
  let what = ["ate", "ripped", "farted on", "spit on", "stole"];
  let subject = ["my homework", "my car", "your gift"];
  let when = [
    "before the class",
    "after work",
    "during lunch",
    "while I was studying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whaIndex = Math.floor(Math.random() * what.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    what[whaIndex] +
    " " +
    subject[subIndex] +
    "" +
    when[whenIndex]
  );
}
