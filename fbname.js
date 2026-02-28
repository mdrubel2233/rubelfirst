function styleMapper(str, map) {
    var normal = "abcdefghijklmnopqrstuvwxyz";
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        var index = normal.indexOf(char);
        if (index !== -1) {
            result += map[index];
        } else {
            result += char;
        }
    }
    return result;
}

function processStyles() {
    var input = document.getElementById('mainInput').value;
    var maps = [
        ["д","в","с","ԁ","є","ғ","ҩ","н","ї","ј","к","г","м","и","ө","р","ҩ","я","ѕ","т","ц","ѵ","ш","х","ү","ӡ"],
        ["ẫ","ḃ","c","ȡ","ễ","f","ğ","ħ","i","ĵ","ḱ","ĺ","ḿ","ň","o","ƿ","ƍ","ř","š","t","u","v","ẁ","x","y","z"],
        ["ʌ","ɓ","c","ɗ","ɘ","ʆ","ʛ","ʜ","ɩ","j","ĸ","ɭ","ɱ","ŋ","o","p","q","ʀ","s","t","ʋ","v","w","x","ƴ","ʑ"],
        ["ᕱ","ᑿ","ᘹ","ᖱ","ᕨ","ᖴ","ᘜ","ᖺ","ᓲ","ᒏ","ᐸ","ᒸ","ᙢ","ᘉ","ᓍ","ᑷ","ᖳ","ᖆ","ᔜ","ᖶ","ᘢ","ᕓ","ᙛ","᙭","ᗂ","ᙥ"],
        ["α","β","ͼ","∂","ε","Ϝ","ϑ","Ή","ι","Ϳ","κ","Ι","Μ","η","Φ","ρ","ϕ","π","ξ","т","υ","ν","ω","χ","ψ","ζ"],
        ["α","β","ζ","δ","ε","Γ","φ","Η","ι","j","κ","Ι","Μ","η","ο","ρ","Φ","π","ξ","τ","υ","ν","ω","χ","γ","Ζ"]
    ];

    for (var j = 1; j <= 6; j++) {
        document.getElementById('r' + j).value = styleMapper(input, maps[j-1]);
    }
}

function copyText(id) {
    var copyText = document.getElementById(id);
    if(copyText.value === "") return;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    var btn = copyText.nextElementSibling;
    var originalText = btn.innerText;
    btn.innerText = "Copied!";
    btn.style.background = "#212121";
    setTimeout(function() {
        btn.innerText = originalText;
        btn.style.background = "#4caf50";
    }, 1500);
}