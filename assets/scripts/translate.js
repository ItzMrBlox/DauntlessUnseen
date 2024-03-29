const UnseenLanguage = ["ㅏ", "Б", "б", "C", "𑀘", "Δ", "Э", "Ф", "Γ", "ㅎ", "И", "𑀛", "ㅈ", "ㅋ", "Λ", "ㅁ", "N", "𑀦", "Ω", "Π", "Q", "ㄹ", "Σ", "T", "U", "V", "𑀯", "З"]
const EnglishLanguage = ["A", "B", "B", "C", "C", "D", "E", "F", "G", "H", "I", "J", "J", "K", "L", "M", "N", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "V", "Z"]

const pattern = /   |­ ­ ­­ ­ ­/;

function TranslateFromUnseen() 
{
    var Translation = document.getElementById("Unseen").value.replace(/\s/gs, ' ');

    var sentence = Array.from(Translation);
    for (let i = 0; i < sentence.length; i++) 
    {
        var charNum = UnseenLanguage.indexOf(sentence[i]);
        sentence[i] = (charNum == -1) ? sentence[i] : EnglishLanguage[charNum]
    }

    var splitSentence = sentence.join('').toLowerCase().split(pattern);
    var complete = splitSentence.join(' ');
    try {
        document.getElementById('English').value = (complete[0].toLocaleUpperCase() + complete.slice(1));
    } 
    catch (error) {
        document.getElementById('English').value = "";
    }
    
}



function TranslateFromEnglish() {

    var TranslationEng = document.getElementById("English").value.toUpperCase();

    var sentence = Array.from(TranslationEng);
    for (let i = 0; i < sentence.length; i++) {
        var charNum = EnglishLanguage.indexOf(sentence[i]);
        sentence[i] = (charNum == -1) ? sentence[i] : UnseenLanguage[charNum]
    }

    var end = sentence.join('');
    var endUnseen = end.split(' ');

    document.getElementById('Unseen').value = endUnseen.join('   ');
}