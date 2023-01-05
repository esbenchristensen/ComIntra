//Fordi JavaScript hader at læse filer, er dataen kopieret herind i stedet
const OrdersArray = [
    218, 231, 292, 140, 199, 268, 276, 103, 46, 119, 
    72, 82, 38, 275, 30, 75, 150, 34, 98, 250, 
    161, 54, 60, 110, 123, 44, 54, 233, 244, 213,
    154, 77, 292, 246, 175, 82, 164, 278, 44, 105,
    279, 128, 187, 235, 252, 71, 158, 215, 253, 96,
    168, 267, 94, 269, 98, 65, 93, 154, 284, 240,
    191, 87, 92, 214, 236, 83, 145, 259, 167, 197,
    53, 268, 78, 225, 186, 261, 78, 175, 30, 253,
    251, 189, 82, 46, 253, 67, 292, 168, 239, 292,
    206, 100, 228, 265, 154, 201, 185, 244, 218, 178,
    64, 118, 48, 158, 86, 54, 102, 41, 206, 247,
    224, 198, 44, 175, 286, 241, 111, 71, 192, 205,
    214, 139];

const PrecisionArray = [
    87, 75, 96, 77, 73, 95, 81, 88, 95, 88, 
    75, 81, 77, 94, 74, 72, 81, 85, 95, 98,
    85, 84, 90, 77, 73, 80, 92, 87, 89, 98,
    74, 85, 94, 87, 96, 80, 82, 79, 91, 95,
    89, 78, 71, 74, 94, 98, 71, 73, 70, 93,
    98, 96, 100, 89, 91, 93, 77, 96, 71, 98,
    80, 95, 88, 99, 78, 72, 95, 91, 99, 96,
    97, 85, 77, 84, 76, 94, 73, 77, 89, 92,
    84, 91, 91, 74, 99, 76, 96, 94, 75, 80,
    77, 99, 73, 90, 78, 91, 95, 70, 93, 82,
    73, 95, 94, 92, 100, 88, 85, 80, 90, 78,
    91, 74, 79, 70, 88, 87, 88, 80, 87, 76,
    88, 84];

const ErrorsArray = [
    3, 0, 1, 0, 0, 0, 0, 0, 1, 0,
    2, 0, 1, 0, 0, 1, 0, 4, 0, 0,
    0, 0, 1, 0, 0, 5, 0, 0, 1, 0,
    0, 0, 1, 0, 1, 0, 0, 0, 3, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 1, 0, 1, 0, 0, 0, 0, 1, 0,
    0, 1, 2, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
    1, 0];

//Datasæt constructor
function KPISet(day, orders, precision, errors) {
    this.Day = day;
    this.Orders = orders;
    this.Precision = precision;
    this.Errors = errors;
}

let lastSorted = "";
let invertCount = 0;

const CheckValid = new Set();
const KPISets = [];

window.onload = PageStartup();

function PageStartup() {
    CompileSets();
    FillTable();
    SortButtonFunctionality();
    AverageDeviationMedian();
}

//Samler data fra tidligere tabeller til datasæt
function CompileSets() {
    for (i = 0; i < OrdersArray.length; i++) {
        var obj = new KPISet(i+1, OrdersArray[i], PrecisionArray[i], ErrorsArray[i]);
        KPISets.push(obj);
    }
}

//Skaber tabellen og fylder den ud med (allerede) dag-sorteret data
function FillTable() {
    for (i = 0; i < KPISets.length; i++) {
        let tableRow = document.createElement("tr");

        let tableDay = document.createElement("td");
        tableDay.innerText = KPISets[i].Day;
        tableDay.setAttribute("id", i + ".Day");
        tableRow.appendChild(tableDay);

        let tableOrders = document.createElement("td");
        tableOrders.innerText = KPISets[i].Orders;
        tableOrders.setAttribute("id", i + ".Orders");
        tableRow.appendChild(tableOrders);

        let tablePrecision = document.createElement("td");
        tablePrecision.innerText = KPISets[i].Precision + "%";
        tablePrecision.setAttribute("id", i + ".Precision");
        tableRow.appendChild(tablePrecision);

        let tableErrors = document.createElement("td");
        tableErrors.innerText = KPISets[i].Errors;
        tableErrors.setAttribute("id", i + ".Errors");
        tableRow.appendChild(tableErrors);

        document.getElementById("kpitabel").appendChild(tableRow);
    }
}

//Tilføjer klikfunktioner til sorteringsknapper i tabellen og sørger for, de sender de rigtige overloads
function SortButtonFunctionality() {
    document.getElementById("btnSortDay").onclick = () => SortTable("Day");
    document.getElementById("btnSortOrders").onclick = () => SortTable("Orders");
    document.getElementById("btnSortPrecision").onclick = () => SortTable("Precision");
    document.getElementById("btnSortErrors").onclick = () => SortTable("Errors");
}

//Universel funktion, der tilføjer rækker til den anden tabel på siden
function AddToTable(type, o, p, e) {
    let tableRow = document.createElement("tr");

    let tableType = document.createElement("td");
    tableType.innerText = type;
    tableRow.appendChild(tableType);

    let tableOrderAvg = document.createElement("td");
    if (type != "Median:") {
        tableOrderAvg.innerText = o.toFixed(2);
    }
    else {
        tableOrderAvg.innerText = o;
    }
    tableRow.appendChild(tableOrderAvg);

    let tablePrecisionAvg = document.createElement("td");
    if (type != "Median:") {
        tablePrecisionAvg.innerText = p.toFixed(2) + "%";
    }
    else {
        tablePrecisionAvg.innerText = p + "%";
    }
    tableRow.appendChild(tablePrecisionAvg);

    let tableErrorAvg = document.createElement("td");
    if (type != "Median:") {
        tableErrorAvg.innerText = e.toFixed(2);
    }
    else {
        tableErrorAvg.innerText = e;
    }
    tableRow.appendChild(tableErrorAvg);

    document.getElementById("avgmed").appendChild(tableRow);
}

//Regner værdierne ud til den anden tabel på siden
function AverageDeviationMedian() {
    //Gennemsnit
    let orderSum = 0;
    let precisionSum = 0;
    let errorSum = 0;

    for (i = 0; i < KPISets.length; i++) {
        orderSum += KPISets[i].Orders;
        precisionSum += KPISets[i].Precision;
        errorSum += KPISets[i].Errors;
    }

    let orderAvg = orderSum / KPISets.length;
    let precisionAvg = precisionSum / KPISets.length;
    let errorAvg = errorSum / KPISets.length;

    AddToTable("Gennemsnit:", orderAvg, precisionAvg, errorAvg);


    //Standard Afvigelse
    let orderSquared = 0;
    let precisionSquared = 0;
    let errorSquared = 0;

    for (i = 0; i < KPISets.length; i++) {
        orderSquared += Math.pow(KPISets[i].Orders - orderAvg, 2);
        precisionSquared += Math.pow(KPISets[i].Precision - precisionAvg, 2);
        errorSquared += Math.pow(KPISets[i].Errors - errorAvg, 2);
    }

    AddToTable("Standard afvigelse:", Math.sqrt(orderSquared / KPISets.length), Math.sqrt(precisionSquared / KPISets.length), Math.sqrt(errorSquared / KPISets.length));


    //Median
    let medianIndex = 0;
    let medianIndexx = 0;
    let orderMedian = 0;
    let precisionMedian = 0;
    let errorMedian = 0;

    //Laver 3 arrays ud fra KPI data, så de sorteres separat, og ikke med hele sættet
    let MedianOrdersArray = KPISets.map(a => a.Orders);
    let MedianPrecisionArray = KPISets.map(a => a.Precision);
    let MedianErrorsArray = KPISets.map(a => a.Errors);

    //Sorterer de 3 arrays. Klag helst ikke til bossen over, at sort() er brugt her for simplicitetens skyld
    MedianOrdersArray.sort((a, b) => {
        return a - b;
    });
    MedianPrecisionArray.sort((a, b) => {
        return a - b;
    });
    MedianErrorsArray.sort((a, b) => {
        return a - b;
    });

    //Hvis talsættet har et lige antal tal, fx 122, tager den gennemsnittet af 61 og 62
    if (KPISets.length % 2 == 0) { 
        medianIndex = (KPISets.length / 2) - 1;
        medianIndexx = KPISets.length / 2;
        orderMedian = (MedianOrdersArray[medianIndex] + MedianOrdersArray[medianIndexx]) / 2;
        precisionMedian = (MedianPrecisionArray[medianIndex] + MedianPrecisionArray[medianIndexx]) / 2;
        errorMedian = (MedianErrorsArray[medianIndex] + MedianErrorsArray[medianIndexx]) / 2;
    }
    else {
        medianIndex = ((KPISets.length + 1) / 2) - 1;
        orderMedian = MedianOrdersArray[medianIndex];
        precisionMedian = MedianPrecisionArray[medianIndex];
        errorMedian = MedianErrorsArray[medianIndex];
    }

    AddToTable("Median:", orderMedian, precisionMedian, errorMedian);
}

function SortTable(property) { //property her er substitut for properties i datasæt, for at undgå gentagelser
    let DataToSort = KPISets;
    let invert = false;

    //Tjekker, om man har trykket en lige (sorter normalt) eller ulige (sorter omvendt) mængde gange på en specifik sorteringsknap
    if (lastSorted == property && invertCount == 0) {
        invert = true;
        invertCount++;
    }
    else if (lastSorted == property && invertCount == 1) {
        invertCount--;
    }
    else {
        invertCount = 0;
    }

    let temp;
    let finished = false;
    
    //Bubblesort, som jeg husker det, med en forhåbentlig ikke langsom stopklods, så den ikke altid kører O(n^2), hvis den kan undgå det
    //Sorterer mindst til størst
    if (invert) { 
        while (!finished) {
            for (i = 0; i < DataToSort.length - 1; i++) {
                if (DataToSort[i][property] > DataToSort[i+1][property]) {
                    temp = DataToSort[i+1];
                    DataToSort[i+1] = DataToSort[i];
                    DataToSort[i] = temp;
                    CheckValid.add(0);
                }
            }
            //Et forsøg på at undgå O(n^2), da Set.has() har en Big O på O(1) til O(log(n)), afhængig af version. Der behøves kun 1 værdi her, så den er altid O(1) :)
            if (!CheckValid.has(0)) { 
                finished = true;
            }
            CheckValid.clear();
        }
    }

    //Sorterer størst til mindst
    else { 
        while (!finished) {
            for (i = 0; i < DataToSort.length - 1; i++) {
                if (DataToSort[i][property] < DataToSort[i+1][property]) {
                    temp = DataToSort[i+1];
                    DataToSort[i+1] = DataToSort[i];
                    DataToSort[i] = temp;
                    CheckValid.add(0);
                }
            }
            if (!CheckValid.has(0)) {
                finished = true;
            }
            CheckValid.clear();
        }
    }

    lastSorted = property;
    UpdateTable(DataToSort);
}

//Fylder tabellen på siden ud med nye, sorterede tal
function UpdateTable(SortedData) {
    for (i = 0; i < SortedData.length; i++) {
        let dayField = document.getElementById(i + ".Day");
        dayField.innerText = SortedData[i].Day;

        let ordersField = document.getElementById(i + ".Orders");
        ordersField.innerText = SortedData[i].Orders;

        let precisionField = document.getElementById(i + ".Precision");
        precisionField.innerText = SortedData[i].Precision + "%";

        let errorsField = document.getElementById(i + ".Errors");
        errorsField.innerText = SortedData[i].Errors;
    }
}