
console.log("Hello from your extension!");
var extensionNames = [];
var missingExtensionIds = [];
var counter = 0

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

  var extensions = message.extensions;

  var hasExtension = extensions.some(function (extension) {
    return extension.id === "calddljhfagnenofapecmihjdepojdcf";
  });
 counter++

if(counter === 2){
  if (hasExtension) {
    console.log("Extension with ID 'calddljhfagnenofapecmihjdepojdcf' found.");
    sessionStorage.setItem('extensionInstalled', 'YES');
  } else {
    console.log("Extension with ID 'calddljhfagnenofapecmihjdepojdcf' not found.");
    sessionStorage.setItem('extensionInstalled', 'No');

  }
}

  // Do something with the extensions list
  // ...
if(counter === 2){
  var targetExtensionIds = ["kghcdbkokgjghlfeojcpeoclfnljkbdk", "llcogfahhcbonemgkdjcjclaahplbldg", "cjljdgfhkjbdbkcdkfojleidpldagmao" , "lmjnegcaeklhafolokijcfjliaokphfk", "ihackilhcefdlfoehlhlamloflhofcme", "elicpjhcidhpjomhibiffojpinpmmpil", "hkdmdpdhfaamhgaojpelccmeehpfljgf", "hjlekdknhjogancdagnndeenmobeofgm", "dkbccihpiccbcheieabdbjikohfdfaje", "mkjjckchdfhjbpckippbnipkdnlidbeb","elpdbicokgbedckgblmbhoamophfbchi", "mdkiofbiinbmlblcfhfjgmclhdfikkpm", "fedchalbmgfhdobblebblldiblbmpgdj"];

  targetExtensionIds.forEach(function (targetId) {
    var foundExtension = extensions.find(function (extension) {
      return extension.id === targetId;
    });
  
    if (foundExtension) {
      extensionNames = [...extensionNames, foundExtension.name];
    } else {
      missingExtensionIds = [...missingExtensionIds, targetId];
    }
  });
  
  if (missingExtensionIds.length === 0) {
    console.log("All extensions found:", extensionNames.join(", "));
    sessionStorage.setItem('hastargetExtensionIds', 'YES');
    sessionStorage.setItem('foundExtensionNames', JSON.stringify(extensionNames));
  } else {
    console.log("Missing extensions with IDs:", missingExtensionIds.join(", "));
    sessionStorage.setItem('missingExtensionIds', JSON.stringify(missingExtensionIds));
    sessionStorage.setItem('hastargetExtensionIds', 'No');
  }
}
});


