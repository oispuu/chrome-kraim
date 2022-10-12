var ahjud = 'https://punane.crime.ee/index.php?asukoht=house&tegevus=ovens';
var rauatükid = 'asukoht=slumm&paik=4';
var ostaSelector = 'input[name="purchcrafitem"]';
var tostaText = 'Tõsta need nüüd seljakotist kappi';
var kasitooTarbed = 'asukoht=house&tegevus=materialsstorage';
var tostaSelector = 'input[name="ktookappi"]';
var mineText = 'Mine turule';

checkYoself = () => {
    if (window.location.href === ahjud) {
        console.warn('Lähme turule');
    } else if (window.location.href.includes(rauatükid)) {
        var xpath = "//a[contains(text(),'" + tostaText + "')]";
        var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
        if (matchingElement) {
            matchingElement.click();
        } else {
            ostaBtn = document.querySelectorAll(ostaSelector)[0];
            ostaBtn.click();
        }
    } else if (window.location.href.includes(kasitooTarbed)) {
        var xpath = "//a[contains(text(),'" + mineText + "')]";
        var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
        if (matchingElement) {
            matchingElement.click();
        } else {
            tostaBtn = document.querySelectorAll(tostaSelector)[0];
            tostaBtn.click();
        }
    }
}

checkYoself();