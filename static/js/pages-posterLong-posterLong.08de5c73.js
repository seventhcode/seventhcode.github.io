(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-posterLong-posterLong"],{"0171":function(t,e,n){"use strict";n.r(e);var i=n("eed0"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"039b":function(t,e,n){"use strict";n.r(e);var i=n("c19c"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},2633:function(t,e,n){"use strict";n.r(e);var i=n("7468"),o=n("039b");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("a9ad");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"2799f797",null,!1,i["a"],s);e["default"]=c.exports},"2c8a":function(t,e,n){var i=n("3bf5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("5bb8b9db",i,!0,{sourceMap:!1,shadowMode:!1})},"3bf5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".container999[data-v-2799f797]{height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}",""]),t.exports=e},"475c":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"posterContainer"},[n("v-uni-canvas",{staticClass:"isCan",style:{width:t.cansWidth+"px",height:t.cansHeight+"px"},attrs:{"canvas-id":"zwyPoster"}}),t.tempImgShow?n("v-uni-scroll-view",{staticStyle:{height:"90vh",width:"100vw",position:"fixed",left:"0",top:"0"},attrs:{"scroll-y":"true"}},[n("v-uni-image",{style:{width:t.cansWidth+"px",height:t.cansHeight+"px"},attrs:{src:t.tempImg},on:{longpress:function(e){arguments[0]=e=t.$handleEvent(e),t.longpress.apply(void 0,arguments)}}})],1):t._e(),t.tempImgShow?n("v-uni-view",{staticClass:"fixedBox"},[n("v-uni-view",{staticClass:"boxLeft"},[n("v-uni-button",{staticClass:"flexBtn btnLeft",attrs:{"hover-class":"btnHover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.longpress.apply(void 0,arguments)}}},[t._v("长按图片保存")])],1),n("v-uni-view",{staticClass:"boxRight"},[n("v-uni-button",{staticClass:"flexBtn btnRight",attrs:{"hover-class":"btnHover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeCans.apply(void 0,arguments)}}},[t._v("关闭")])],1)],1):t._e()],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},"57cd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bg[data-v-bf4658be]{width:100vw;height:100vh;position:fixed;left:0;top:0;z-index:998;background-color:rgba(0,0,0,.8)}.fixedBox[data-v-bf4658be]{width:100%;height:%?100?%;position:fixed;bottom:%?30?%;left:0;display:-webkit-box;display:-webkit-flex;display:flex;z-index:1000}.fixedBox .boxLeft[data-v-bf4658be],\r\n.fixedBox .boxRight[data-v-bf4658be]{width:50%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:1000;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.fixedBox .boxLeft .flexBtn[data-v-bf4658be],\r\n.fixedBox .boxRight .flexBtn[data-v-bf4658be]{position:relative;z-index:1000;width:%?200?%;height:%?60?%;text-align:center;line-height:%?55?%;font-size:%?24?%;border-bottom:%?6?% #f58365 solid;border-radius:%?32?%;color:#fff;background:-webkit-linear-gradient(right,#f58365,#ff188a);background:linear-gradient(270deg,#f58365,#ff188a)}.btnHover[data-v-bf4658be]{height:%?55?%!important;border-bottom:0 #f6be3c solid!important;-webkit-transform:translateY(3px) translateZ(0)!important;transform:translateY(3px) translateZ(0)!important}.isCan[data-v-bf4658be]{border-radius:10px;z-index:999;position:fixed;left:0;top:-99999px;margin:auto;background-size:100%}',""]),t.exports=e},6634:function(t,e,n){"use strict";n.r(e);var i=n("475c"),o=n("0171");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("9077");var s,r=n("f0c5"),c=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"bf4658be",null,!1,i["a"],s);e["default"]=c.exports},7468:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container999"},[n("v-uni-button",{staticStyle:{color:"white",background:"linear-gradient(to left, #f58365, #ff188a)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openPost.apply(void 0,arguments)}}},[t._v("打开长表单海报")]),t.posterShow?n("poster",{ref:"poster",on:{closePost:function(e){arguments[0]=e=t.$handleEvent(e),t.closePost.apply(void 0,arguments)}}}):t._e()],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},9077:function(t,e,n){"use strict";var i=n("a772"),o=n.n(i);o.a},a772:function(t,e,n){var i=n("57cd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("459b47c3",i,!0,{sourceMap:!1,shadowMode:!1})},a9ad:function(t,e,n){"use strict";var i=n("2c8a"),o=n.n(i);o.a},c19c:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("6634")),a={components:{poster:o.default},data:function(){return{posterShow:!1}},onLoad:function(){},methods:{closePost:function(){this.posterShow=!1},openPost:function(){var t=this,e={content:"动态参数,URL等,URL需使用https并添加download域名,预览未添加域名需要打开调试者模式",title1Top:100,title1:"我是标题1",form1Title:[{name:"区域1",sWidth:.15},{name:"名称1",sWidth:.25},{name:"类别",sWidth:.55},{name:"联系方式1",sWidth:.7}],form2Title:[{name:"区域1",sWidth:.15},{name:"名称1",sWidth:.25},{name:"类别",sWidth:.55},{name:"联系方式1",sWidth:.7}],form1:[{0:"区域预取",1:"名称名称",2:"待定",3:"d联系方式121221"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"d联系方式121222"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"将案件涉及"}],title2:"我是标题2",form2:[{0:"区域预取",1:"盛大的",2:"待定",3:"地方撒旦3333"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"},{0:"区域预取",1:"名称时代的速度速度",2:"待定",3:"地方撒旦444"}]};this.posterShow=!0,uni.showLoading({title:"绘制ing...",mask:!0}),setTimeout((function(){t.$refs.poster.drawNew(e)}),10)}}};e.default=a},eed0:function(t,e,n){"use strict";n("4160"),n("c975"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i="",o={props:{},data:function(){return{tempImgShow:!1,tempImg:"",cansWidth:270,cansHeight:430}},created:function(){this.ctx=uni.createCanvasContext("zwyPoster",this);var t=this;uni.getSystemInfo({success:function(e){t.cansHeight=e.screenHeight,t.cansWidth=e.windowWidth}})},computed:{today:function(){var t=(new Date).getFullYear(),e=(new Date).getMonth()+1,n=(new Date).getDate(),i=t+"年"+e+"月"+n+"日";return i}},methods:{drawNew:function(t){var e=this;this.cansHeight=20*(t.form1.length+t.form2.length)+t.title1Top+200+100,setTimeout((function(){e.drawBg({url:"/static/can_bg.jpg",sLeft:0,sTop:0,sWidth:1,sHeight:1}).then((function(){i=t.title1Top,e.drawText({text:t.title1,sLeft:"center",sTop:t.title1Top,fontSize:12,color:"#5A390F"}),e.drawForm(t.form1,t.form1Title).then((function(){e.drawText({text:t.title2,sLeft:"center",sTop:i,fontSize:12,color:"#5A390F"}),e.drawForm(t.form2,t.form2Title).then((function(){e.drawBg({url:"/static/scan.jpg",sLeft:.1,sTop:i,sWidth:100,sHeight:100,r:5}).then((function(){e.drawText({text:["扫码体验","加入我们把","12345手动"],sLeft:.42,sTop:i+30,fontSize:10,color:"#5A390F",lineHeight:12}).then((function(){e.drawPara({para:"恭喜您获得了5元兰博基尼优惠劵！兑换码XXXX高1亮1文1字XXXXXX高2亮2文2字XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",fontSize:10,sLeft:.56,sTop:.85,titleHeight:16,sMaxWidth:.34,redWord:["高1亮1文1字","高2亮2文2字","兰博基尼优惠劵"],color:"#5A390F",redColor:"#DD524D",bold:!1}).then((function(){e.saveCans()}))}))}))}))}))}))}),50)},longpress:function(){uni.saveImageToPhotosAlbum({filePath:this.tempImg,success:function(t){uni.showToast({title:"保存相册成功"}),console.log("save success")},fail:function(t){console.log(t),"saveImageToPhotosAlbum:fail auth deny"==t.errMsg&&uni.showModal({title:"您需要授权相册权限",success:function(t){t.confirm&&uni.openSetting({success:function(t){},fail:function(t){console.log(t)}})}})}})},measureText:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return function(t){t=String(t);t=t.split("");var n=0;return t.forEach((function(t){/[a-zA-Z]/.test(t)?n+=7:/[0-9]/.test(t)?n+=5.5:/\./.test(t)?n+=2.7:/-/.test(t)?n+=3.25:/[\u4e00-\u9fa5]/.test(t)?n+=10:/\(|\)/.test(t)?n+=3.73:/\s/.test(t)?n+=2.5:/%/.test(t)?n+=8:n+=10})),n*e/10}(t)},closeCans:function(){this.$emit("closePost")},drawForm:function(t,e){var n=this;return new Promise((function(o,a){for(var s=20,r=.9*n.cansWidth,c=s*(t.length+2)+i,l={},f=0;f<e.length+1;f++)0==f?l[0]=.1*n.cansWidth:f==e.length?l[f]=.9*n.cansWidth:l[f]=n.cansWidth*e[f]["sWidth"];n.ctx.lineWidth=.5,n.ctx.setFontSize(8),n.ctx.setTextBaseline("top");for(f=0;f<=e.length+1;f++)n.ctx.moveTo(l[f],i+s),n.ctx.lineTo(l[f],c);for(f=0;f<=t.length+1;f++){var d=s*(f+1)+i;if(n.ctx.moveTo(l[0],d),n.ctx.lineTo(r,d),f<=t.length)if(0==f)for(var u=0;u<e.length;u++)n.ctx.fillText(e[u].name,l[u]+8,d+8);else{var h=f-1;for(var x in t[h])n.ctx.fillText(t[h][x],l[x]+8,d+8)}}n.ctx.stroke(),n.ctx.draw(!0),setTimeout((function(){i=c+30,o()}),50)}))},saveCans:function(){console.log("保存");var t=1.5;t=1;var e=this;uni.canvasToTempFilePath({x:0,y:0,width:e.cansWidth*t,height:e.cansHeight*t,destWidth:e.cansWidth*t*2,destHeight:e.cansHeight*t*2,canvasId:"zwyPoster",success:function(t){uni.hideLoading(),setTimeout((function(){e.tempImgShow=!0,e.tempImg=t.tempFilePath}),100)},fail:function(t){uni.hideLoading(),console.log(t)}},this)},circleImg:function(t,e,n,i){var o=this;return new Promise((function(a,s){uni.getImageInfo({src:t,success:function(t){e=Math.ceil(o.cansWidth*e),n=Math.ceil(o.cansHeight*n),i=i>1?i:Math.ceil(o.cansWidth*i),o.ctx.save();var s=2*i,r=e+i,c=n+i;o.ctx.arc(r,c,i,0,2*Math.PI),o.ctx.clip(),o.ctx.drawImage(t.path,e,n,s,s),o.ctx.restore(),o.ctx.draw(!0),a()}})}))},drawPara:function(t){var e=this;return new Promise((function(n,i){var o,a={};if(t.redWord.length>0)for(var s=0;s<t.redWord.length;s++){var r=0,c=void 0;while((c=t.para.indexOf(t.redWord[s],r))>-1){a[c]=!0;for(var l=0;l<t.redWord[s].length;l++)a[c+l]=!0;r=c+1}}e.ctx.font="normal normal ".concat(t.fontSize,"px sans-serif"),e.ctx.setFillStyle(t.color),o="center"==t.sLeft?e.cansWidth*(.5-t.sMaxWidth/2)-t.fontSize:t.sLeft*e.cansWidth;var f=Math.floor(e.cansWidth*t.sMaxWidth);console.log(t.sMaxWidth),console.log(f);var d=t.para.split(""),u="",h=0,x=0;for(s=0;s<d.length;s++)u+=s>0?d[s-1]:d[0],x=e.measureText(u,t.fontSize),x>f&&(h++,u="占",x=e.measureText(u,t.fontSize)),a[s]&&(e.ctx.save(),t.bold&&(e.ctx.font="normal bold ".concat(t.fontSize,"px sans-serif")),e.ctx.setFillStyle(t.redColor)),e.ctx.fillText(d[s],o+x,t.sTop*e.cansHeight+t.titleHeight*h),e.ctx.restore();e.ctx.draw(!0),setTimeout((function(){n()}),50)}))},drawBg:function(t){var e=this;return new Promise((function(n,i){var o,a,s,r,c;a=t.sTop<=1?e.cansHeight*t.sTop:t.sTop,s=t.sWidth<=1?e.cansWidth*t.sWidth:t.sWidth,r=t.sHeight<=1?e.cansHeight*t.sHeight:t.sHeight,o="center"==t.sLeft?t.sWidth<=1?e.cansWidth*(.5-t.sWidth/2):.5*e.cansWidth-t.sWidth/2:e.cansWidth*t.sLeft,t.r?(c=t.r,e.ctx.save(),s<2*c&&(c=s/2),r<2*c&&(c=r/2),e.ctx.beginPath(),e.ctx.moveTo(o+c,a),e.ctx.arcTo(o+s,a,o+s,a+r,c),e.ctx.arcTo(o+s,a+r,o,a+r,c),e.ctx.arcTo(o,a+r,o,a,c),e.ctx.arcTo(o,a,o+s,a,c),e.ctx.closePath(),e.ctx.clip(),e.ctx.drawImage(t.url,o,a,s,r),e.ctx.restore(),e.ctx.draw(!0)):(e.ctx.drawImage(t.url,o,a,s,r),e.ctx.draw(!0)),console.log(t.url),setTimeout((function(){n()}),50)}))},drawWebBgTest:function(t){var e=this;return new Promise((function(n,i){uni.getImageInfo({src:t.url,success:function(i){var o,a,s,r,c;a=e.cansHeight*t.sTop,s=e.cansWidth*t.sWidth,r=t.sHeight?e.cansHeight*t.sHeight:s,o="center"==t.sLeft?e.cansWidth*(.5-t.sWidth/2):e.cansWidth*t.sLeft,t.r?(c=t.r,e.ctx.save(),e.ctx.beginPath(),e.ctx.arc(o+c,a+c,c,Math.PI,1.5*Math.PI),e.ctx.moveTo(o+c,a),e.ctx.lineTo(o+s-c,a),e.ctx.lineTo(o+s,a+c),e.ctx.arc(o+s-c,a+c,c,1.5*Math.PI,2*Math.PI),e.ctx.lineTo(o+s,a+r-c),e.ctx.lineTo(o+s-c,a+r),e.ctx.arc(o+s-c,a+r-c,c,0,.5*Math.PI),e.ctx.lineTo(o+c,a+r),e.ctx.lineTo(o,a+r-c),e.ctx.arc(o+c,a+r-c,c,.5*Math.PI,Math.PI),e.ctx.lineTo(o,a+c),e.ctx.lineTo(o+c,a),e.ctx.closePath(),e.ctx.clip(),e.ctx.drawImage(i.path,o,a,s,r),e.ctx.restore(),e.ctx.draw(!0)):(e.ctx.drawImage(i.path,o,a,s,r),e.ctx.draw(!0)),n()}})}))},drawText:function(t){var e=this;return new Promise((function(n,i){var o;if(e.ctx.save(),t.bold&&(e.ctx.font="normal bold ".concat(t.fontSize,"px sans-serif")),e.ctx.setFillStyle(t.color),e.ctx.setFontSize(t.fontSize),"center"==t.sLeft){var a=e.measureText(t.text,t.fontSize);o=.5*e.cansWidth-a/2}else o=t.sLeft<=1?t.sLeft*e.cansWidth:t.sLeft;t.sTop;if(t.sTop<=1&&(t.sTop=t.sTop*e.cansHeight),t.text instanceof Array){t.lineHeight||(t.lineHeight=t.fontSize+2),console.log("我是数组",t.text);for(var s=0;s<t.text.length;s++)e.ctx.fillText(t.text[s],o,t.sTop+t.lineHeight*s)}else console.log("我是字符串",t.text),e.ctx.fillText(t.text,o,t.sTop);e.ctx.draw(!0),e.ctx.restore(),setTimeout((function(){n()}),50)}))}}};e.default=o}}]);