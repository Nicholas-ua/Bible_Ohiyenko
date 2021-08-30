var ancers = function(latinName, cirilikName, numbersHead) {
    for (var i=1; i<=numbersHead; i++)
    {
        document.write('<a href=#' + latinName + '_' + i + '>' + cirilikName + ' ' + i + '</a>' + ' ');
    }
};

var addAncers = function(latinName, cirilikName){
    var numbersH1 = document.getElementsByTagName("H1");
    for (var i=0; i<numbersH1.length; i++)
    {
        numbersH1[i].innerHTML = '<a name="' + latinName + '_' + (i+1) + '">' + '</a>' + cirilikName + ' ' + (i+1);
    }
};