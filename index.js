import{S as u,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",f="46105893-c3619f828e66c5e4a4f6c6159";function d(t){const s=new URLSearchParams({key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${s}`).then(o=>{if(!o.ok)throw new Error(`HTTP error! Status: ${o.status}`);return o.json()}).catch(o=>{throw console.error("Error:",o),o})}function p(t){t.insertAdjacentHTML("beforebegin",`
    <div class="loader-container">
      <span class="loader-text">Loading images, please wait...</span>
    </div>
  `)}function g(){const t=document.querySelector(".loader-container");t&&t.remove()}function h(t){return t.hits.map(({webformatURL:s,largeImageURL:o,tags:a,likes:e,views:r,comments:i,downloads:l})=>`
            <li class="gallery-item">
              <a class="gallery-link" href="${o}">
                <img
                  class="gallery-image"
                  src="${s}"
                  alt="${a}"
                />
              </a>
              <ul class="img-wrapper">
                <li class="img-descr">Likes<span>${e}</span></li>
                <li class="img-descr">Views<span>${r}</span></li>
                <li class="img-descr">Comments<span>${i}</span></li>
                <li class="img-descr">Downloads<span>${l}</span></li>
              </ul>
            </li>
      `).join("")}const y=document.querySelector(".search-form"),c=document.querySelector(".gallery");let L=new u(".gallery a",{captionsData:"alt",captionDelay:250});y.addEventListener("submit",b);function b(t){t.preventDefault();const s=new FormData(t.target),{search:o}=Object.fromEntries(s.entries()),a=o.trim();if(!a){n.error({title:"Error",message:"The search query is empty.",position:"topRight"});return}console.log("Calling addLoader"),p(c),d(a).then(e=>{if(c.innerHTML="",e.hits.length===0){n.info({position:"topRight",title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=h(e);c.insertAdjacentHTML("beforeend",r),L.refresh()}).catch(e=>{n.error({title:"Error",message:`Error: ${e.message}`,position:"topRight"})}).finally(()=>{g()})}
//# sourceMappingURL=index.js.map
