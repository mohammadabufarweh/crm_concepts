function phoneVal (executionContext)
{
let formContext = executionContext.getFormContext();
let phoneFeild = formContext.getAttribute("eng_mobilenumber").getValue();

if (phoneFeild != null) {
   
        if (phoneFeild.substr(0, 4) == '+962') {
            if (phoneFeild.length != 13) {
                formContext.getControl("eng_mobilenumber").clearNotification("BDATE");
                formContext.getControl("eng_mobilenumber").setNotification(" for Jordan country code should be of 9 digit excluding +962" ,"BDATE");
                return;
            }
        }
        else {
            if (phoneFeild.length < 13) {
                formContext.getControl("eng_mobilenumber").clearNotification("BDATE");
                formContext.getControl("eng_mobilenumber").setNotification( " seems to be too short" ,"BDATE");
                return;
            }
        }
    
    formContext.getControl("eng_mobilenumber").clearNotification();
}
}

 // let formContext = executionContext.getFormContext();
    // Xrm.WebApi.online.retrieveRecord("eng_carrent", "8004af41-da42-ec11-8c62-6045bd8cd9fe", "?$expand=eng_Car($select=eng_licenseenddate)").then(
    //     function success(result) {
    //         var eng_carrentid = result["eng_carrentid"];
    //         if (result.hasOwnProperty("eng_Car")) {
    //             var eng_Car_eng_licenseenddate = result["eng_Car"]["eng_licenseenddate"];
    //             console.log("---------------------"+eng_Car_eng_licenseenddate);
    //             formContext.getAttribute("eng_licenceenddatefromcar").setValue(eng_Car_eng_licenseenddate);
    //             console.log("+++++++++++++++++++"+eng_carrentid);
              
    //         }
    //     },
    //     function(error) {
    //         Xrm.Utility.alertDialog(error.message);
    //     }
    // );