var e=document.querySelector(".logo"),n=new Promise(function(n){e.addEventListener("click",function(){n("Promise was resolved")})}),t=new Promise(function(e,n){setTimeout(function(){n(Error("Promis was rejected"))},3e3)}),o=function(e){var n=document.createElement("div");n.className="message",n.textContent=e,document.body.append(n)},r=function(e){var n=document.createElement("div");n.className="message error-message",n.textContent=e,document.body.append(n)};n.then(function(e){return o(e)}),t.catch(function(e){return r(e)});
//# sourceMappingURL=index.1e5bf550.js.map