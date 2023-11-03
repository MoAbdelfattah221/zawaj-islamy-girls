//bot token
var telegram_bot_id = "6663116848:AAFx6AJ_VMFkoih_BqwoOb6cD3nAlxWmmkU";
//chat id
var chat_id = 6160068600;
// Input Fields
var message, userName, phone, job;
var age, height, weight;
var skin, maritalStatus, procreation;
var yourChildrenIfHave, maritalStatus;
var qualification, fatherWork, motherWork;
var residence, prayers, flat;
var nationality, currentResidence;
var bearded, smoker, musicAndMovies;
var siblingsAmdCollege;
var maritalMovables;
var diseasesOrDisabilities, haveAProblemWithDiseasesOrDisabilities;
var pictureOfTheWoman, quran;
var brief;
var specifications;
var brideMaritalStatus, divorcedOrWidowedWithoutChildren;
var divorcedOrWidowedWithChildren, divorcedHerChildrenInFatherCustody;
var acceptMarriageToAnotherNationality, acceptBrideFromAnotherState;
var rightAge, brideSkin, HijabOrNiqab, brideQualification;


// Main Functions
var ready = function () {
    userName = document.getElementById("name").value;
    phone = document.getElementById("phone").value;
    job = document.getElementById("job").value;
    
    age = document.getElementById("age").value;
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;
    
    skin = document.getElementById("skin").value;
    maritalStatus = document.getElementById("maritalStatus").value;
    procreation = document.getElementById("procreation").value;
    
    yourChildrenIfHave = document.getElementById("yourChildrenIfHave").value;
    exTimes = document.getElementById("exTimes").value;
    
    qualification = document.getElementById("qualification").value;
    fatherWork = document.getElementById("fatherWork").value;
    motherWork = document.getElementById("motherWork").value;
    
    residence = document.getElementById("residence").value;
    prayers = document.getElementById("prayers").value;
    flat = document.getElementById("flat").value;
    
    nationality = document.getElementById("nationality").value;
    currentResidence = document.getElementById("currentResidence").value;
    
    bearded = document.getElementById("bearded").value;
    smoker = document.getElementById("smoker").value;
    musicAndMovies = document.getElementById("musicAndMovies").value;
    
    siblingsAmdCollege = document.getElementById("siblingsAmdCollege").value;
    
    maritalMovables = document.getElementById("maritalMovables").value;
    
    diseasesOrDisabilities = document.getElementById("diseasesOrDisabilities").value;
    haveAProblemWithDiseasesOrDisabilities = document.getElementById("haveAProblemWithDiseasesOrDisabilities").value;
    
    pictureOfTheWoman = document.getElementById("pictureOfTheWoman").value;
    quran = document.getElementById("quran").value;
    
    brief = document.getElementById("brief").value;
    
    specifications = document.getElementById("specifications").value;
    
    brideMaritalStatus = document.getElementById("brideMaritalStatus").value;
    divorcedOrWidowedWithoutChildren = document.getElementById("divorcedOrWidowedWithoutChildren").value;
    
    divorcedOrWidowedWithChildren = document.getElementById("divorcedOrWidowedWithChildren").value;
    divorcedHerChildrenInFatherCustody = document.getElementById("divorcedHerChildrenInFatherCustody").value;
    
    acceptMarriageToAnotherNationality = document.getElementById("acceptMarriageToAnotherNationality").value;
    acceptBrideFromAnotherState = document.getElementById("acceptBrideFromAnotherState").value;
    
    rightAge = document.getElementById("rightAge").value;
    brideSkin = document.getElementById("brideSkin").value;
    hijabOrNiqab = document.getElementById("hijabOrNiqab").value;
    brideQualification = document.getElementById("brideQualification").value;
    
    
    message = document.getElementById("message").value;
    message = 
        "\nالإسم: " + userName +
        "\nرقم الهاتف: " + phone +
        "\nالعمل: " + job +

        "\nالسن: " + age +
        "\nالطول: " + height +
        "\nالوزن: " + weight +
        
        "\nلون البشرة: " + skin +
        "\nالحالة الإجتماعية: " + maritalStatus +
        "\nرغبة في الإنجاب: " + procreation +
        
        "\nعدد الاولاد واعمارهم ان وجد: " + yourChildrenIfHave +
        "\nكم مره ارتبطت: " + exTimes +
        
        "\nالمؤهل: " + qualification +
        "\nعمل الوالد: " + fatherWork +
        "\nعمل الوالدة: " + motherWork +
        
        "\nسكن الزوجية: " + residence +
        "\nالمحافظة علي الصلاة: " + prayers +
        "\nالشقة ستكون: " + flat +
    
        "\nالجنسبة: " + nationality +
        "\nمكان الإقامة الحالي: " + currentResidence +
        
        "\nملتحي: " + bearded +
        "\nمدخن: " + smoker +
        "\nنسمع الاغاني والافلام: " + musicAndMovies +
        
        "\nالإخوة وكليتهم: " + siblingsAmdCollege +
        
        "\nالقايمة و المقدرة علي فرش الشقة بلكامل: " + maritalMovables +
        
        "\nالمعاناة من امراض او اعاقات: " + diseasesOrDisabilities +
        "\nالقدرة علي مراسلة من لديها امراض او اعاقات: " + haveAProblemWithDiseasesOrDisabilities +
        
        "\nشرط الصورة: " + pictureOfTheWoman +
        "\nمقدار حفظ القرأن: " + quran +
        
        "\nنبذه عن نفسك: " + brief +
        
        "\nمواصفات الزوجة: " + specifications +
        
        "\nالحالة الإجتماعية للزوجة: " + brideMaritalStatus +
        "\nمطلقة او ارمله بدون اطفال: " + divorcedOrWidowedWithoutChildren +
        
        "\nمطلفة او ارمله معها اطفال: " + divorcedOrWidowedWithChildren +
        "\nمطلقة واطفالها في حضانوة والدهم: " + divorcedHerChildrenInFatherCustody +
        
        "\nالزواج من جنسية اخري: " + acceptMarriageToAnotherNationality +
        "\nالزواج من محافظة اخري: " + acceptBrideFromAnotherState +
        
        "\nالسن المناسب: " + rightAge +
        "\nلون بشرة العروسة: " + brideSkin +
        "\nنوع الحجاب: " + hijabOrNiqab +
        "\nمؤهل العروسة: " + brideQualification +

        "\nإضافات: " + message;
};
console.log(userName);
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("job").value = "";
    
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    
    document.getElementById("skin").value = "";
    document.getElementById("maritalStatus").value = "";
    document.getElementById("procreation").value = "";
    
    document.getElementById("yourChildrenIfHave").value = "";
    document.getElementById("exTimes").value = "";
    
    document.getElementById("qualification").value = "";
    document.getElementById("fatherWork").value = "";
    document.getElementById("motherWork").value = "";
    
    document.getElementById("residence").value = "";
    document.getElementById("prayers").value = "";
    document.getElementById("flat").value = "";
    
    document.getElementById("nationality").value = "";
    document.getElementById("currentResidence").value = "";
    
    document.getElementById("bearded").value = "";
    document.getElementById("smoker").value = "";
    document.getElementById("musicAndMovies").value = "";
    
    document.getElementById("siblingsAmdCollege").value = "";
    
    document.getElementById("maritalMovables").value = "";
    
    document.getElementById("diseasesOrDisabilities").value = "";
    document.getElementById("haveAProblemWithDiseasesOrDisabilities").value = "";
    
    document.getElementById("pictureOfTheWoman").value = "";
    document.getElementById("quran").value = "";
    
    document.getElementById("brief").value = "";
    
    document.getElementById("specifications").value = "";
    
    document.getElementById("brideMaritalStatus").value = "";
    document.getElementById("divorcedOrWidowedWithoutChildren").value = "";
    
    document.getElementById("divorcedOrWidowedWithChildren").value = "";
    document.getElementById("divorcedHerChildrenInFatherCustody").value = "";
    
    document.getElementById("acceptMarriageToAnotherNationality").value = "";
    document.getElementById("acceptBrideFromAnotherState").value = "";
    
    document.getElementById("rightAge").value = "";
    document.getElementById("brideSkin").value = "";
    document.getElementById("hijabOrNiqab").value = "";
    document.getElementById("brideQualification").value = "";


    return false;
};