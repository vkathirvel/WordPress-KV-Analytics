/*!
 * JavaScript Cookie v2.0.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 * https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.0.4/js.cookie.min.js
 */
(function(a){if(typeof define==="function"&&define.amd){define(a)}else{if(typeof exports==="object"){module.exports=a()}else{var c=window.Cookies;var b=window.Cookies=a();b.noConflict=function(){window.Cookies=c;return b}}}}(function(){function b(){var f=0;var c={};for(;f<arguments.length;f++){var d=arguments[f];for(var e in d){c[e]=d[e]}}return c}function a(d){function c(o,n,k){var r;if(arguments.length>1){k=b({path:"/"},c.defaults,k);if(typeof k.expires==="number"){var h=new Date();h.setMilliseconds(h.getMilliseconds()+k.expires*86400000);k.expires=h}try{r=JSON.stringify(n);if(/^[\{\[]/.test(r)){n=r}}catch(m){}n=encodeURIComponent(String(n));n=n.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);o=encodeURIComponent(String(o));o=o.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);o=o.replace(/[\(\)]/g,escape);return(document.cookie=[o,"=",n,k.expires&&"; expires="+k.expires.toUTCString(),k.path&&"; path="+k.path,k.domain&&"; domain="+k.domain,k.secure?"; secure":""].join(""))}if(!o){r={}}var q=document.cookie?document.cookie.split("; "):[];var p=/(%[0-9A-Z]{2})+/g;var l=0;for(;l<q.length;l++){var j=q[l].split("=");var f=j[0].replace(p,decodeURIComponent);var g=j.slice(1).join("=");if(g.charAt(0)==='"'){g=g.slice(1,-1)}try{g=d&&d(g,f)||g.replace(p,decodeURIComponent);if(this.json){try{g=JSON.parse(g)}catch(m){}}if(o===f){r=g;break}if(!o){r[f]=g}}catch(m){}}return r}c.get=c.set=c;c.getJSON=function(){return c.apply({json:true},[].slice.call(arguments))};c.defaults={};c.remove=function(f,e){c(f,"",b(e,{expires:-1}))};c.withConverter=a;return c}return a()}));
/*
======================================================
uuid-v4.js :: Random UUID (v4) Generator - Usage: UUID()
======================================================
Copyright (c) 2011 Matt Williams <matt@makeable.co.uk>. All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are
permitted provided that the following conditions are met:
   1. Redistributions of source code must retain the above copyright notice, this list of
      conditions and the following disclaimer.
   2. Redistributions in binary form must reproduce the above copyright notice, this list
      of conditions and the following disclaimer in the documentation and/or other materials
      provided with the distribution.
THIS SOFTWARE IS PROVIDED BY MATT WILLIAMS ''AS IS'' AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL MATT WILLIAMS OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
The views and conclusions contained in the software and documentation are those of the
authors and should not be interpreted as representing official policies, either expressed
or implied, of Matt Williams.
https://raw.githubusercontent.com/makeable/uuid-v4.js/master/uuid-v4.min.js
*/
"use strict";!function(scope){for(var dec2hex=[],i=0;15>=i;i++)dec2hex[i]=i.toString(16);var UUID=function(){for(var uuid="",i=1;36>=i;i++)uuid+=9===i||14===i||19===i||24===i?"-":15===i?4:20===i?dec2hex[4*Math.random()|8]:dec2hex[15*Math.random()|0];return uuid};"undefined"!=typeof exports?module.exports=UUID:scope.UUID=UUID}(this);