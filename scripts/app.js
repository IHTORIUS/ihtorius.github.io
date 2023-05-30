class Meal {
    constructor(kol, belki, jiri, ugl) {
        this.kol = kol;
        this.belki = belki;
        this.jiri = jiri;
        this.ugl = ugl;
    }
}
//LOL KEK
const bread = new Meal(944, 32, 4, 188);
const loafbread = new Meal(302, 9.5, 3.6, 56.4);
const rollton = new Meal(269, 9.6, 3.6, 56.4);
const snikers = new Meal(250, 3.8, 12.8, 29.1);
const hotdog = new Meal(300, 8.8, 18.3, 25);
const meatsoup = new Meal(175, 46.6, 26.2, 38.5);
const biscuit = new Meal(83.4, 4.7, 2.4, 15);
const cherryjam = new Meal(102.4, 0, 0, 25.6);
const egg = new Meal(78.5, 6.3, 5.4, 0.3);
const manti = new Meal(132, 7, 8, 13.8);
const shashlik = new Meal(464.4, 45.9, 30, 1.6);
const plov = new Meal(540, 31.5, 26.1, 45.3);
const potatosoup = new Meal(100, 3.5, 2.75, 16.5);
const banana = new Meal(85.5, 1.3, 0.18, 19.6);
const laysShashlik = new Meal(257.5, 3, 16, 25.5);
const laysGreen = new Meal(255, 3.2, 15, 26.5);

let arr = [bread, loafbread, rollton, snikers, hotdog, meatsoup, biscuit, cherryjam, egg, manti, shashlik, plov, potatosoup, banana, laysShashlik, laysGreen];



let diffK;
let diffB;
let diffJ;
let diffU;

function check(diff, sum) {


    if (sum.id === "KolSum") {
        if (diffK <= -100) {
            sum.style.color = "red";
            return "много";
        } else if (diffK > -100 && diffK < -1) {
            sum.style.color = "green";
            return "нормально";
        } else {
            sum.style.color = "red";
            return "нехватка";
        }
    } else if (sum.id === "BelSum") {
        if (diffK <= -20) {
            sum.style.color = "red";
            return "много";
        } else if (diffK > -20 && diffK < -1) {
            sum.style.color = "green";
            return "нормально";
        } else {
            sum.style.color = "red";
            return "нехватка";
        }
    } else if (sum.id === "JirSum") {
        if (diffK <= -10) {
            sum.style.color = "red";
            return "много";
        } else if (diffK > -10 && diffK < -1) {
            sum.style.color = "green";
            return "нормально";
        } else {
            sum.style.color = "red";
            return "нехватка";
        }
    } else if (sum.id === "UglSum") {
        if (diffK <= -20) {
            sum.style.color = "red";
            return "много";
        } else if (diffK > -20 && diffK < -1) {
            sum.style.color = "green";
            return "нормально";
        } else {
            sum.style.color = "red";
            return "нехватка";
        }
    }

}

let flag = true;
document.querySelector('.mode').onclick = () => {
    document.querySelector('.container').style.backgroundColor = flag ? 'white' : 'rgb(75, 88, 100)';
    document.querySelector('.info').style.backgroundColor = flag ? 'white' : 'rgb(75, 88, 100)';
    document.querySelector('.mode').style.backgroundColor = flag ? 'white':'yellow'
    flag = !flag;
};
document.addEventListener('change', function () {
    let totalKol = 0;
    let totalBelki = 0;
    let totalJiri = 0;
    let totalUgl = 0;
    let userK = +document.getElementById("userKol").value;
    let userB = +document.getElementById("userBelki").value;
    let userJ = +document.getElementById("userJiri").value;
    let userU = +document.getElementById("userUgl").value;

    inputs = document.querySelectorAll("input[type='number']");

    let KolSum = document.getElementById("KolSum");
    let BelSum = document.getElementById("BelSum");
    let JirSum = document.getElementById("JirSum");
    let UglSum = document.getElementById("UglSum");

    for (let i = 0; i < inputs.length; i++) {
        totalKol += arr[i].kol * inputs[i].value;
        totalBelki += arr[i].belki * inputs[i].value;
        totalJiri += arr[i].jiri * inputs[i].value;
        totalUgl += arr[i].ugl * inputs[i].value;
    }


    totalKol = totalKol.toFixed(2);
    totalBelki = totalBelki.toFixed(2);
    totalJiri = totalJiri.toFixed(2);
    totalUgl = totalUgl.toFixed(2);

    diffB = (userB - totalBelki).toFixed(2);
    diffK = (userK - totalKol).toFixed(2);
    diffJ = (userJ - totalJiri).toFixed(2);
    diffU = (userU - totalUgl).toFixed(2);

    let verdict = {
        kalor: check(diffK, KolSum),
        belki: check(diffB, BelSum),
        jiri: check(diffJ, JirSum),
        ugl: check(diffU, UglSum)
    };

    KolSum.innerHTML = `Сумма колорий: ${totalKol} (разница ${diffK}) - ${verdict.kalor}`;
    BelSum.innerHTML = `Сумма белков: ${totalBelki} (разница ${diffB}) - ${verdict.belki}`;
    JirSum.innerHTML = `Сумма жиров: ${totalJiri} (разница ${diffJ}) - ${verdict.jiri}`;
    UglSum.innerHTML = `Сумма углеводов: ${totalUgl} (разница ${diffU}) - ${verdict.ugl}`;
})


if (document.location.reload) {
    let inputs = document.querySelectorAll("input[type='number']");
    inputs.forEach(item => {
        item.value = 0;
    })
}