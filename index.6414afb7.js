document.getElementById("full-button").addEventListener("click",function(){document.getElementById("article-container").classList.toggle("full-article")}),//切换隐藏的菜单
document.getElementById("menu-toggle").addEventListener("click",function(){document.getElementById("menu-toggle").classList.toggle("active"),document.getElementById("sidebar").classList.toggle("active")}),//console.log("h----------")
document.querySelectorAll(".sidebar a").forEach(function(e){e.addEventListener("click",function(t){if(// 在这里编写点击事件的处理代码
t.preventDefault(),e.classList.contains("document")){let t=e.getAttribute("href");// console.log(href)
window.location.hash=t.replace(/\.md$/,".html")}else{// 找到父亲li
let t=e.parentNode;for(;null!=t;){// console.log(parentNode.tagName)
if("li"===t.tagName.toLowerCase()){console.log("toggle active"),t.classList.toggle("active");break}t=t.parentNode}}})}),// 监听hash change
window.addEventListener("hashchange",function(){// document.getElementById('article').setAttribute('src',location.hash.slice(1) + '.html')
document.getElementById("article").setAttribute("src",location.hash.slice(1))},!1)// ? false
,document.addEventListener("DOMContentLoaded",()=>{let e=location.hash;e&&e.length?(// cur_hash = cur_hash.slice(1) + '.html';
e=e.slice(1),document.getElementById("article").setAttribute("src",e)):document.getElementById("article").setAttribute("src","/introducation/index.html")});//# sourceMappingURL=index.6414afb7.js.map

//# sourceMappingURL=index.6414afb7.js.map
