
'use strict';
chrome.runtime.onInstalled.addListener(function () {

    //7 classes
    chrome.storage.sync.set({ class1: 'lol' });
    chrome.storage.sync.set({ class2: 'lol' });
    chrome.storage.sync.set({ class3: 'lol' });
    chrome.storage.sync.set({ class4: 'lol' });
    chrome.storage.sync.set({ class5: 'lol' });
    chrome.storage.sync.set({ class6: 'lol' });
    chrome.storage.sync.set({ class7: 'lol' });

    //7 times
    chrome.storage.sync.set({ time1: 'lol' });
    chrome.storage.sync.set({ time2: 'lol' });
    chrome.storage.sync.set({ time3: 'lol' });
    chrome.storage.sync.set({ time4: 'lol' });
    chrome.storage.sync.set({ time5: 'lol' });
    chrome.storage.sync.set({ time6: 'lol' });
    chrome.storage.sync.set({ time7: 'lol' });

    //how to get key value
    // chrome.storage.sync.get(['class1'], function(val){
    //     var value = val.class1;
    //     alert(value);
    // });


    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'fuhsd.schoology.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });

    <script language =" text" >
        Please fill out the form in the popup so that we can provide better estimates of your hw time
    </script>   
});
