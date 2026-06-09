function flashById(id){return document.getElementById(id);}

function getDetectedFirmware(){
  var ua=navigator.userAgent||"";
  var match=ua.match(/PLAYSTATION 3 ([0-9]+\.[0-9]+)/);
  return match?match[1]:"";
}

function isPS3(){
  return (navigator.userAgent||"").indexOf("PLAYSTATION 3")!=-1;
}

function initFirmwarePage(expectedVersion){
  var detected=getDetectedFirmware();
  var box=flashById("firmwareDetection");
  var title=flashById("firmwareDetectionTitle");
  var text=flashById("firmwareDetectionText");

  if(!box){return;}

  if(!isPS3()){
    box.className="firmware-detection detect-neutral";
    title.innerHTML="Desktop test mode";
    text.innerHTML="Open this page on the PS3 to verify the console firmware automatically.";
    return;
  }

  if(detected==expectedVersion){
    box.className="firmware-detection detect-good";
    title.innerHTML="Correct firmware detected: "+detected;
    text.innerHTML="The browser can detect the firmware number, but it cannot reliably prove OFW or HFW. Confirm HFW manually below.";
    return;
  }

  box.className="firmware-detection detect-stop";
  title.innerHTML=detected?("Wrong firmware detected: "+detected):"Firmware not detected";
  text.innerHTML="This page is only for firmware "+expectedVersion+". Return to the firmware list and open the matching page.";
}

function checkSystemType(version){
  var select=flashById("systemType");
  var result=flashById("decisionResult");
  var launch=flashById("launchArea");
  var usb=flashById("usbGuide");
  var value=select.value;
  var detected=getDetectedFirmware();

  launch.style.display="none";
  usb.style.display="none";

  if(isPS3() && detected && detected!=version){
    result.className="decision-result decision-stop";
    result.innerHTML="STOP: This PS3 reports firmware "+detected+", but this page is for "+version+".";
    return false;
  }

  if(value==""){
    result.className="decision-result decision-warn";
    result.innerHTML="Select the installed system type first.";
    return false;
  }

  if(value=="hfw"){
    result.className="decision-result decision-good";
    result.innerHTML="HFW "+version+" confirmed. PS3HEN 3.5.0 installer unlocked.";
    launch.style.display="block";
    return true;
  }

  if(value=="ofw"){
    result.className="decision-result decision-stop";
    result.innerHTML="STOP: OFW "+version+" is installed. Prepare matching HFW "+version+" on a FAT32 USB first.";
    usb.style.display="block";
    return false;
  }

  result.className="decision-result decision-warn";
  result.innerHTML="The browser detects firmware "+(detected||version)+", but it cannot distinguish OFW from HFW. Check whether HFW was installed from USB.";
  usb.style.display="block";
  return false;
}