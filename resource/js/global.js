function download(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

GetFilenameFromUrl = (Url) => {
  if (CheckIsNotNullOrEmpty(Url)) {
    return Url.substring(Url.lastIndexOf("/") + 1);
  } else return "";
};

const bracketPairs = { "[": "]", "{": "}", "(": ")" };
const closingBrackets = new Set(Object.values(bracketPairs));
function areBracketsBalanced(expr) {
  if (expr == undefined || expr == "") {
    return true;
  } else {
    const open = []; // stack of (closing) brackets that need to be closed
    for (char of expr) {
      if (closingBrackets.has(char)) {
        if (char === open[open.length - 1]) open.pop();
        else return false;
      }
      if (char in bracketPairs) open.push(bracketPairs[char]);
    }

    return open.length === 0;
  }
}

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

var stringToHTML = function (str) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

var splitTest = (str) => {
  /*
    https://stackoverflow.com/questions/423376/how-to-get-the-file-name-from-a-full-path-using-javascript
    var substringTest = function (str) {
        return str.substring(str.lastIndexOf('/')+1);
    }

    var replaceTest = function (str) {
        return str.replace(/^.*(\\|\/|\:)/, '');
    }

    var execTest = function (str) {
        return /([^\\]+)$/.exec(str)[1];
    }

    var splitTest = function (str) {
        return str.split('\\').pop().split('/').pop();
    }

        substringTest took   0.09508600000000023ms
        replaceTest   took   0.049203000000000004ms
        execTest      took   0.04859899999999939ms
        splitTest     took   0.02505500000000005ms
    */
  return str.split("\\").pop().split("/").pop();
};

function isURL(str) {
  var urlRegex =
    "^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$";
  var url = new RegExp(urlRegex, "i");
  return str.length < 2083 && url.test(str);
}

function GetFileextesion(StringValue) {
  if (CheckIsNotNullOrEmpty(StringValue)) {
    return StringValue.substr(StringValue.lastIndexOf(".") + 1);
  }
  return "";
}

function GetFileName(StringValue) {
  // https://stackoverflow.com/questions/4250364/how-to-trim-a-file-extension-from-a-string-in-javascript
  if (CheckIsNotNullOrEmpty(StringValue))
    return StringValue.replace(/\.[^/.]+$/, "");
  else return "";
}

function CheckIsNotNullOrEmpty(TestSubject) {
  return (
    (typeof TestSubject !== "undefined" || TestSubject !== null) &&
    TestSubject != null &&
    TestSubject != ""
  );
}

function Cint($agument) {
  if ($agument == null) return 0;
  if ($agument === "") return 0;
  if (typeof $agument === "undefined") return 0;
  $agument = $agument.toString().replace(",", "");
  $agument = parseInt($agument);

  if (isNaN($agument)) return 0;

  return $agument;
}

function isValidDate(date) {
  return (
    date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date)
  );
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//function Cfloat(Income) {
//    return CheckIsNotNullOrEmpty(Income) ? (Math.round(Income * 100) / 100) : 0.00;
//};

Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

Date.prototype.addHours = function (h) {
  this.setHours(this.getHours() + h);
  return this;
};

function getTimeZone() {
  var offset = new Date().getTimezoneOffset(),
    o = Math.abs(offset);
  return (
    (offset < 0 ? "+" : "-") +
    ("00" + Math.floor(o / 60)).slice(-2) +
    ":" +
    ("00" + (o % 60)).slice(-2)
  );
}

function ActiveSuccessPop(Title, TextString, OnCloseEvent) {
  Swal.fire({
    icon: "success",
    title:
      typeof Title !== "undefined" && Title != null ? Title : "Completed...",
    html:
      typeof TextString !== "undefined" && TextString != null
        ? TextString
        : "Your Data is Safe now",
    onClose:
      typeof OnCloseEvent !== null &&
      typeof OnCloseEvent !== "undefined" &&
      typeof OnCloseEvent == "function"
        ? OnCloseEvent
        : function () {},
    // footer: '<a href>Why do I have this issue?</a>'
  });
}

function ActiveAlertPop(Title, TextString, OnCloseEvent) {
  Swal.fire({
    icon: "error",
    title: typeof Title !== "undefined" && Title != null ? Title : "Oops...",
    html:
      typeof TextString !== "undefined" && TextString != null
        ? TextString
        : "Something went wrong!",
    onClose:
      typeof OnCloseEvent !== null &&
      typeof OnCloseEvent !== "undefined" &&
      typeof OnCloseEvent == "function"
        ? OnCloseEvent
        : function () {},
    // footer: '<a href>Why do I have this issue?</a>'
  });
}

function ActiveInfoPop(Title, TextString) {
  Swal.fire({
    icon: "info",
    title: typeof Title !== "undefined" && Title != null ? Title : "Oops...",
    html:
      typeof TextString !== "undefined" && TextString != null
        ? TextString
        : "Something went wrong!",
    // onClose: (typeof OnCloseEvent !== null && typeof OnCloseEvent !== "undefined" && typeof OnCloseEvent == 'function') ? OnCloseEvent : function () { },
    // footer: '<a href>Why do I have this issue?</a>'
  });
}

function DefaultInternalServer() {
  ActiveAlertPop("Error", "Internal Server Error 500");
}

function validateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function validateEmailAddress(email) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return regex.test(email);
}

function Phonenumber(inputtxt) {
  return inputtxt.match(/\d/g).length === 10;
}

function active_numberOnly() {
  ActiveNumberOnly();
}

let ReverseReflexText = (str) =>
  CheckIsNotNullOrEmpty(str) ? str.split("").reverse().join("") : "";

function ActiveNumberOnlyOnlyNumber() {
  $(".numberOnly").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace = /[0-9]/g;

    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);

    // console.log(event.keyCode, englishAlphabetDigitsAndWhiteSpace.test(key));

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (event.keyCode == 46 || englishAlphabetDigitsAndWhiteSpace.test(key)) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });

  $(".numberOnly").on("paste", function (e) {
    e.preventDefault();
  });
}

function ActiveNumberOnly() {
  $(".numberOnly").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace = /[0-9]/g;

    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);

    // console.log(event.keyCode, englishAlphabetDigitsAndWhiteSpace.test(key));

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 45 ||
      event.keyCode == 46 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });

  $(".numberOnly").on("paste", function (e) {
    e.preventDefault();
  });
}

function Active_numberOnly_with_cancopy() {
  ActiveNumberOnlyWithCanCopy();
}

function ActiveNumberOnlyWithCanCopy() {
  $(".numberOnly").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace = /[0-9]/g;

    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);

    // console.log(event.keyCode, englishAlphabetDigitsAndWhiteSpace.test(key));

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 45 ||
      event.keyCode == 46 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });
}

function active_thai_eng() {
  ActiveThaiEng();
}

function ActiveThaiEng() {
  $(".eng_thai_only").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace =
      /[\u0E00-\u0E7Fa-zA-Z0-9-!@#$%^&*+_./\\=()\[\]{}]/g;
    if (event.keyCode == 39 || event.keyCode == 34) return false;
    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);
    //console.log(event.keyCode);

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 32 ||
      event.keyCode == 8 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });

  $(".eng_thai_only").on("paste", function (e) {
    e.preventDefault();
  });
}

function MatchThatChar(message) {
  if (!CheckIsNotNullOrEmpty(message)) return false;
  else {
    let whatMatch = /([\u0E00-\u0E7F])/g;
    return message.match(whatMatch);
  }
}

function MatchThatCharAndDanger(message) {
  if (!CheckIsNotNullOrEmpty(message)) return false;
  else {
    let whatMatch = /([\u0E00-\u0E7F-!@#$%^&*+./\\=()\[\]{}])/g;
    return message.match(whatMatch);
  }
}

function ActiveThaiEngCanCopy() {
  $(".eng_thai_only").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace =
      /[\u0E00-\u0E7Fa-zA-Z0-9-!@#$%^&*+_./\\=()\[\]{}]/g;
    if (event.keyCode == 39 || event.keyCode == 34) return false;
    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);
    //console.log(event.keyCode);

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 32 ||
      event.keyCode == 8 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });

  // $(".eng_thai_only").on("paste",function(e)
  // {
  //     e.preventDefault();
  // });
}

function ActiveEngNumberOnlyCanCopy() {
  $(".EngNumberOnly").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace = /[a-zA-Z0-9]/g;
    if (event.keyCode == 39 || event.keyCode == 34) return false;
    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);
    //console.log(event.keyCode);

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 32 ||
      event.keyCode == 8 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });
}

function Active_thai_eng_with_cancopy() {
  ActiveThaiEngWithCanCopy();
}

function ActiveThaiEngWithCanCopy() {
  $(".eng_thai_only").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace =
      /[\u0E00-\u0E7Fa-zA-Z0-9-!@#$%^&*+_./\\=()\[\]{}]/g;
    if (event.keyCode == 39 || event.keyCode == 34) return false;
    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);
    // console.log(event.keyCode);

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 32 ||
      event.keyCode == 8 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });
}

function ExcelDateToJSDate(excelDate) {
  var date = new Date(Math.round((excelDate - (25567 + 1)) * 86400 * 1000));
  var converted_date = date.toISOString().split("T")[0];
  return converted_date;
}

function GetProtocolAndUrl(CampaignString) {
  return (
    window.location.protocol +
    "//" +
    window.location.host +
    (CheckIsNotNullOrEmpty(window.location.pathname)
      ? window.location.pathname
      : "") +
    (CheckIsNotNullOrEmpty(CampaignString)
      ? "/" + CampaignString
      : "CampaignString")
  );
}

function GetProtocalANdUrl(CampaignString) {
  return GetProtocolAndUrl(CampaignString);
}

function GetProtocolANdUrlNoFileName(CampaignString) {
  return (
    window.location.origin +
    (CheckIsNotNullOrEmpty(CampaignString)
      ? "/" + CampaignString
      : "CampaignString")
  );
}

function HilightStringMatch(result, LookFor) {
  if (Cint(result) > 0) result = result.toString();

  if (typeof result !== "undefined" && result != null && result.length > 0)
    if (typeof result !== "undefined" && result != null && result.length > 0) {
      let reg = new RegExp(LookFor, "gi");
      return result.replace(reg, function (str) {
        return '<b Class="HilightBlue">' + str + "</b>";
      });
    }

  return "";
}

function ReBuildDateTime($source_date) {
  if (
    CheckIsNotNullOrEmpty($source_date) &&
    typeof moment == "function" &&
    $source_date != ""
  )
    $source_date = moment($source_date).format("YYYY-MM-DD HH:mm:ss", true);
  if (moment($source_date).year() < 1000) return "";
  else if (CheckIsNotNullOrEmpty($source_date)) {
    $source_date = $source_date.replace("T", " ");
    $source_date = $source_date.replace("Z", "");
    let ListSource = $source_date.split(".");
    if (ListSource[0] != null && ListSource[0] != "")
      $source_date = ListSource[0];
  } else return "";

  return $source_date;
}

function preg_quote(str) {
  // http://kevin.vanzonneveld.net
  // +   original by: booeyOH
  // +   improved by: Ates Goral (http://magnetiq.com)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Onno Marsman
  // *     example 1: preg_quote("$40");
  // *     returns 1: '\$40'
  // *     example 2: preg_quote("*RRRING* Hello?");
  // *     returns 2: '\*RRRING\* Hello\?'
  // *     example 3: preg_quote("\\.+*?[^]$(){}=!<>|:");
  // *     returns 3: '\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:'

  return (str + "").replace(
    /([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,
    "\\$1"
  );
}

function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else query_string[key].push(decodeURIComponent(value));
  }

  return query_string;
}

function Number2Digit(n) {
  return n > 9 ? "" + n : "0" + n;
}

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );

  return vars;
}

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));

  return result;
}

function makeNum(length) {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));

  return parseInt(result);
}

function readURL(input, successCallback, errorCallback, ele, Json_config) {
  if (input.files && input.files[0]) {
    if (
      input.files[0].type != "image/jpeg" &&
      input.files[0].type != "image/png"
    ) {
      alert("Support only jpeg file and png file");
      errorCallback();
      return;
    }
    if (input.files[0].size > 1048576) {
      alert("Support maximum size 1 mb");
      errorCallback();
      return;
    }
    if ($(ele).length > 0) $(ele).html(input.files[0].name);

    var config = Json_config;

    var data = new FormData();
    data.append("token", config.Token);
    data.append("data", input.files[0]);
    data.append("temporary", true);

    var path = "/api/upload";
    if (
      config.BuzzebeesAPI &&
      config.BuzzebeesAPI.toLowerCase().indexOf("service") > 0
    )
      path = "/upload";

    var settings = {
      url: config.BuzzebeesAPI + path,
      method: "POST",
      timeout: 0,
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      headers: {
        // "token": ""
      },
      success: function (data) {
        successCallback(data);
      },
      error: function (xhr, type, err) {
        alert("Error,please try again.");
        errorCallback();
      },
    };

    $.ajax(settings).done(function (response) {
      // console.log(response);
    });
  }
  // else
  //     enableUpload();
}

function FireConfirm(AnguObj, Title) {
  Swal.fire({
    title:
      CheckIsNotNullOrEmpty(Title) && Title != ""
        ? Title
        : CheckIsNotNullOrEmpty(AnguObj.ConfirmTitle)
        ? AnguObj.ConfirmTitle
        : "N/A",
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: `Confirm`,
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      if (
        typeof AnguObj !== "undefined" &&
        AnguObj != null &&
        typeof AnguObj.ConfirmCallBack !== "undefined" &&
        typeof AnguObj.ConfirmCallBack === "function"
      ) {
        if (
          CheckIsNotNullOrEmpty(AnguObj.ByPassSuccess) &&
          AnguObj.ByPassSuccess
        ) {
          // Swal.fire(AnguObj.ViewBag.TitleSuccess, "", 'Success');
        } else {
          if (CheckIsNotNullOrEmpty(AnguObj.ByPassSuccess))
            Swal.fire(AnguObj.ViewBag.TitleSuccess, "", "Success");
          else Swal.fire("Ok!", "", "Success");
        }

        AnguObj.ConfirmCallBack();
        AnguObj.$apply();
      } else {
        if (CheckIsNotNullOrEmpty(AnguObj) && AnguObj.ByPassSuccess) {
        } else Swal.fire("Ok!", "", "Success");
      }
    } else if (result.isDenied) {
      // Swal.fire('Changes are not saved', '', 'info');
      if (
        typeof AnguObj !== "undefined" &&
        AnguObj != null &&
        typeof AnguObj.CancelCallBack !== "undefined" &&
        typeof AnguObj.CancelCallBack === "function"
      ) {
        AnguObj.CancelCallBack();
        AnguObj.$apply();
      }
    } else {
      if (
        typeof AnguObj !== "undefined" &&
        AnguObj != null &&
        typeof AnguObj.CancelCallBack !== "undefined" &&
        typeof AnguObj.CancelCallBack === "function"
      ) {
        AnguObj.CancelCallBack();
        AnguObj.$apply();
      }
    }
  });
}

function EventNumNoSpaceIntegerOnly() {
  $(".DigitOnlyInteger").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace = /[0-9]/g;

    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);

    // console.log(event.keyCode);
    // console.log(englishAlphabetDigitsAndWhiteSpace.test(key));

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 8 ||
      event.keyCode == 37 ||
      event.keyCode == 39 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });

  $(".DigitOnlyInteger").on("paste", function (e) {
    e.preventDefault();
  });
}

function EventNumNoSpace() {
  $(".DigitOnly").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace = /[0-9]/g;

    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);

    // console.log(event.keyCode);
    // console.log(englishAlphabetDigitsAndWhiteSpace.test(key));

    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 8 ||
      event.keyCode == 37 ||
      event.keyCode == 39 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });

  $(".DigitOnly").on("paste", function (e) {
    e.preventDefault();
  });
}

function active_eng_nospace() {
  ActiveEngNoSpace();
}

function ActiveEngNoSpace() {
  $(".active_eng_nospace").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace = /[A-Za-z0-9_]/g;

    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);

    // console.log(event.keyCode);

    if (event.keyCode == 39 || event.keyCode == 34) {
      return false;
    }
    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 8 ||
      event.keyCode == 37 ||
      event.keyCode == 39 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });

  $(".active_eng_nospace").on("paste", function (e) {
    // e.preventDefault();
  });
}

function active_number_eng_nospace() {
  $(".active_number_eng_nospace").on("keypress", function (event) {
    // Disallow anything not matching the regex pattern (A to Z uppercase, a to z lowercase, digits 0 to 9 and white space)
    // For more on JavaScript Regular Expressions, look here: https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
    var englishAlphabetDigitsAndWhiteSpace = /[A-Za-z0-9]/g;

    // Retrieving the key from the char code passed in event.which
    // For more info on even.which, look here: http://stackoverflow.com/q/3050984/114029
    var key = String.fromCharCode(event.which);

    if (event.keyCode == 39 || event.keyCode == 34) {
      return false;
    }
    // For the keyCodes, look here: http://stackoverflow.com/a/3781360/114029
    // keyCode == 8  is backspace
    // keyCode == 37 is left arrow
    // keyCode == 39 is right arrow
    // englishAlphabetDigitsAndWhiteSpace.test(key) does the matching, that is, test the key just typed against the regex pattern
    if (
      event.keyCode == 8 ||
      event.keyCode == 37 ||
      event.keyCode == 39 ||
      englishAlphabetDigitsAndWhiteSpace.test(key)
    ) {
      return true;
    }

    // If we got this far, just return false because a disallowed key was typed.
    return false;
  });

  $(".active_number_eng_nospace").on("paste", function (e) {
    // e.preventDefault();
  });
}

function Active_Block_Ui() {
  ActiveBlockUi();
}

function ActiveBlockUi() {
  $.blockUI({ message: null });
  setTimeout($.unblockUI, 35000);
}

const ActiveBlockUiAgument = (timeout) => {
  if (Cint(timeout) > 0) {
    timeout = timeout * 60 * 1000;
    $.blockUI({ message: null });
    setTimeout($.unblockUI, timeout);
  }
};

function ActiveConfirm() {
  Swal.fire({
    title: "Are you sure?",
    text: "This Operation Take A lot of time",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Let's do it",
  }).then((result) => {
    if (result.isConfirmed) ActiveBlockUi();
  });
}

function DisplayComplete(Msg) {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  toastr.success(Msg);
}

function DisplayError(Msg) {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  toastr.error(Msg);
}

function Active_Confirm() {
  ActiveConfirm();
}

function getBusinessDatesCount(startDate, endDate) {
  var count = 0;
  var curDate = new Date(startDate);
  while (curDate <= endDate) {
    var dayOfWeek = curDate.getDay();
    if (!(dayOfWeek == 6 || dayOfWeek == 0)) count++;
    curDate.setDate(curDate.getDate() + 1);
  }
  return count;
}

function ReplaceThaiAndEnglishStringSpaceCharacter(inputString) {
  if (inputString === undefined || inputString == null || inputString == "")
    return "";
  const regex = /[\u0E00-\u0E7Fa-zA-Z-!@#$%^&*+_./\\=()\[\]{}\s+\s ]/g;
  return inputString.replace(regex, "");
}

function RebuildNumberFromAnyStringMessage(inputString) {
  if (inputString === undefined || inputString == null || inputString == "")
    return "";
  var matches = inputString.match(/\d+/g);
  if (matches) {
    let newMatch = "";
    matches.forEach((value, index) => {
      newMatch += value;
    });
    return newMatch;
  } else return "";
}

function CalculationBorderOfShape(width, height, borderSide) {
  if (
    CheckIsNotNullOrEmpty(width) &&
    CheckIsNotNullOrEmpty(height) &&
    CheckIsNotNullOrEmpty(BorderSide)
  ) {
    return 2 * (width + width + borderSide * 2);
  } else return null;
}

function MoneyInterestBalance(balance, interestRate, year) {
  if (
    CheckIsNotNullOrEmpty(balance) &&
    CheckIsNotNullOrEmpty(interestRate) &&
    CheckIsNotNullOrEmpty(year)
  ) {
    interestRate = interestRate < 1 ? interestRate + 1 : interestRate;
    return balance * interestRate ** year;
  } else return null;
}

function ExcelDateToJSDateVer2(serial) {
  var utc_days = Math.floor(serial - 25569);
  var utc_value = utc_days * 86400;
  var date_info = new Date(utc_value * 1000);

  var fractional_day = serial - Math.floor(serial) + 0.0000001;

  var total_seconds = Math.floor(86400 * fractional_day);

  var seconds = total_seconds % 60;

  total_seconds -= seconds;

  var hours = Math.floor(total_seconds / (60 * 60));
  var minutes = Math.floor(total_seconds / 60) % 60;

  return new Date(
    date_info.getFullYear(),
    date_info.getMonth(),
    date_info.getDate(),
    hours,
    minutes,
    seconds
  );
}

const ConvertFirstToCap = (input) => {
  /* https://flexiple.com/javascript/javascript-capitalize-first-letter/ */
  if (input == undefined || input == null) return "";

  const arr = input.split(" ");

  for (var i = 0; i < arr.length; i++)
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  return arr.join(" ");
};

const array_column = (array, column) => array.map((e) => e[column]);

const copyTextToClipboard = (textToCopy) => {
  if (navigator?.clipboard?.writeText)
    return navigator.clipboard.writeText(textToCopy);
  else return Promise.reject("The Clipboard API is not available.");
};

const format = (value, pattern) => {
  let i = 0;
  const v = value.toString();
  return pattern.replace(/#/g, (_) => v[i++]);
};

const isoTimeStringToLocalTimeJs = (isoTimeStr) =>
  CheckIsNotNullOrEmpty(isoTimeStr) ? new Date(isoTimeStr.slice(0, -1)) : null;

const imageUrlToBase64 = async (url) => {
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;
      resolve(base64data);
    };
    reader.onerror = reject;
  });
};

// Function to convert data URI to Blob
const dataURItoBlob = async (dataURI) => {
  var byteString = atob(dataURI.split(",")[1]);
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
};

const formatString = (template, ...args) => {
  return template.replace(/{([0-9]+)}/g, function (match, index) {
    return typeof args[index] === "undefined" ? match : args[index];
  });
};

const isDateValid = (dateStr) => !isNaN(new Date(dateStr));

const CintOrIsNan = ($agument) => {
  if ($agument == null) return 0;
  if ($agument === "") return 0;
  if (typeof $agument === "undefined") return 0;
  $agument = $agument.toString().replace(",", "");
  $agument = parseInt($agument);

  if (isNaN($agument)) return $agument;

  return $agument;
};

const Cfloat = ($agument) => {
  let Parsevalue = CintOrIsNan($agument);
  if (isNaN(Parsevalue)) {
    return 0;
  } else {
    $agument = $agument.toString().replace(/,/g, "");
    return CheckIsNotNullOrEmpty($agument)
      ? Math.round($agument * 100) / 100
      : 0.0;
  }
};

const Logout = (param) => {
  localStorage.clear();
  window.location = param;
};

const LogIn = (Code, Location) => {
  if (Code != undefined && Code != null && Code != "") {
    localStorage.setItem("LoginCode", Code);
    window.location = Location;
  }
};

const CheckingLoginExist = (loginPage) => {
  let loginCode = localStorage.getItem("LoginCode");
  if (loginCode == undefined || loginCode == null || loginCode == "")
    window.location = loginPage;
  // if (login != undefined && login != null && login != "") return true;
  // else return false;
};

const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};
