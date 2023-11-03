//bot token
var telegram_bot_id = "6663116848:AAFx6AJ_VMFkoih_BqwoOb6cD3nAlxWmmkU";
//chat id
var chat_id = 6160068600;
// Input Fields
var message, userName, phone, job;
var age, height, weight;
var skin, maritalStatus, procreation;
var children, exTimes;
var qualification, residence, prayers;
var nationality, religiousAffiliations;

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
    
    children = document.getElementById("children").value;
    exTimes = document.getElementById("exTimes").value;
    
    qualification = document.getElementById("qualification").value;
    residence = document.getElementById("residence").value;
    prayers = document.getElementById("prayers").value;
    
    nationality = document.getElementById("nationality").value;
    religiousAffiliations = document.getElementById("religiousAffiliations").value;
    
    
    
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

        "\n عدد الأولاد وأعمارهم وحضانتهم مع مين اذا وجد : " + children +
        "\n كم مرة ارتبطت   (كم خطوبه او كم عقد زواج) : " + exTimes +
        
        "\n المؤهل: " + qualification +
        "\n مكان الإقامة : " + residence +
        "\n هل تحافظي علي الصلوات الخمس : " + prayers +
        
        "\n الجنسية والاصل من اي محافظة : " + nationality +
        "\n هل لديك انتماءات دينية : " + religiousAffiliations +


        "\nإضافات: " + message;
};

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

    return false;
};