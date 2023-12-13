// addObjectProperty.js

function addObjectProperty(obj) {
    if (obj.hasOwnProperty('kaina')) {
        return "Objektas jau turi kainą!";
    } else {
        obj.kaina = 50;
        return obj;
    }
}

module.exports = addObjectProperty;
