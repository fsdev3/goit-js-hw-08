const e=document.querySelector(".feedback-form");let t={};e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(t)})),window.addEventListener("load",(function(){const o=localStorage.getItem("feedback-form-state");if(!o)return;t=JSON.parse(o),Object.entries(t).forEach((([t,o])=>{e.elements[t].value=o}))})),e.addEventListener("submit",(function(e){e.preventDefault(),console.log(t),t={},e.target.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.0566e884.js.map
