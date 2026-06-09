function flashById(id){return document.getElementById(id);}
function checkSystemType(version){
  var select=flashById("systemType");
  var result=flashById("decisionResult");
  var launch=flashById("launchArea");
  var value=select.value;

  launch.style.display="none";

  if(value==""){
    result.className="decision-result decision-warn";
    result.innerHTML="Select the installed system type first.";
    return false;
  }

  if(value=="hfw"){
    result.className="decision-result decision-good";
    result.innerHTML="HFW "+version+" confirmed. The installer is unlocked.";
    launch.style.display="block";
    return true;
  }

  if(value=="ofw"){
    result.className="decision-result decision-stop";
    result.innerHTML="STOP: OFW "+version+" is installed. Install matching HFW "+version+" before HEN.";
    return false;
  }

  result.className="decision-result decision-warn";
  result.innerHTML="Check Settings > System Settings > System Information, then confirm whether matching HFW was installed.";
  return false;
}