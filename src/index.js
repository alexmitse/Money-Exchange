module.exports = function makeExchange(currency) {
    let obj = {};
    if(currency>=10000){{
        obj.error="You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }
    }
    if (currency >= 50) {
        let nH = currency / 50;
        nH = Math.floor(nH);
        currency -= 50 * nH;
        obj.H = nH;
    }
    if (currency >= 25) {
        let nQ = currency / 25;
        nQ = Math.floor(nQ);
        currency -= 25 * nQ;
        obj.Q = nQ;
    }
    if (currency >= 10) {
        let nD = currency / 10;
        nD = Math.floor(nD);
        currency -= 10 * nD;
        obj.D = nD;
    }
    if (currency >= 5) {
        let nN = currency / 5;
        nN = Math.floor(nN);
        currency -= 5 * nN;
        obj.N = nN;
    }
    if (currency >= 1) {
        let nP = currency / 1;
        nP = Math.floor(nP);
        currency -= nP;
        obj.P = nP;
    }

    return obj;
}
