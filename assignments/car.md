# Car Assignment 
![98.png](../98.png)


## entities’ forms

- Car 

![83.png](../83.png)

- Car Rent 

![84.png](../84.png)

- Customer

![85.png](../85.png)


## security roles


- Receptionist

![88.png](../88.png)

- Manager

![82.png](../82.png)

## Work Flow For Reminder Email

![87.png](../87.png)


![86.png](../86.png)

## Work Flow For same car can’t have two renting requests at the same time 


![91.png](../91.png)

![92.png](../92.png)

## Duplicate detection rule


![89.png](../89.png)

##  JavaScript codes for current Date

```js
function PrintName()
{
var Vendor = Xrm.Page.getAttribute("new_printvendor").getValue();
var BRE = Xrm.Page.getAttribute("new_bre").getText();
var Invoice = Xrm.Page.getAttribute("new_invoicetemplate").getText();
var Batch = Xrm.Page.getAttribute("new_printbatch").getValue();
var Pages = Xrm.Page.getAttribute("new_printfileofpages").getValue();
var Name = Xrm.Page.getAttribute("new_printfilename").getValue();
if (BRE != null && Invoice != null && Batch != null && Pages != null && Name == null) {
var d = Date.now();
var PrintMonth = d.getMonth();
var PrintDay = d.getDay();
var PrintYear = d.getFullYear();
}
if (Vendor == 100000001) {
Xrm.Page.getAttribute("new_printfilename").setValue( "Multifam" + "_" + Invoice + "_" + PrintMonth + "." + PrintDay + "." + PrintYear + "_" + Pages + "_" + BRE + "_" + Batch);
}
if (Vendor == 100000000) {
Xrm.Page.getAttribute("new_printfilename").setValue( "Multifam" + "_" + PrintMonth + "." + PrintDay + "." + PrintYear + "_" + "BillOnly" + Invoice + "_" + Batch + "_" + Pages);
}
if (BRE == 100000000 && Vendor == 100000000) {
Xrm.Page.getAttribute("new_printfilename").setValue( "Multifam" + "_" + PrintMonth + "." + PrintDay + "." + PrintYear + "_" + Invoice + "_" + Batch + "_" + Pages);
}
}

```

## Rent end date can’t be before start date 

![93.png](../93.png)

## Car license end date must be at least 7 days before the rent end date

Create Feild Seven Days Before License end date 

![96.png](../96.png)

![97.png](../97.png)

- Work Flow to maintain Car license end date must be at least 7 days before the rent end date

![94.png](../94.png)

![95.png](../95.png)

##  An exported solution for the developed system 

- Used CRM version : 1.0.0.0
- CRM version  2018

![99.png](../99.png)

## Report filter criteria and the result

![100.png](../100.png)

![101.png](../101.png)

![102.png](../102.png)

