export {
    sendMessageToUnity
};

let userAgent = navigator.userAgent || navigator.vendor || window.opera;

function isIOS() {
    let isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    return isIOS
  }
  
function isAndroid() {
return (/android/i.test(userAgent));
}

function sendMessageToUnity(message) {
if (isIOS()) {
    try {
    window.webkit.messageHandlers.UnityInAppBrowser.postMessage(message);
    } catch(err) {
    console.log('Can not reach native code');
    }
} else if (isAndroid()){
    UnityInAppBrowser.sendMessageFromJS(message);
}
}