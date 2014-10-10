/*******TEST PERFORMANCE IMPLEMENTTION********/
console.time("performance");
//block test performance: es una aproximacion del tiempo de ejecuacion del script!!!
console.timeEnd('performance');


/*******TEST PERFORMANCE IMPLEMENTTION, speed test class********/
var SpeedTest = function(testImplement, testParams, repetitions){
    this.testImplement = testImplement;
    this.testParams = testParams;
    this.repetitions = repetitions || 10000; //default speed test average
    this.average = 0;
};

SpeedTest.prototype = {
    startTest: function(){
        var beginTime,
            endTime,
            sumTimes = 0,
            arrList = this.repetitions;
        for (var i = 0, len = arrList.length; i < len; i++) {
            beginTime = +new Date();
            this.testImplement(this.testParams);
            endTime = +new Date();
            sumTimes += beginTime - endTime;
        };
        this.average = sumTimes / this.repetitions;
        return console.log( "Average excution across "+
                            this.repetitions+" times = "+
                            this.average+" milseg.");
    }
};

//EJEMPLO: encapsulamos el bloque de codigo a testear dentro de un scope
var BP = function(){
    var firstRegimentNovice = ["Kink Kong", "Hercules", "Atila", "Sandocan"],
        firstRegimentKnights = [],
        arrList = firstRegimentNovice;

    for (var i = 0, len = arrList.length; i < len; i++) {
        var newKnight = new createWeaponHero(arrList[i], "King");
        firstRegimentKnights.push(newKnight);
    };
};

var BPtest = new SpeedTest(BP);
BPtest.startTest();