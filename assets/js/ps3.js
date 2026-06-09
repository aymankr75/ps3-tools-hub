function byId(id){return document.getElementById(id);}
function checkFirmware(){
  var value=byId("ps3Firmware").value;
  var result=byId("ps3Result");
  if(value==""){
    result.className="result";
    result.innerHTML="Select your firmware first.";
    return false;
  }
  if(value=="4.92"){
    result.className="result result-good";
    result.innerHTML="4.92 information page available.";
    return true;
  }
  if(value=="4.91"||value=="4.90"){
    result.className="result result-good";
    result.innerHTML="Legacy information page available.";
    return true;
  }
  result.className="result";
  result.innerHTML="Open the legacy firmware section.";
  return true;
}
function runBrowserTests(){
  var ua=navigator.userAgent||"Unknown";
  var isPS3=ua.indexOf("PLAYSTATION 3")!=-1;
  var storage="Not available";
  try{
    if(window.localStorage){storage="Available";}
  }catch(e){storage="Blocked";}
  byId("testJS").innerHTML='<span class="ok">Working</span>';
  byId("testDevice").innerHTML=isPS3?'<span class="ok">PlayStation 3 detected</span>':'Desktop or other browser';
  byId("testUA").innerHTML=escapeHtml(ua);
  byId("testScreen").innerHTML=screen.width+" x "+screen.height;
  byId("testStorage").innerHTML=storage;
}
function escapeHtml(text){
  return String(text).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}