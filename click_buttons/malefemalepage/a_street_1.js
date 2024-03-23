
document.body.style.backgroundColor ="#0b1763"
function change_onclick() {
    bool = document.getElementById("gender").checked


    if (bool == true) {
        document.body.style.backgroundColor =  "#8124b3"
        document.querySelector(".box").innerHTML=`<div class="h">Involved in the accident </div>
        <div class="bu">Safety First: Ensure the safety of everyone involved in the accident. Move to a safe location if possible and provide immediate medical assistance to any injured individuals.</div>
        <div class="bu">Inform Authorities: Report the accident to the nearest police station or dial emergency services (such as 100 for police, 108 for ambulance, and 101 for fire) if necessary. It is mandatory to report accidents resulting in injury or death to the police.</div>
        <div class="bu">Exchange Information: Exchange contact and insurance details with the other parties involved in the accident. This includes names, addresses, phone numbers, vehicle registration numbers, and insurance information.</div>
        <div class="bu">Document the Scene: Take photographs of the accident scene, including the vehicles involved, any damage, and the surrounding area. This documentation can be valuable for insurance claims and legal proceedings.</div>
        <div class="bu">File an FIR: If the accident resulted in significant damage, injury, or death, file a First Information Report (FIR) at the police station. The FIR is a formal document that records the details of the accident and initiates an investigation. Seek.</div>
        <div class="bu">Cooperate with Authorities: Cooperate with the police and other authorities during the investigation of the accident. Provide accurate information and avoid making statements that could be used against you later</div>
        <div class="bu">Contact Your Insurance Company: Inform your insurance company about the accident as soon as possible. Follow their instructions for filing a claim and provide all necessary documentation, such as the FIR and medical reports.</div>
        <div class="bu">Know your rights: As a victim of a road accident, you have the right to seek compensation for your injuries, property damage, and other losses. Consult with a lawyer to understand your legal options and ensure that your rights are protected.</div>
        <div class="bu">Medical Attention: Even if you don't feel injured immediately after the accident, it's essential to seek medical attention. Some injuries may not be apparent right away, and getting checked by a medical professional is crucial for your health and well-being.</div>
        
        <div class="h">Spectator</div>
        <div class="bu">As commuters, it is our social responsibility to spontaneously assist in the event of a road accident as responsible citizens.</div>
        <div class="bu">Injured persons should be immediately transported to the nearest hospital, recognizing the critical importance of the "Golden Hour" in saving lives.</div>
        <div class="bu">Promptly inform the police by dialing 100 or utilizing any available means of communication to report the accident.</div>
        <div class="bu">As responsible citizens, we should assist the police in clearing traffic congestion to minimize further inconvenience to commuters and vehicles.</div>
        <div class="bu">Cooperation with the police in identifying the culprit or accused driver is essential, as we are often the first witnesses at the scene of the crime.</div>
        <div class="bu">As law-abiding citizens, we should willingly provide evidence as eyewitnesses to aid police investigations and judicial proceedings, facilitating the court's ability to convict the accused driver.</div>
        <div class="bu">Additionally, as informed individuals, we should observe any human errors or shortcomings in road engineering and recommend necessary rectifications to the government to prevent similar incidents in the future.</div>
    `
    }
    else{
        document.body.style.backgroundColor ="#0b1763"
        document.querySelector(".box").innerHTML=`<div class="h">Involved in the accident </div>
        <div class="bu">Safety First: Ensure the safety of everyone involved in the accident. Move to a safe location if possible and provide immediate medical assistance to any injured individuals.</div>
        <div class="bu">Inform Authorities: Report the accident to the nearest police station or dial emergency services (such as 100 for police, 108 for ambulance, and 101 for fire) if necessary. It is mandatory to report accidents resulting in injury or death to the police.</div>
        <div class="bu">Exchange Information: Exchange contact and insurance details with the other parties involved in the accident. This includes names, addresses, phone numbers, vehicle registration numbers, and insurance information.</div>
        <div class="bu">Document the Scene: Take photographs of the accident scene, including the vehicles involved, any damage, and the surrounding area. This documentation can be valuable for insurance claims and legal proceedings.</div>
        <div class="bu">File an FIR: If the accident resulted in significant damage, injury, or death, file a First Information Report (FIR) at the police station. The FIR is a formal document that records the details of the accident and initiates an investigation. Seek.</div>
        <div class="bu">Cooperate with Authorities: Cooperate with the police and other authorities during the investigation of the accident. Provide accurate information and avoid making statements that could be used against you later</div>
        <div class="bu">Contact Your Insurance Company: Inform your insurance company about the accident as soon as possible. Follow their instructions for filing a claim and provide all necessary documentation, such as the FIR and medical reports.</div>
        <div class="bu">Know your rights: As a victim of a road accident, you have the right to seek compensation for your injuries, property damage, and other losses. Consult with a lawyer to understand your legal options and ensure that your rights are protected.</div>
        <div class="bu">Medical Attention: Even if you don't feel injured immediately after the accident, it's essential to seek medical attention. Some injuries may not be apparent right away, and getting checked by a medical professional is crucial for your health and well-being.</div>
        
        <div class="h">Spectator</div>
        <div class="bu">As commuters, it is our social responsibility to spontaneously assist in the event of a road accident as responsible citizens.</div>
        <div class="bu">Injured persons should be immediately transported to the nearest hospital, recognizing the critical importance of the "Golden Hour" in saving lives.</div>
        <div class="bu">Promptly inform the police by dialing 100 or utilizing any available means of communication to report the accident.</div>
        <div class="bu">As responsible citizens, we should assist the police in clearing traffic congestion to minimize further inconvenience to commuters and vehicles.</div>
        <div class="bu">Cooperation with the police in identifying the culprit or accused driver is essential, as we are often the first witnesses at the scene of the crime.</div>
        <div class="bu">As law-abiding citizens, we should willingly provide evidence as eyewitnesses to aid police investigations and judicial proceedings, facilitating the court's ability to convict the accused driver.</div>
        <div class="bu">Additionally, as informed individuals, we should observe any human errors or shortcomings in road engineering and recommend necessary rectifications to the government to prevent similar incidents in the future.</div>
    `
    }



}




// darmode button 


function changebutbg(){
    bool=document.getElementById("modebutton").checked

    btn=document.getElementById("modebutton")

    if (bool==true){
        btn.style.backgroundColor="black"
        document.head.innerHTML=`<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!-- <link rel="stylesheet" href="style_dark.css"> -->
        <link rel="stylesheet" href="style.css">`

    }
    else{

        btn.style.backgroundColor="#c6c6c6"

        document.head.innerHTML=`<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="style_dark.css"> 
        <!--<link rel="stylesheet" href="style.css">-->`
    }}

    function creator(){
        window.location.href = "https://aditya-0510.github.io/legal-vizier/creator/creator.html";
    
    }
    function about(){
        window.location.href = "https://aditya-0510.github.io/legal-vizier/About/index.html";
    
    }