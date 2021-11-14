function validationDate(date) 
{
    // target Rent car form
    let carForm = date.getFormContext();
    
    // target feild rent end date

    let rentEndDate = carForm.getAttribute("eng_rentenddate").getValue();

    // target feild rent start date 

let rentStartDate = carForm.getAttribute("eng_rentstartdate").getValue();

let rentEndDateControl = carForm.getControl("eng_rentenddate");
if (rentStartDate != null && rentEndDate != null){
if (rentEndDate.getTime() < rentStartDate.getTime()){
rentEndDateControl.setNotification("Rent End Date Must be after Start End Date","BDATE")
}else
{rentEndDateControl.clearNotification("BDATE")

}
}
}