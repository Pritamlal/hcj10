/*
'Chennai':population:4646732
          literacyRate = 90.20
          language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
         literacyRate = 89.73
        language = 'Marathi'
'Delhi':population = 16787941
        literacyRate = 86.20
        language = 'Hindi'
*/

const button = document.querySelector('button')
//event Listener
button.addEventListener('click',displayStats)
function displayStats(){
    const input = document.getElementById("input");
    const city = input.options[input.selectedIndex].value;
    let population=0,literacyRate=0,language=''
    switch(city){
        case 'Bengaluru':
            console.log('from b');
            population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break;
        case 'Chennai' :
            console.log('from c');
            population = 4646732
            literacyRate = 90.20
            language = 'Tamil'
            break;
        case 'Mumbai' :
            console.log('from m');
            population = 7357732
            literacyRate = 30.20
            language = 'Hindi'
            break;
        case 'Delhi':
            console.log('from d');
            population = 8646732
            literacyRate = 90.20
            language = 'Hindi'
            break;
    }
    let text = `The Indian city of ${city} has a population of ${population}.Language spoken is ${language} and literacy rate is ${literacyRate}%`
    let resultdiv = document.createElement('div')
    resultdiv.id = 'result'
    
    document.getElementById('wrapper').appendChild(resultdiv)

    document.getElementById('result').innerHTML = text
}