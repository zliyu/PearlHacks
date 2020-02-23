// var url = "./chemreact.csv";
// var request = new XMLHttpRequest();  
// request.open("GET", url, false);   
// request.send(null);  
// var csvData = request.responseText;
// //console.log(csvData);
// var data = $.csv.toObjects(csvData);
// //alert(data[0].name);
var initialData = [
    {
      "id": 0,
      "name": "R2CH=CHR2 + HCl -> RCH2CH(Cl)R",
      "elt": "Carbon, Hydrogen, Chlorine, Bromine, Alkene, Haloalkane",
      "elt_en": "C, H, Cl, Br, =",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Markovnikov's rule",
      "d2": "Regioselective and regiospecific",
      "d3": "Rearrangement may occur"
    },
    {
      "id": 1,
      "name": "R2CH=CHR2 + H2O + H2SO4 -> RCH2CH(OH)R",
      "elt": "Carbon, Hydrogen, Oxygen, Alkene, Alcohol",
      "elt_en": "C, H , O, =, ROH",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Markovnikov's Rule",
      "d2": "Not preferred as reaction is highly reversible",
      "d3": "Low temperature and high concentration favor the formation of alcohol"
    },
    {
      "id": 2,
      "name": "R2CH=CHR2 + Br2/Cl2 -> RCH(Br/Cl)CH(Br/Cl)R",
      "elt": "Carbon, Hydrogen, Chlorine, Bromine, Alkene, Haloalkane",
      "elt_en": "C, H , Cl, Br, =",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Bridge- Anti attack",
      "d2": "Stereospecific reaction",
      "d3": "Different stereochemistry depending on E/Z and symmetricity of alkene"
    },
    {
      "id": 3,
      "name": "R2CH=CHR2 + Hg(OCOCH3)2 + NaBH4 -> RCH2CH(OH)R",
      "elt": "Carbon, Hydrogen, Oxygen, Mercury, Alkene, Mercury Acetate, Sodium, Boron",
      "elt_en": "C, H , O, Hg, =, Na, B",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Markovnikov's rule",
      "d2": "No rearrangement",
      "d3": "Good method of preparing alcohol"
    },
    {
      "id": 4,
      "name": "R2CH=CHR2 + RCOOH ->RH(COC)HR",
      "elt": "Carbon, Hydrogen, Oxygen, Epoxide, Carboxylic acid, alkene",
      "elt_en": "C, H, O, COC, RCOOH, =",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Stereospecific",
      "d2": "Common reagent = mCPBA",
      "d3": "Epoxides are also called Oxiranes"
    },
    {
      "id": 5,
      "name": "R2CH=CHR2 + Cl2 + H2O -> RH(COC)HR",
      "elt": "Carbon, Hydrogen, Oxygen, Epoxide, Alcohol, Alkene",
      "elt_en": "C, H, O, COC, ROH, =",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Internal SN2",
      "d2": "Cyclization of 1,2-halohydrins",
      "d3": ""
    },
    {
      "id": 6,
      "name": "R2CH=CHR2 + O3 + H2O/Zn -> RCOOR + RCOH",
      "elt": "Carbon, Hydrogen, Oxygen, Zinc, Ozone, Ozonolysis, Alkene",
      "elt_en": "C, H, O, Zn, =",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Intermediate formed is Ozonide",
      "d2": "Oxidative cleavage of alkenes",
      "d3": ""
    },
    {
      "id": 7,
      "name": "R2CH=CHR2 + BH3 + THF -> R2CH2C(OH)R2",
      "elt": "Carbon, Hydrogen, Oxygen, THF, Boron, Alkene",
      "elt_en": "C, H, O, B",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Electrophilic addition",
      "d2": "Anti Markovnikov",
      "d3": "Regioselective and Stereoselective"
    },
    {
      "id": 8,
      "name": "R2CH=CHR2 + OsO4 + CH3COOH + NaOH -> R2C(OH)=C(OH)R2",
      "elt": "Carbon, Hydrogen, Oxygen, Sodium, Osmium, Alkene",
      "elt_en": "C, H, O, Na, Os, =",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Dihydroxylation of alkenes",
      "d2": "Formation of diol",
      "d3": "Oxidation"
    },
    {
      "id": 9,
      "name": "R2CH=CHR2 + ROH + H2SO4 -> RCOCR",
      "elt": "Carbon, Hydrogen, Sulphur, Oxygen, Alkene, Ester, Alchol",
      "elt_en": "C, H, S, O, =, ROH",
      "upvote": 0,
      "downvote": 0,
      "views": 10,
      "d1": "Preparation of ether",
      "d2": "Markovnikov's rule",
      "d3": ""
    },
    {
      "id": 10,
      "name": "R2CH=CHR2 + H2/Pd ->R2CHCHR2",
      "elt": "Carbon, Hydrogen, Palladium, Alkane, Alkene",
      "elt_en": "C, H, Pd",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Reduction",
      "d2": "Preparation of Alkanes",
      "d3": ""
    },
    {
      "id": 11,
      "name": "R2CHCHR2 + Br2 + UV -> R2CHC(Br)R2 + HBr",
      "elt": "Carbon, Hydrogen, Bromine, UV, Alkane, Haloalkane",
      "elt_en": "C, H, Br, UV",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Substitution reaction",
      "d2": "Mixed products",
      "d3": ""
    },
    {
      "id": 12,
      "name": "R2CHCHR2 + O2 -> CO2 + H2O",
      "elt": "Carbon, Hydrogen, Oxygen, Alkanes",
      "elt_en": "C, H, O",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Combustion",
      "d2": "Can be partial or complete",
      "d3": ""
    },
    {
      "id": 13,
      "name": "R2CHCHR2 + H2O + Ni -> CO + H2",
      "elt": "Carbon, Hydrogen, Oxygen, Nickel",
      "elt_en": "C, H, O, Ni",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Water is present in the form of steam at 1273 K",
      "d2": "Industrial preparation of dihydrogen gas",
      "d3": ""
    },
    {
      "id": 14,
      "name": "RCOONa + NaOH + CaO ->R2CHCHR2  + Na2CO3",
      "elt": "Carbon, Hydrogen, Sodium, Oxygen, Alkane",
      "elt_en": "C, H, Na, O",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Decarboxylation",
      "d2": "Soda Lime (NaOH + CaO)",
      "d3": ""
    },
    {
      "id": 15,
      "name": "R2CHCBrR2 + Dry ether + Na -> R2CHCHR2 + NaBr",
      "elt": "Carbon, Hydrogen, Ether, Sodium, Bromine, Alkane",
      "elt_en": "C, H, O, Na, Br",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Wurtz reaction",
      "d2": "Alkanes containing even number of carbon atoms are formed",
      "d3": ""
    },
    {
      "id": 16,
      "name": "CaC2 + H2O -> HCCH + Ca(OH)2",
      "elt": "Carbon, Hydrogen, Calcium, Oxygen, Alkyne",
      "elt_en": "C, H, Ca, O",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Industrial scale preparation",
      "d2": "Heating quick lime with coke will yield calcium carbide",
      "d3": ""
    },
    {
      "id": 17,
      "name": "RCH(Br)CH(Br)R + KOH+ ROH -> RCCR",
      "elt": "Carbon, Hydrogen, Bromine, Alcohol, Alkyne, Oxygen",
      "elt_en": "C, H, Br, O, ROH",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "Dehydrohalogenation",
      "d2": "Sodamide is used",
      "d3": ""
    },
    {
      "id": 18,
      "name": "RCOOH + RSH -> RCOSR",
      "elt": "Carbon, Hydrogen, Sulphur, Oxygen, Carboxylic acid",
      "elt_en": "C, H, S, O, RCOOH",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 19,
      "name": "RCOOH + RNH2 -> RCONR2",
      "elt": "Carbon, Hydrogen, Nitrogen, Oxygen, Carboxylic acid",
      "elt_en": "C, N, O, H, RCOOH",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 20,
      "name": "RCOOH + SOCl2 -> RCOCl",
      "elt": "Carbon, Hydrogen, Sulphur, Oxygen, Carboxylic acid, Chlorine",
      "elt_en": "C, H, S, O, RCOOH, Cl",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 21,
      "name": "RCOOH + RCOCl -> RCOOCOR",
      "elt": "Carbon, Hydrogen, Oxygen, Carboxylic acid, Chlorine",
      "elt_en": "C, H, O, RCOOH, Cl",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 22,
      "name": "RCOOH + ROH -> RCOOR",
      "elt": "Carbon, Hydrogen, Oxygen, Carboxylic acid",
      "elt_en": "C, H, O, RCOOH",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 23,
      "name": "RCOOH + NaOH + RI -> RCOOR",
      "elt": "Carbon, Hydrogen, Oxygen, Carboxylic acid, Iodine, Sodium",
      "elt_en": "C, H, O, RCOOH, I, Na",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 24,
      "name": "RCOOH + CH2NH2 + ROR -> RCOOR",
      "elt": "Carbon, Hydrogen, Oxygen, Carboxylic acid, Nitrogen",
      "elt_en": "C, H, O, RCOOH, N",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 25,
      "name": "RCOR + NaBH4 + PCC -> ROH",
      "elt": "Carbon, Hydrogen, Oxygen, Carboxylic acid, Sodium, Boron",
      "elt_en": "C, H, O, RCOOH, Na, B",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 26,
      "name": "RCOR + RNH2 -> RNHR",
      "elt": "Carbon, Hydrogen, Oxygen, Carboxylic acid, Nitrogen",
      "elt_en": "C, H, O, RCOOH, N",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 27,
      "name": "RCOR + RMgCl + H+ -> ROH",
      "elt": "Carbon, Hydrogen, Oxygen, Carboxylic acid, Magnesium, Chlorine",
      "elt_en": "C, H, O, RCOOH, Mg, Cl",
      "upvote": 0,
      "downvote": 0,
      "views": 0,
      "d1": "",
      "d2": "",
      "d3": ""
    },
    {
      "id": 28,
      "name": "RCOR + NH2NH2 + NaOH -> RR",
      "elt": "Carbon, Hydrogen, Oxygen, Carboxylic acid, Nitorgen, Sodium",
      "elt_en": "C, H, O, RCOOH, N, Na",
      "upvote": 0,
      "downvote": 0,
      "views": 5,
      "d1": "",
      "d2": "",
      "d3": ""
    }
  ]

  var data;
  if(localStorage.getItem('data') === null){
      data = initialData;
      // console.log(data);
  } else {
      
      data = JSON.parse(localStorage.getItem('data'));
      console.log(data[0]);
  }
  console.log();

var input; //array of user input (string)
var results = new Array(); //result of search array of ids(int)

var search_bt = document.getElementById("searchbtn"); //onclick: getinput()

ip = document.getElementById("input");
ip.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("searchbtn").click();
    }
});

function go(){
    getinput();
    search(input);
    sort(results);
    tosearch();
}

//set input (get user input)
function getinput() {
    input = document.getElementById("input").value;
    input=input.toLowerCase().split(",");
}

//take in input, return array of id
function search(input){
    console.log(data);
    for(var i=0; i<data.length; i++){
        //ith reaction
        //array of elts
        console.log(i);
        var elt = data[i].elt.split(",");
        var elt_en = data[i].elt_en.split(",");
        var res = 1;
        for(var j=0; j<input.length; j++){
            //check jth input
            var find = 0; //not find
            for(var m=0; m<elt.length; m++){
                if(input[j].trim().localeCompare(elt[m].toLowerCase().trim())==0){
                    find = 1;
                    break;
                }
            }
            for(var m=0; m<elt_en.length; m++){
                if(input[j].trim().localeCompare(elt_en[m].toLowerCase().trim())==0){find = 1;break;}}
            if(find == 0){
                res = 0;break;}
        }
        if(res == 1){
            results.push(data[i].id);
        }  
    }
}

//sort results by views;
function sort(results){
    var swap=0;
    var view = new Array();
    for(var i=0; i<results.length; i++){
        view.push(data[results[i]].views);
    }
    for(var i=results.length-1; i>0; i--){
        for(var j=0; j<i; j++){
            if(view[j]<view[j+1]){
                var temp = results[j];
                results[j] = results[j+1];
                results[j+1] = temp;
                temp = view[j];
                view[j] = view[j+1];
                view[j+1]=temp;
                swap = 1; 
            }
        }
        if(swap == 0){break;}
    }  
}

//go to search.html
function tosearch(){
    var url = encodeURI("search.html?" + results.join("%"));
    window.location.href=url;
}

var res; //results in search.html

//search.html: get array of ids(int)
function getres(){
    var thisURL = document.URL; 
    var getval = decodeURI(thisURL.split('?')[1]); 
    res = getval.split("%");
}

//write to id=res
function write(){
    for(var i=0; i<res.length; i++){
        var print = '<p><h5>'+data[i].name+'</h5><p>'+'<p>Upvote/Downvote:'+ data[i].upvote + '/' + data[i].downvote+ '</p>';
        var button = '<p><button type="button" class="btn btn-outline-primary btn-sm" onclick="viewdetails('+i+')">View Details</button></p><hr>';
        document.getElementById('res').innerHTML += (print + button);
    }
    
}

function viewdetails(i){
    var url = encodeURI("details.html?" + i);
    window.location.href=url;
}

//details.html
var id;
function detailpage(){
    getres2();
    addpageview();
}

function getres2(){
    var thisURL = document.URL; 
    id = decodeURI(thisURL.split('?')[1]);
    //details
    var print = '<p><h4>'+data[id].name+'</h4><p><hr><p><h4>Notes:</h4></p><p>'+data[id].d1+'</p><p>'+data[id].d2+'</p><p>'+data[id].d3+'</p>';
    document.getElementById('det').innerHTML += print;
    //vote
    var ubutton = '<hr><p>Is this information useful?&nbsp&nbsp&nbsp<button id="up" type="button" onclick="upvote()" class="btn btn-outline-success">YES</button>&nbsp&nbsp'+data[id].upvote;
    var dbutton = '&nbsp&nbsp&nbsp&nbsp<button type="button" id="down" onclick="downvote()" class="btn btn-outline-danger">NO </button>&nbsp&nbsp'+data[id].downvote+'</p>';
    document.getElementById('vote').innerHTML += (ubutton+dbutton);
}

function upvote(){
    data[id].upvote = parseInt(data[id].upvote+1);
    localStorage.setItem('data', JSON.stringify(data));
    var ubutton = '<hr><p>Is this information useful?&nbsp&nbsp&nbsp<button id="up" type="button" class="btn btn-outline-success disabled">YES</button>&nbsp&nbsp'+data[id].upvote;
    var dbutton = '&nbsp&nbsp&nbsp&nbsp<button type="button" id="down" class="btn btn-outline-danger disabled">NO </button>&nbsp&nbsp'+data[id].downvote+'</p>';
    document.getElementById('vote').innerHTML = (ubutton+dbutton);
}

function downvote(){
    data[id].downvote = parseInt(data[id].downvote+1);
    localStorage.setItem('data', JSON.stringify(data));
    var ubutton = '<hr><p>Is this information useful?&nbsp&nbsp&nbsp<button id="up" type="button" class="btn btn-outline-success disabled">YES</button>&nbsp&nbsp'+data[id].upvote;
    var dbutton = '&nbsp&nbsp&nbsp&nbsp<button type="button" id="down" class="btn btn-outline-danger disabled">NO </button>&nbsp&nbsp'+data[id].downvote+'</p>';
    document.getElementById('vote').innerHTML = (ubutton+dbutton);
}

function addpageview(){
    data[id].views += 1;
    localStorage.setItem('data', JSON.stringify(data));
}