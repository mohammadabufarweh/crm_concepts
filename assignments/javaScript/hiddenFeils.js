function TickerChange() {
    if(Xrm.Page.getAttribute("eng_paymentmethod").getValue() == true) {
        Xrm.Page.getControl("eng_enddatee").setVisible(true);
        Xrm.Page.getControl("eng_startdate").setVisible(true);
    }
    else {
        Xrm.Page.getControl("eng_enddatee").setVisible(false);
        Xrm.Page.getControl("eng_startdate").setVisible(false);
    }
 }

 function car_Purchase(date){

    let carForm = date.getFormContext();
    let nameCar = carForm.getAttribute("eng_car").getValue();
    let nameCustomer = carForm.getAttribute("eng_customer").getValue();
if(nameCar!= null && nameCustomer!=null){
    console.log(nameCustomer[0]);
    Xrm.Page.getAttribute ("eng_name"). setValue (nameCar[0].name + " Purchase to Customer " + nameCustomer[0].name );
}
 }


 function subject(data){
    let carForm = data.getFormContext();
    let sub = carForm.getAttribute("eng_customer").getValue();
    Xrm.Page.getAttribute ("eng_name").setValue(" Invoice for "+sub[0].name);

 }

 function subject2(data){
    let carForm = data.getFormContext();
    let sub = carForm.getAttribute("eng_ivoicee").getValue();
    Xrm.Page.getAttribute ("eng_name").setValue(" Invoice for "+sub[0].name);

 }



 function getCarDetails(executionContext){
debugger;
    let formContext = executionContext.getFormContext();
    var recordId = formContext.data.entity.getId();
recordId = recordId.replace('{', '').replace('}', '');
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/eng_carpurchase("+recordId+")?$expand=eng_carmodel($select=eng_price)", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.onreadystatechange = function() {

                var result = JSON.parse(this.response);
                if (result.hasOwnProperty("eng_carmodel")) {
                    var eng_carmodel_eng_price = result["eng_carmodel"]["eng_price"];
                    console.log(eng_carmodel_eng_price);
                    alert(eng_carmodel_eng_price);
                    Xrm.Page.getAttribute ("eng_carpriceee"). setValue (eng_carmodel_eng_price);
                    window.location.reload(true);
                    parent.Xrm.Page.data.entity.save();
                }
          
       
    };
    req.send();
}