document.getElementById('output').style.visibility = 'hidden';

let inputWeight = 0;

let weight = document.getElementById('weight').selectedOptions[0].value;

document.getElementById('weight').addEventListener('input', function(event){
    weight = event.target.value;

    if (weight === 'grams') {

        document.getElementById('name1').innerText = 'Pounds:';
        document.getElementById('output1').innerText = inputWeight * 0.0022046;
        
        document.getElementById('name2').innerText = 'Kilograms:';
        document.getElementById('output2').innerText = inputWeight / 1000;
        
        document.getElementById('name3').innerText = 'Ounces:';
        document.getElementById('output3').innerText = inputWeight / 28.35;
        
        }else if (weight === 'kg') {
        
            document.getElementById('name1').innerText = 'Pounds:';
            document.getElementById('output1').innerText = inputWeight * 2.205;
            
            document.getElementById('name2').innerText = 'Grams:';
            document.getElementById('output2').innerText = inputWeight * 1000;
            
            document.getElementById('name3').innerText = 'Ounces:';
            document.getElementById('output3').innerText = inputWeight * 35.274;
            
        }else if (weight === 'ounces') {
        
            document.getElementById('name1').innerText = 'Pounds:';
            document.getElementById('output1').innerText = inputWeight / 16;
            
            document.getElementById('name2').innerText = 'Grams:';
            document.getElementById('output2').innerText = inputWeight * 28.35;
            
            document.getElementById('name3').innerText = 'Kilograms:';
            document.getElementById('output3').innerText = inputWeight / 35.274;
            
        }
         else {
        
        document.getElementById('name1').innerText = 'Grams:';
        document.getElementById('output1').innerText = inputWeight / 0.0022046;
        
        document.getElementById('name2').innerText = 'Kilograms:';
        document.getElementById('output2').innerText = inputWeight /2.2046;
        
        document.getElementById('name3').innerText = 'Ounces:';
        document.getElementById('output3').innerText = inputWeight * 16;
        
        }
    
})

document.getElementById('input').addEventListener('input', function(event){

document.getElementById('output').style.visibility = 'visible';

inputWeight = event.target.value;

if (weight === 'grams') {

document.getElementById('name1').innerText = 'Pounds:';
document.getElementById('output1').innerText = inputWeight * 0.0022046;

document.getElementById('name2').innerText = 'Kilograms:';
document.getElementById('output2').innerText = inputWeight / 1000;

document.getElementById('name3').innerText = 'Ounces:';
document.getElementById('output3').innerText = inputWeight / 28.35;

}else if (weight === 'kg') {

    document.getElementById('name1').innerText = 'Pounds:';
    document.getElementById('output1').innerText = inputWeight * 2.205;
    
    document.getElementById('name2').innerText = 'Grams:';
    document.getElementById('output2').innerText = inputWeight * 1000;
    
    document.getElementById('name3').innerText = 'Ounces:';
    document.getElementById('output3').innerText = inputWeight * 35.274;
    
}else if (weight === 'ounces') {

    document.getElementById('name1').innerText = 'Pounds:';
    document.getElementById('output1').innerText = inputWeight / 16;
    
    document.getElementById('name2').innerText = 'Grams:';
    document.getElementById('output2').innerText = inputWeight * 28.35;
    
    document.getElementById('name3').innerText = 'Kilograms:';
    document.getElementById('output3').innerText = inputWeight / 35.274;
    
}
 else {

document.getElementById('name1').innerText = 'Grams:';
document.getElementById('output1').innerText = inputWeight / 0.0022046;

document.getElementById('name2').innerText = 'Kilograms:';
document.getElementById('output2').innerText = inputWeight /2.2046;

document.getElementById('name3').innerText = 'Ounces:';
document.getElementById('output3').innerText = inputWeight * 16;

}


})