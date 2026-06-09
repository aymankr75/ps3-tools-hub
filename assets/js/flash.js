function flashById(id){return document.getElementById(id);}

function getDetectedFirmware(){
  var ua=navigator.userAgent||"";
  var match=ua.match(/PLAYSTATION 3 ([0-9]+\.[0-9]+)/);
  return match?match[1]:"";
}

function isPS3(){
  return (navigator.userAgent||"").indexOf("PLAYSTATION 3")!=-1;
}

function installerPathFor(version){
  if(version=="4.92"){return "../installer/492alt.html";}
  if(version=="4.93"){return "../installer/493alt.html";}
  return "../installer/alternate.html";
}

function genericInstallerPath(){
  return "../installer/alternate.html";
}

function initFirmwarePage(expectedVersion){
  var detected=getDetectedFirmware();
  var box=flashById("firmwareDetection");
  var title=flashById("firmwareDetectionTitle");
  var text=flashById("firmwareDetectionText");
  var installer=flashById("installerButton");
  var fallback=flashById("fallbackButton");

  if(!box){return;}

  if(!isPS3()){
    box.className="firmware-detection detect-neutral";
    title.innerHTML="Desktop preview";
    text.innerHTML="Open this page on the PS3 to verify firmware automatically.";
    installer.className="launch-main launch-disabled";
    installer.href="#";
    if(fallback){fallback.style.display="none";}
    return;
  }

  if(detected==expectedVersion){
    box.className="firmware-detection detect-good";
    title.innerHTML="Correct firmware detected: "+detected;
    text.innerHTML="Use matching HFW "+expectedVersion+" from USB, then start the firmware-specific PS3HEN 3.5.0 installer.";

    installer.className="launch-main";
    installer.href=installerPathFor(expectedVersion);

    if(fallback && (expectedVersion=="4.92" || expectedVersion=="4.93")){
      fallback.href=genericInstallerPath();
      fallback.innerHTML="TRY GENERIC INSTALLER";
      fallback.style.display="inline-block";
    }else if(fallback){
      fallback.style.display="none";
    }
    return;
  }

  box.className="firmware-detection detect-stop";
  title.innerHTML=detected?("Wrong firmware detected: "+detected):"Firmware not detected";
  text.innerHTML="This page is only for firmware "+expectedVersion+". Open the matching firmware center.";
  installer.className="launch-main launch-disabled";
  installer.href="#";
  if(fallback){fallback.style.display="none";}
}