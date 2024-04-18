document.querySelectorAll(".book-btn").forEach(e=>{e.addEventListener("click",function(){})}),document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".book-btn"),t=document.getElementById("close-popup"),n=document.getElementById("popup");e.forEach(e=>{e.addEventListener("click",function(){n.style.display="block"})}),t.addEventListener("click",function(){n.style.display="none"}),window.addEventListener("click",function(e){e.target===n&&(n.style.display="none")})}),document.querySelectorAll(".hotel").forEach(e=>{let t=e.querySelector(".book-btn"),n=t.getAttribute("data-hotel"),o=document.createElement("div");o.classList.add("popup"),o.innerHTML=`
      <div class="popup-content">
        <span class="close">&times;</span>
        <h2>Booking Page for Hotel ${n}</h2>
        <input placeholder="Full Legal Name">
        <input placeholder="Phone Number">
        <input placeholder="Mail">
        <input placeholder="Other Notes">
        <button class="send-btn">Send Data </button>
      </div>
    `,document.body.appendChild(o),t.addEventListener("click",function(){o.style.display="block"}),o.querySelector(".close").addEventListener("click",function(){o.style.display="none"}),o.querySelector(".send-btn").addEventListener("click",function(){let e=[];o.querySelectorAll("input").forEach(t=>{e.push(`${t.placeholder}: ${t.value}`)});let t=new Blob([e.join("\n")],{type:"text/plain"}),l=document.createElement("a"),c=window.URL.createObjectURL(t);l.href=c,l.download=`booking_data_hotel_${n}.txt`,l.click(),window.URL.revokeObjectURL(c),o.style.display="none"}),window.addEventListener("click",function(e){e.target===o&&(o.style.display="none")})});
//# sourceMappingURL=index.b5b69797.js.map
