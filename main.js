var text = [...
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
]

function convert() {
    var alphabet = document.getElementById("area1").value;
    isnoal = alphabet.match(/[^a-z]/gi)
    if (isnoal) {
        document.getElementById('result').textContent = 'アルファベットのみ入力してください。';
    } else {
        var alphabet = alphabet.toUpperCase();
        var list = [...alphabet];
        var resultlist = [];
        for (var i = 0; i < list.length; i++) {
            resultlist.push(('00' + (text.indexOf(list[i]) + 1)).slice(-2));
        }
        document.getElementById('result').textContent = resultlist.join('');

    }
}