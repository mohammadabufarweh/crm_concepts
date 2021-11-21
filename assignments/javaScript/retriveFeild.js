// function getCarDetails(){
//     Xrm.WebApi.online.retrieveMultipleRecords("eng_car", "?$select=eng_licenseenddate").then(
//         function success(results) {
//             for (var i = 0; i < results.entities.length; i++) {
//                 var eng_licenseenddate = results.entities[i]["eng_licenseenddate"];
//                 var eng_carid = results.entities[i]["eng_carid"];
            
//             }
//         },
//         function(error) {
//             Xrm.Utility.alertDialog(error.message);
//         }
//     );
   
//     }
 function reloadAndSave(currentCaseId){
    parent.Xrm.Page.data.entity.save();
    window.location.reload(true);
    var currentCaseId = Xrm.Page.data.entity.getId();
 }
function getCarDetails(executionContext){


    let formContext = executionContext.getFormContext();
    var recordId = formContext.data.entity.getId();
recordId = recordId.replace('{', '').replace('}', '');
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/eng_carrents("+recordId+")?$expand=eng_Car($select=eng_licenseenddate)", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.onreadystatechange = function() {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var result = JSON.parse(this.response);
                var eng_carrentid = result["eng_carrentid"];
                if (result.hasOwnProperty("eng_Car")) {
                    var eng_Car_eng_licenseenddate = result["eng_Car"]["eng_licenseenddate"];
                    alert(eng_Car_eng_licenseenddate);
                    Xrm.Page.getAttribute ("eng_licenceenddatefromcar"). setValue (eng_Car_eng_licenseenddate);
                    window.location.reload(true);
                    parent.Xrm.Page.data.entity.save();
                }
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}
        