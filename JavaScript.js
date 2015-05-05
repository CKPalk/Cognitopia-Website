"use strict";

function replaceLearnMore() {
    document.getElementById("text_popup").innerHTML = '<div id="hiddenMessage" class="width_limit blurb_wrapper medium_text thin_text"></div>';
    
    // Text to display on "LEARN HOW" button click
    var textString = "Cognitopia crafts simple apps to help people manage each day's challenges. We believe that with a little help from your phone or iPad, people with autism can be more independent. Our apps also deepen the connection between caregiver and user by providing notifications and support to those in the user's circle of trust.";
    
    
    
    document.getElementById("hiddenMessage").textContent = textString;
}