var t={};Object.defineProperty(t,"__esModule",{value:!0});var e=function(){function t(){this._state=new Int32Array(4),this._buffer=new ArrayBuffer(68),this._buffer8=new Uint8Array(this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}return t.hashStr=function(t,e){return void 0===e&&(e=!1),this.onePassHasher.start().appendStr(t).end(e)},t.hashAsciiStr=function(t,e){return void 0===e&&(e=!1),this.onePassHasher.start().appendAsciiStr(t).end(e)},t._hex=function(e){var r,n,s,h,f=t.hexChars,a=t.hexOut;for(h=0;h<4;h+=1)for(n=8*h,r=e[h],s=0;s<8;s+=2)a[n+1+s]=f.charAt(15&r),r>>>=4,a[n+0+s]=f.charAt(15&r),r>>>=4;return a.join("")},t._md5cycle=function(t,e){var r=t[0],n=t[1],s=t[2],h=t[3];n=((n+=((s=((s+=((h=((h+=((r=((r+=(n&s|~n&h)+e[0]-680876936|0)<<7|r>>>25)+n|0)&n|~r&s)+e[1]-389564586|0)<<12|h>>>20)+r|0)&r|~h&n)+e[2]+606105819|0)<<17|s>>>15)+h|0)&h|~s&r)+e[3]-1044525330|0)<<22|n>>>10)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n&s|~n&h)+e[4]-176418897|0)<<7|r>>>25)+n|0)&n|~r&s)+e[5]+1200080426|0)<<12|h>>>20)+r|0)&r|~h&n)+e[6]-1473231341|0)<<17|s>>>15)+h|0)&h|~s&r)+e[7]-45705983|0)<<22|n>>>10)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n&s|~n&h)+e[8]+1770035416|0)<<7|r>>>25)+n|0)&n|~r&s)+e[9]-1958414417|0)<<12|h>>>20)+r|0)&r|~h&n)+e[10]-42063|0)<<17|s>>>15)+h|0)&h|~s&r)+e[11]-1990404162|0)<<22|n>>>10)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n&s|~n&h)+e[12]+1804603682|0)<<7|r>>>25)+n|0)&n|~r&s)+e[13]-40341101|0)<<12|h>>>20)+r|0)&r|~h&n)+e[14]-1502002290|0)<<17|s>>>15)+h|0)&h|~s&r)+e[15]+1236535329|0)<<22|n>>>10)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n&h|s&~h)+e[1]-165796510|0)<<5|r>>>27)+n|0)&s|n&~s)+e[6]-1069501632|0)<<9|h>>>23)+r|0)&n|r&~n)+e[11]+643717713|0)<<14|s>>>18)+h|0)&r|h&~r)+e[0]-373897302|0)<<20|n>>>12)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n&h|s&~h)+e[5]-701558691|0)<<5|r>>>27)+n|0)&s|n&~s)+e[10]+38016083|0)<<9|h>>>23)+r|0)&n|r&~n)+e[15]-660478335|0)<<14|s>>>18)+h|0)&r|h&~r)+e[4]-405537848|0)<<20|n>>>12)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n&h|s&~h)+e[9]+568446438|0)<<5|r>>>27)+n|0)&s|n&~s)+e[14]-1019803690|0)<<9|h>>>23)+r|0)&n|r&~n)+e[3]-187363961|0)<<14|s>>>18)+h|0)&r|h&~r)+e[8]+1163531501|0)<<20|n>>>12)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n&h|s&~h)+e[13]-1444681467|0)<<5|r>>>27)+n|0)&s|n&~s)+e[2]-51403784|0)<<9|h>>>23)+r|0)&n|r&~n)+e[7]+1735328473|0)<<14|s>>>18)+h|0)&r|h&~r)+e[12]-1926607734|0)<<20|n>>>12)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n^s^h)+e[5]-378558|0)<<4|r>>>28)+n|0)^n^s)+e[8]-2022574463|0)<<11|h>>>21)+r|0)^r^n)+e[11]+1839030562|0)<<16|s>>>16)+h|0)^h^r)+e[14]-35309556|0)<<23|n>>>9)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n^s^h)+e[1]-1530992060|0)<<4|r>>>28)+n|0)^n^s)+e[4]+1272893353|0)<<11|h>>>21)+r|0)^r^n)+e[7]-155497632|0)<<16|s>>>16)+h|0)^h^r)+e[10]-1094730640|0)<<23|n>>>9)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n^s^h)+e[13]+681279174|0)<<4|r>>>28)+n|0)^n^s)+e[0]-358537222|0)<<11|h>>>21)+r|0)^r^n)+e[3]-722521979|0)<<16|s>>>16)+h|0)^h^r)+e[6]+76029189|0)<<23|n>>>9)+s|0,n=((n+=((s=((s+=((h=((h+=((r=((r+=(n^s^h)+e[9]-640364487|0)<<4|r>>>28)+n|0)^n^s)+e[12]-421815835|0)<<11|h>>>21)+r|0)^r^n)+e[15]+530742520|0)<<16|s>>>16)+h|0)^h^r)+e[2]-995338651|0)<<23|n>>>9)+s|0,n=((n+=((h=((h+=(n^((r=((r+=(s^(n|~h))+e[0]-198630844|0)<<6|r>>>26)+n|0)|~s))+e[7]+1126891415|0)<<10|h>>>22)+r|0)^((s=((s+=(r^(h|~n))+e[14]-1416354905|0)<<15|s>>>17)+h|0)|~r))+e[5]-57434055|0)<<21|n>>>11)+s|0,n=((n+=((h=((h+=(n^((r=((r+=(s^(n|~h))+e[12]+1700485571|0)<<6|r>>>26)+n|0)|~s))+e[3]-1894986606|0)<<10|h>>>22)+r|0)^((s=((s+=(r^(h|~n))+e[10]-1051523|0)<<15|s>>>17)+h|0)|~r))+e[1]-2054922799|0)<<21|n>>>11)+s|0,n=((n+=((h=((h+=(n^((r=((r+=(s^(n|~h))+e[8]+1873313359|0)<<6|r>>>26)+n|0)|~s))+e[15]-30611744|0)<<10|h>>>22)+r|0)^((s=((s+=(r^(h|~n))+e[6]-1560198380|0)<<15|s>>>17)+h|0)|~r))+e[13]+1309151649|0)<<21|n>>>11)+s|0,n=((n+=((h=((h+=(n^((r=((r+=(s^(n|~h))+e[4]-145523070|0)<<6|r>>>26)+n|0)|~s))+e[11]-1120210379|0)<<10|h>>>22)+r|0)^((s=((s+=(r^(h|~n))+e[2]+718787259|0)<<15|s>>>17)+h|0)|~r))+e[9]-343485551|0)<<21|n>>>11)+s|0,t[0]=r+t[0]|0,t[1]=n+t[1]|0,t[2]=s+t[2]|0,t[3]=h+t[3]|0},t.prototype.start=function(){return this._dataLength=0,this._bufferLength=0,this._state.set(t.stateIdentity),this},t.prototype.appendStr=function(e){var r,n,s=this._buffer8,h=this._buffer32,f=this._bufferLength;for(n=0;n<e.length;n+=1){if((r=e.charCodeAt(n))<128)s[f++]=r;else if(r<2048)s[f++]=192+(r>>>6),s[f++]=63&r|128;else if(r<55296||r>56319)s[f++]=224+(r>>>12),s[f++]=r>>>6&63|128,s[f++]=63&r|128;else{if((r=1024*(r-55296)+(e.charCodeAt(++n)-56320)+65536)>1114111)throw new Error("Unicode standard supports code points up to U+10FFFF");s[f++]=240+(r>>>18),s[f++]=r>>>12&63|128,s[f++]=r>>>6&63|128,s[f++]=63&r|128}f>=64&&(this._dataLength+=64,t._md5cycle(this._state,h),f-=64,h[0]=h[16])}return this._bufferLength=f,this},t.prototype.appendAsciiStr=function(e){for(var r,n=this._buffer8,s=this._buffer32,h=this._bufferLength,f=0;;){for(r=Math.min(e.length-f,64-h);r--;)n[h++]=e.charCodeAt(f++);if(h<64)break;this._dataLength+=64,t._md5cycle(this._state,s),h=0}return this._bufferLength=h,this},t.prototype.appendByteArray=function(e){for(var r,n=this._buffer8,s=this._buffer32,h=this._bufferLength,f=0;;){for(r=Math.min(e.length-f,64-h);r--;)n[h++]=e[f++];if(h<64)break;this._dataLength+=64,t._md5cycle(this._state,s),h=0}return this._bufferLength=h,this},t.prototype.getState=function(){var t=this,e=t._state;return{buffer:String.fromCharCode.apply(null,t._buffer8),buflen:t._bufferLength,length:t._dataLength,state:[e[0],e[1],e[2],e[3]]}},t.prototype.setState=function(t){var e,r=t.buffer,n=t.state,s=this._state;for(this._dataLength=t.length,this._bufferLength=t.buflen,s[0]=n[0],s[1]=n[1],s[2]=n[2],s[3]=n[3],e=0;e<r.length;e+=1)this._buffer8[e]=r.charCodeAt(e)},t.prototype.end=function(e){void 0===e&&(e=!1);var r,n=this._bufferLength,s=this._buffer8,h=this._buffer32,f=1+(n>>2);if(this._dataLength+=n,s[n]=128,s[n+1]=s[n+2]=s[n+3]=0,h.set(t.buffer32Identity.subarray(f),f),n>55&&(t._md5cycle(this._state,h),h.set(t.buffer32Identity)),(r=8*this._dataLength)<=4294967295)h[14]=r;else{var a=r.toString(16).match(/(.*?)(.{0,8})$/);if(null===a)return;var i=parseInt(a[2],16),u=parseInt(a[1],16)||0;h[14]=i,h[15]=u}return t._md5cycle(this._state,h),e?this._state:t._hex(this._state)},t.stateIdentity=new Int32Array([1732584193,-271733879,-1732584194,271733878]),t.buffer32Identity=new Int32Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),t.hexChars="0123456789abcdef",t.hexOut=[],t.onePassHasher=new t,t}(),r=t.Md5=e;"5d41402abc4b2a76b9719d911017c592"!==e.hashStr("hello")&&console.error("Md5 self test failed.");export{r as M};
