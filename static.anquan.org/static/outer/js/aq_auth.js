var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(_w,_d){function It(){this.variId="ppbVerify";this.types={'business':'hy','realname':'sm','official':'gw','enterprise':'qy'};this.init()};It.prototype.$id=function(id){return document.getElementById(id)};It.prototype.getRandId=function(pre,len){var id=pre||'aqLogo';var len=len||5;for(var i=len;i>0;i--){id+=(String.fromCharCode(65+Math.ceil(Math.random()*25)))}return id};It.prototype.getSizeInfo=function($it){var info={};var sizeInfo=$it.getAttribute('logo_size');if(sizeInfo==='124x47'||sizeInfo==='47x124'||sizeInfo==='124X47'||sizeInfo==='47X124'||sizeInfo==='124*47'||sizeInfo==='47*124'){info.w=124;info.h=47;info.sizeInfo='124x47'}else{info.w=83;info.h=30;info.sizeInfo='83x30'}return info};It.prototype.getUrlByInfo=function(typeName){var host=_d.location.host;var url='../v.pinpaibao.com.cn/authenticate/cert/@site='+host+'&at='+typeName;return url};It.prototype.getTypeInfo=function($it){var _it=this;var typeInfo=[];var getType=$it.getAttribute('logo_type');if(!(getType&&getType!=="")){return false}getType=getType.split(',');for(var i=0,len=getType.length;i<len;i++){var it=getType[i];var type=_it.types[it];if(type){typeInfo.push({typeName:it,type:type})}};return typeInfo};It.prototype.getImgByInfo=function(sizeInfo,type){var $img=document.createElement("img");$img.setAttribute("src",'../static.anquan.org/static/outer/image/'+type+'_'+sizeInfo.sizeInfo+'.png'+'?id='+_d.location.hostname);$img.setAttribute("alt",'安全联盟认证');$img.setAttribute("width",sizeInfo.w);$img.setAttribute("height",sizeInfo.h);$img.setAttribute("style","border: none;");return $img};It.prototype.getLinkByInfo=function(sizeInfo,typeInfo,$a){var _it=this;var $a=$a||document.createElement("a");var url=_it.getUrlByInfo(typeInfo.typeName);var $img=_it.getImgByInfo(sizeInfo,typeInfo.type);$a.setAttribute("href",url);$a.setAttribute("target",'_blank');$a.appendChild($img);return $a};It.prototype.getInfo=function($it){var _it=this;if(!$it){return false}var typeInfo=_it.getTypeInfo($it);if(!(typeInfo.length>0)){return false}return{sizeInfo:_it.getSizeInfo($it),typeInfo:typeInfo}};It.prototype.getA=function(){var _it=this;var id=_it.getRandId();_d.write('<b id="'+id+'" style="display: none;"></b>');var $a=_it.$id(id).parentNode;if($a.tagName.toLocaleUpperCase()!=='A'){return false}return $a};It.prototype.init=function(){var _it=this;var $veriBox=_it.$id(_it.variId);var $a=$veriBox?false:_it.getA();var info=_it.getInfo($a||$veriBox);if(!info){return false}var sizeInfo=info.sizeInfo;var typeInfo=info.typeInfo;var typeLen=typeInfo.length;if($veriBox){for(var i=0;i<typeLen;i++){var $aAppend=_it.getLinkByInfo(sizeInfo,typeInfo[i]);$veriBox.appendChild($aAppend)}}else{_it.getLinkByInfo(sizeInfo,typeInfo[0],$a)}};new It()})(window,document);

}
/*
     FILE ARCHIVED ON 00:31:16 Jan 23, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:57:14 May 31, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.259
  exclusion.robots.policy: 0.244
  PetaboxLoader3.resolve: 91.896 (3)
  esindex: 0.015
  captures_list: 1780.978
  CDXLines.iter: 150.513 (4)
  PetaboxLoader3.datanode: 184.787 (6)
  RedisCDXSource: 2.325
  load_resource: 133.552
  LoadShardBlock: 473.462 (4)
*/