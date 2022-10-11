const ahjud = 'https://punane.crime.ee/index.php?asukoht=house&tegevus=ovens';
const rauatükid = 'asukoht=slumm&paik=4';
const ostaSelector = 'input[name="purchcrafitem"]';
const tostaText = 'Tõsta need nüüd seljakotist kappi';
const kasitooTarbed = 'asukoht=house&tegevus=materialsstorage';
const tostaSelector = 'input[name="ktookappi"]';
const mineText = 'Mine turule';

if (window.location.href === ahjud) {
    console.warn('Lähme turule');
} else if (window.location.href.includes(rauatükid)) {
    var xpath = "//a[contains(text(),'" + tostaText + "')]";
    var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (matchingElement) {
        console.warn('Tostame');
    } else {
        ostaBtn = document.querySelectorAll(ostaSelector)[0];
        console.warn('Triggerin', ostaBtn);
    }
} else if (window.location.href.includes(kasitooTarbed)) {
    var xpath = "//a[contains(text(),'" + mineText + "')]";
    var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (matchingElement) {
        console.warn('Lähme');
    } else {
        tostaBtn = document.querySelectorAll(tostaSelector);
        console.warn('Triggerin', tostaBtn);
    }
}