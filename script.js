function findLocation() {
    let code = document.getElementById("codeInput").value.trim().toUpperCase();
    code = code.replace(/\s+/g, '');  // Remove any spaces
    let result = "";

    const specialCases = {
        'HLH001': {
            en: 'Auditorium 1',
            ar: 'قاعة المحاضرات 1'
        },
        'J101': {
            en: 'Auditorium 2',
            ar: 'قاعة المحاضرات 2'
        },
        'CRI122': {
            en: 'Human Sciences Floor 1 Room 22',
            ar: 'علوم إنسانية الدور 1 الغرفة 22'
        },
        'CRI242': {
            en: 'Human Sciences Floor 2 Room 42',
            ar: 'علوم إنسانية الدور 2 الغرفة 42'
        },
        'CRI246': {
            en: 'Human Sciences Floor 2 Room 46',
            ar: 'علوم إنسانية الدور 2 الغرفة 46'
        },
        'GCR201': {
            en: 'Pharmacy Floor 2 Room 01',
            ar: 'صيدلة الدور 2 الغرفة 01'
        },
        'GCR301': {
            en: 'Pharmacy Floor 3 Room 01',
            ar: 'صيدلة الدور 3 الغرفة 01'
        },
        'GLH001': {
            en: 'Pharmacy Lecture Hall Ground Floor Room 001',
            ar: 'صيدلة قاعة المحاضرات الدور الأرضي الغرفة 001'
        }
    };

    if (specialCases[code]) {
        const lang = currentLang === 'en' ? 'en' : 'ar';
        result = specialCases[code][lang];
    } else {
        const isLectureHall = code.includes("LH");
        const isClassRoom = code.includes("CR");
        let buildingLetter = code[0];
        let floor = "";
        let room = "";

        if (isLectureHall) {
            const lhParts = code.split("LH");
            if (lhParts[0].length === 1 && lhParts[1].length > 0) {
                buildingLetter = lhParts[0][0];
                floor = lhParts[1][0]; 
                room = lhParts[1].substring(1); 
            }
        } else if (isClassRoom) {
            const crParts = code.split("CR");
            if (crParts[0].length === 1 && crParts[1].length > 0) {
                buildingLetter = crParts[0][0];
                floor = crParts[1][0]; 
                room = crParts[1].substring(1);
            }
        } else {
            if (code.length === 4) { 
                floor = code[1];
                room = code.substring(2);
            } else if (code.length === 5) { 
                floor = code[1];
                room = code.substring(2);
            } else if (code.length === 6) { 
                floor = code[2]; 
                room = code.substring(3);
            }
        }

        const buildings = {
            'M': {
                en: 'Administrative building',
                ar: 'المبنى الإداري'
            },
            'A': {
                en: 'Applied Health Sciences Technology',
                ar: 'تكنولوجيا العلوم الصحية التطبيقية'
            },
            'B': {
                en: 'Physical Therapy',
                ar: 'العلاج الطبيعي'
            },
            'C': {
                en: 'Dentistry',
                ar: 'طب الأسنان'
            },
            'D': {
                en: 'Medicine',
                ar: 'الطب'
            },
            'E': {
                en: 'Nursing',
                ar: 'التمريض'
            },
            'G': {
                en: 'Pharmacy',
                ar: 'الصيدلة'
            },
            'H': {
                en: 'Administrative Sciences',
                ar: 'العلوم الإدارية'
            },
            'I': {
                en: 'Social and Human Sciences',
                ar: 'العلوم الإنسانية والاجتماعية'
            },
            'J': {
                en: 'Media Production',
                ar: 'إنتاج الإعلام'
            },
            'K': {
                en: 'Food Industries',
                ar: 'الصناعات الغذائية'
            },
            'L': {
                en: 'Art and Design',
                ar: 'الفنون والتصميم'
            },
            'N': {
                en: 'Engineering',
                ar: 'الهندسة'
            },
            'O': {
                en: 'Architecture',
                ar: 'الهندسة المعمارية'
            },
            'P': {
                en: 'Computer Sciences and Engineering',
                ar: 'علوم وهندسة الحاسوب'
            },
            'Q': {
                en: 'Science',
                ar: 'العلوم'
            }
        };

        if (buildings[buildingLetter]) {
            const lang = currentLang === 'en' ? 'en' : 'ar';
            result = `${buildings[buildingLetter][lang]}`;
            if (isLectureHall) {
                result += lang === 'en' ? `, Lecture Hall` : `, قاعة المحاضرات`;
            } else if (isClassRoom) {
                result += lang === 'en' ? `, Class Room` : `, غرفة الصف`;
            }
            if (floor) {
                if (floor === "G") {
                    result += lang === 'en' ? `, Ground floor` : `, الطابق الأرضي`;
                } else {
                    result += lang === 'en' ? `, ${floor}th floor` : `, الطابق ${floor}`;
                }
            }
            if (room) {
                result += lang === 'en' ? `, Room ${room}` : `, الغرفة ${room}`;
            }
        } else {
            result = currentLang === 'en' ? "Invalid code, please try again!" : "رمز غير صالح، يرجى المحاولة مرة أخرى!";
        }
    }

    // Display the result
    document.getElementById("result").innerHTML = result;
}

function changeToArabic() {
    // Change the text content to Arabic
    document.getElementById("title").textContent = "محدد المحاضرات من سبيد وعلي";
    document.getElementById("subtitle").textContent = "لديك كود محاضرة أو معمل ولا تعرف مكانه؟ اكتب الكود هنا [جرب مع مسافات (J 301) أو بدون مسافات (J301)] ودع السحر يحدث.";
    document.getElementById("submitButton").textContent = "ابحث عن المحاضرة";
    document.getElementById("mapInfo").textContent = "الخريطة التفاعلية للجامعة قريباً! استخدم الخريطة الثابتة الآن.";
    document.getElementById("buildingColorsTitle").textContent = "ألوان المباني";
    document.getElementById("arabicButton").textContent = "العودة إلى الإنجليزية";

    // Optionally change the placeholder for the input box
    document.getElementById("codeInput").setAttribute("placeholder", "اكتب كود المحاضرة / المعمل هنا");

    // Change the button function to switch back to English
    document.getElementById("arabicButton").removeEventListener("click", changeToArabic);
    document.getElementById("arabicButton").addEventListener("click", changeToEnglish);
}

function changeToEnglish() {
    // Revert text content to English
    document.getElementById("title").textContent = "SPEED & Ali's Lecture Finder";
    document.getElementById("subtitle").textContent = "Got lecture / lab code and don't know where it is? Write the code down there with [Try with Spaces ( J 301 ) or with no Spaces ( J301) ] and let the magic happen.";
    document.getElementById("submitButton").textContent = "Find My Lec.";
    document.getElementById("mapInfo").textContent = "University Interactive Map Soon!, So Use the static one for now :D.";
    document.getElementById("buildingColorsTitle").textContent = "Building Colors";
    document.getElementById("arabicButton").textContent = "Change to Arabic";

    // Optionally revert the placeholder for the input box
    document.getElementById("codeInput").setAttribute("placeholder", "Type lecture / lab code here");

    // Change the button function to switch back to Arabic
    document.getElementById("arabicButton").removeEventListener("click", changeToEnglish);
    document.getElementById("arabicButton").addEventListener("click", changeToArabic);
}

function findLocation() {
    // Example logic to handle location finding based on input
    const codeInput = document.getElementById("codeInput").value.toUpperCase();
    let result = "";

    switch(codeInput) {
        case "A 101":
        case "A101":
            result = "Building A: Applied Health Sciences Technology";
            break;
        case "B 102":
        case "B102":
            result = "Building B: Physical Therapy";
            break;
        // Add more cases for different codes
        default:
            result = "Code not found. Please try again.";
    }

    document.getElementById("result").textContent = result;
}
