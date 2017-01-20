// setTimeout(function(){
//     alert("Hello");
//     }, 30);
//
// function alertPage() {
//     alert("in alert");
// }
$(document).ready(function(){
    setTimeout(function(){
        alert("Hello");
    }, 30);

    // $('body').on('click', 'a', function(){
    //     chrome.tabs.create({url: $(this).attr('href')});
    //     return false;
    // });
});

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.getSelected(null,function(tab) {
//         chrome.tabs.create( { url: "http://bholmes.me" +tab.url } );
//     });
// });