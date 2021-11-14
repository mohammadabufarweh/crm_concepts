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


