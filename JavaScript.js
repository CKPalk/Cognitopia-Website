function replaceLearnMore() {
    "use strict";
    
    document.getElementById("text_popup").innerHTML = '<div id="hiddenMessage" class="width_limit blurb_wrapper medium_text thin_text"></div>';
    
    // Text to display on "LEARN HOW" button click
    var textString = "Cognitopia crafts simple apps to help people manage each day's challenges. We believe that with a little help from your phone or iPad, people with autism can be more independent. Our apps also deepen the connection between caregiver and user by providing notifications and support to those in the user's circle of trust.";
    
    
    document.getElementById("hiddenMessage").textContent = textString;
}


function switchToPicturePlanner() {
    "use strict";
    
    var top_image, top_title, top_info, mid_content, mid_content_html, top_info_html, top_image_src;
    
    // locations of elements to switch
    top_image   = document.getElementById('carousel_main_image');
    top_title   = document.getElementById('product_title');
    top_info    = document.getElementById('product_info');
    mid_content = document.getElementById('product_content');
    
    // content to switch TO
    top_info_html = "I think we should add maybe one or two lines of text here explaining a little bit about it, then go into bullet points<ul class='carousel_bullet'><li>Add an activity</li><li>Take a picture of the things you need</li><li>Check off each item as you confirm you have it</li><li>Share your accomplishments</li><li>Have a great day</li></ul>";
    top_image_src = "images/Products/PicturePlanner.png";
    mid_content_html = "<div class='sectionHead large_text thin_text'>Keeping connected</div><div class='product_content medium_top_space right_column_fill'></div><div class='product_content medium_top_space left_column_fill'><div class='medium_text' id='product_content_title'>Connecting users, caregivers, and mentors</div><div class='small_text thin_text blurb_wrapper' id='product_content_info'>Who matters to you? All of our apps let the user define who gets notified about things like activity completions or goal accomplishments. Some of us need more encouragement and guidance than others, and even little victories can be shared and celebrated. That's why when you check an item off your calendar, or score high on a math test, our apps make sure you can share your accomplishments with those you care about.</div></div>";
    
    // swap work
    top_image.src = top_image_src;
    top_title.textContent = "Picture Planner";
    top_info.innerHTML = top_info_html;
    
    mid_content.innerHTML = mid_content_html;
    
    
}
