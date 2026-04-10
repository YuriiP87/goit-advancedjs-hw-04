import{a as v,S as q,i as n}from"./assets/vendor-Cu43xbyG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const M="https://pixabay.com/api/",R="55279694-d74f3b25994f84b5d6770a0a1",E=15;async function d(t,o){return(await v.get(M,{params:{key:R,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:E}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),h=document.querySelector(".load-more-btn"),$=new q(".gallery a",{captionsData:"alt",captionDelay:250});function g(t){const o=t.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:c,comments:w,downloads:S})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b> ${r}</p>
            <p class="info-item"><b>Views</b> ${c}</p>
            <p class="info-item"><b>Comments</b> ${w}</p>
            <p class="info-item"><b>Downloads</b> ${S}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",o),$.refresh()}function B(){f.innerHTML=""}function p(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}function b(){h.classList.remove("is-hidden")}function l(){h.classList.add("is-hidden")}const L=document.querySelector(".form"),A=document.querySelector(".load-more-btn");let u="",a=1;const P=15;L.addEventListener("submit",O);A.addEventListener("click",_);async function O(t){t.preventDefault();const o=t.currentTarget.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search query.",position:"topRight"});return}u=o,a=1,B(),l(),p();try{const s=await d(u,a);if(!s.hits||s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(s.hits);const i=Math.ceil(s.totalHits/P);a<i?b():(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y(),L.reset()}}async function _(){a+=1,l(),p();try{const t=await d(u,a);g(t.hits);const o=Math.ceil(t.totalHits/P);a>=o?(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):b(),x()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{y()}}function x(){const t=document.querySelector(".gallery-item");if(!t)return;const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
