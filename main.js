//whatsapp
var whatsapp="https://api.whatsapp.com/send/?phone=972548092366&text=texthere&type=phone_number&app_absent=0";
const blankTargetElements = document.querySelectorAll('[target="_blank"]');
var y=document.getElementsByTagName("h3");
for (let i = 0; i < blankTargetElements.length; i++) {
    blankTargetElements[i].href=whatsapp.replaceAll("texthere","שלום הגעתי אליך דרך האתר אני מעוניין בפריט -"+y[i].textContent)
}
//email
const nonBlankTargetElements = document.querySelectorAll('a:not([target="_blank"])');
var email="mailto:gadh98@gmail.com?subject=הזמנת מוצר&body=texthere";
for (let i = 0; i < nonBlankTargetElements.length; i++) {
    var temp =email.replace("הזמנת מוצר","-הזמנת מוצר"+y[i].textContent)
    nonBlankTargetElements[i].href=temp.replaceAll("texthere","שלום הגעתי אליך דרך האתר אני מעוניין בפריט -"+y[i].textContent)

}