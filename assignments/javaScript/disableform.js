function ReadOnly ()
{
 var form = Xrm.Page.ui.controls.get();
 for (var i in form) 
 {
  var c = form[i];
  if (c.getName() != "" && c.getName() != null) 
  {
   if (!c.getDisabled()) {c.setDisabled(true);}
  }
 }
}


function disableWhen(context){
let carRentForm = context.getFormContext();
let rentStatus= carRentForm.getAttribute("eng_rentstatus").getValue();
if(rentStatus == false){
    var form = Xrm.Page.ui.controls.get();
    for (var i in form) 
    {
     var c = form[i];
     if (c.getName() != "" && c.getName() != null)  ``
     {
      if (!c.getDisabled()) {c.setDisabled(true);}
     }
    }
    let rentStatusControl = carRentForm.getControl("eng_rentstatus");
    rentStatusControl.setDisabled(false);
    return;
}
if(rentStatus == true){
    var form = Xrm.Page.ui.controls.get();
    for (var i in form) 
    {
     var c = form[i];
     if (c.getName() != "" && c.getName() != null) 
     {
      if (c.getDisabled()) {c.setDisabled(false);}
     }
    }

}
}

