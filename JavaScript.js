// --- Index page javascript ---

function replaceLearnMore() {
    "use strict";
    
    document.getElementById("text_popup").innerHTML = '<div id="hiddenMessage" class="width_limit blurb_wrapper medium_text thin_text"></div>';
    
    // Text to display on "LEARN HOW" button click
    var textString = "Cognitopia crafts simple apps to help people manage each day's challenges. We believe that with a little help from your phone or iPad, people with autism can be more independent. Our apps also deepen the connection between caregiver and user by providing notifications and support to those in the user's circle of trust.";
    
    
    document.getElementById("hiddenMessage").textContent = textString;
}


// --- Products page javascript ---

window.onload = function pageLoad() {
    // get user_input from page hash
    var user_input = (location.hash).replace('#','');
    
    // display correct content based on hash
    if (user_input == "PicturePlanner") {
        displayPicturePlanner();   
    }
    else if (user_input == "GoalGuide") {
        displayGoalGuide();
    }
    else if (user_input == "ScanDo") {
        displayScanDo();   
    }
    
}

function displayPicturePlanner() {
    "use strict";
    var btn_PicturePlanner, btn_GoalGuide, btn_ScanDo,
        top_PicturePlanner, top_GoalGuide, top_ScanDo,
        mid_PicturePlanner, mid_GoalGuide, mid_ScanDo,
        product_image;
    
    btn_PicturePlanner = document.getElementById('picture_planner_button');
    btn_GoalGuide      = document.getElementById('goal_guide_button');
    btn_ScanDo         = document.getElementById('scando_button');
    
    top_PicturePlanner = document.getElementById('picture_planner_top');
    top_GoalGuide      = document.getElementById('goal_guide_top');
    top_ScanDo         = document.getElementById('scando_top');
    
    mid_PicturePlanner = document.getElementById('picture_planner_mid');
    mid_GoalGuide      = document.getElementById('goal_guide_mid');
    mid_ScanDo         = document.getElementById('scando_mid');
    
    product_image      = document.getElementById('product_image');
    
    // Change product image
    product_image.src = "images/Products/PicturePlanner.png";
    
    // Unselect other buttons
    btn_ScanDo.style.backgroundColor = "#3F4F4F";
    btn_ScanDo.style.color = "#FFFFFF";
    btn_ScanDo.style.border = "2px solid #FFFFFF";
    btn_GoalGuide.style.backgroundColor = "#3F4F4F";
    btn_GoalGuide.style.color = "#FFFFFF";
    btn_GoalGuide.style.border = "2px solid #FFFFFF";
    
    // Select Picture Planner button
    btn_PicturePlanner.style.backgroundColor = "#659888";
    btn_PicturePlanner.style.color = "#FFFFFF";
    btn_PicturePlanner.style.border = "2px solid #659888";
    
    // Hide other top contents
    top_GoalGuide.style.display = "none";
    top_ScanDo.style.display    = "none";
    
    // Show Picture Planner top
    top_PicturePlanner.style.display = "block";
    
    // Hide other mid contents
    mid_GoalGuide.style.display = "none";
    mid_ScanDo.style.display    = "none";
    
    //Show Picture Planner mid
    mid_PicturePlanner.style.display = "block";
}


function displayGoalGuide() {
    "use strict";
    var btn_PicturePlanner, btn_GoalGuide, btn_ScanDo,
        top_PicturePlanner, top_GoalGuide, top_ScanDo,
        mid_PicturePlanner, mid_GoalGuide, mid_ScanDo,
        product_image;
    
    btn_PicturePlanner = document.getElementById('picture_planner_button');
    btn_GoalGuide      = document.getElementById('goal_guide_button');
    btn_ScanDo         = document.getElementById('scando_button');
    
    top_PicturePlanner = document.getElementById('picture_planner_top');
    top_GoalGuide      = document.getElementById('goal_guide_top');
    top_ScanDo         = document.getElementById('scando_top');
    
    mid_PicturePlanner = document.getElementById('picture_planner_mid');
    mid_GoalGuide      = document.getElementById('goal_guide_mid');
    mid_ScanDo         = document.getElementById('scando_mid');
    
    product_image      = document.getElementById('product_image');
    
    // Change product image
    product_image.src = "images/Products/GoalGuide.png";
    
    // Unselect other buttons
    btn_ScanDo.style.backgroundColor = "#3F4F4F";
    btn_ScanDo.style.color = "#FFFFFF";
    btn_ScanDo.style.border = "2px solid #FFFFFF";
    btn_PicturePlanner.style.backgroundColor = "#3F4F4F";
    btn_PicturePlanner.style.color = "#FFFFFF";
    btn_PicturePlanner.style.border = "2px solid #FFFFFF";
    
    // Select Goal Guide button
    btn_GoalGuide.style.backgroundColor = "#659888";
    btn_GoalGuide.style.color = "#FFFFFF";
    btn_GoalGuide.style.border = "2px solid #659888";
    
    // Hide other top contents
    top_PicturePlanner.style.display = "none";
    top_ScanDo.style.display         = "none";
    
    // Show Goal Guide top
    top_GoalGuide.style.display = "block";
    
    // Hide other mid contents
    mid_PicturePlanner.style.display = "none";
    mid_ScanDo.style.display         = "none";
    
    //Show Goal Guide mid
    mid_GoalGuide.style.display = "block";
}



function displayScanDo() {
    "use strict";
    var btn_PicturePlanner, btn_GoalGuide, btn_ScanDo,
        top_PicturePlanner, top_GoalGuide, top_ScanDo,
        mid_PicturePlanner, mid_GoalGuide, mid_ScanDo,
        product_image;
    
    btn_PicturePlanner = document.getElementById('picture_planner_button');
    btn_GoalGuide      = document.getElementById('goal_guide_button');
    btn_ScanDo         = document.getElementById('scando_button');
    
    top_PicturePlanner = document.getElementById('picture_planner_top');
    top_GoalGuide      = document.getElementById('goal_guide_top');
    top_ScanDo         = document.getElementById('scando_top');
    
    mid_PicturePlanner = document.getElementById('picture_planner_mid');
    mid_GoalGuide      = document.getElementById('goal_guide_mid');
    mid_ScanDo         = document.getElementById('scando_mid');
    
    product_image      = document.getElementById('product_image');
    
    // Change product image
    product_image.src = "images/Products/ScanDo.png";
    
    // Unselect other buttons
    btn_GoalGuide.style.backgroundColor = "#3F4F4F";
    btn_GoalGuide.style.color = "#FFFFFF";
    btn_GoalGuide.style.border = "2px solid #FFFFFF";
    btn_PicturePlanner.style.backgroundColor = "#3F4F4F";
    btn_PicturePlanner.style.color = "#FFFFFF";
    btn_PicturePlanner.style.border = "2px solid #FFFFFF";
    
    // Select ScanDo button
    btn_ScanDo.style.backgroundColor = "#659888";
    btn_ScanDo.style.color = "#FFFFFF";
    btn_ScanDo.style.border = "2px solid #659888";
    
    // Hide other top contents
    top_GoalGuide.style.display      = "none";
    top_PicturePlanner.style.display = "none";
    
    // Show ScanDo top
    top_ScanDo.style.display = "block";
    
    // Hide other mid contents
    mid_GoalGuide.style.display      = "none";
    mid_PicturePlanner.style.display = "none";
    
    //Show ScanDo mid
    mid_ScanDo.style.display = "block";
}