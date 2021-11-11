function getCarDetails(){

    
    if (Xrm.Page.data.entity.attributes.get("eng_car").getValue() != null) {

        let CustomerId = Xrm.Page.data.entity.attributes.get("eng_car").getValue()[0].id;

        let CustomerName = Xrm.Page.data.entity.attributes.get("eng_car").getValue()[0].name;

        let CustomerType = Xrm.Page.data.entity.attributes.get("eng_car").getValue()[0].entityType;

        console.log("++++++++++++++++++++++++++" + Xrm.Page.data.entity.attributes.get("eng_licenseenddate").getValue()[0].name);
        alert(CustomerName);

    }


    }