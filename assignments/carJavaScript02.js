function phoneVal (executionContext)
{
let formContext = executionContext.getFormContext();
let phoneFeild = formContext.getAttribute("eng_mobilenumber").getValue();

if (phoneFeild != null) {
    if (phoneFeild.substr(0, 1) != '+') {
        formContext.getControl("eng_mobilenumber").clearNotification("BDATE");
        formContext.getControl("eng_mobilenumber").setNotification( "should be formatted with country code +962","BDATE");
        return;
    }
    else {
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
    }
    formContext.getControl("eng_mobilenumber").clearNotification();
}
}