// $(document).ready(function() {
//    $('#buttonTest').click(function() {
//        $('#buttonTest').fadeIn('slow', .5);
//    });
//});

$(document).ready(function() {
    $(".buttonTest").click(function {
    var newHTML = '<div class="blue_back panel center" id="panel_one">' +
        '<div class="top_space">' +
            '<div class="carousel_center">' +
                '<div class="carousel_center_image_wrapper" id="product_image">' +
                    '<img class="carousel_center_image" src="images/All/Goal_Guide.png">' +
                '</div>' +
                '<a><div class="pane_selection"></div></a>' +
                '<a><div class="pane_selection"></div></a>' +
                '<a><div class="pane_selection" style= "background-color:#DB6944"></div></a>' +
                '<br><br><br><br>' +
                '<div class="large_text thin_text" id="product_title">Goal Guide</div>' +
                '<div class="xsmall_text thin_text blurb_wrapper" id="product_info" >' +
                    'I think we should add maybe one or two lines of text here explaining a little bit about it, then go into bullet points' +
                    '<ul class="carousel_bullet">' +
                        '<li>Pick a video for something you want to do</li>' +
                        '<li>Print a unique QR code</li>' +
                        '<li>Scan the code</li>' +
                        '<li>Watch and learn</li>' +
                    '</ul>' +
                '</div>' +
                '<button class="default_button column_button default_button" type="button">TRY IT</button>' +
            '</div>' +
            '<!-- Left Carousel-->' +
            '<div class="carousel_left">' +
                 '<div class="medium_text thin_text carousel_side_title" style= "padding-top: 25px;">ScanDo!</div>' +
                    '<div class= "mcarousel_text light_text"><br>Scan it,</div>' +
                    '<div class= "mcarousel_text light_text">Watch it,</div>' +
                    '<div class= "mcarousel_text light_text">Do it!</div>' +
                '<button class="carousel_button" type="button" style= "margin-top: 30px">' +
                    '<img src= "images\Products\Product_Arrow_Left.png" height= "34" width= "20"></img>' +
                '</button>' +
            '</div>' +
            '<!-- Right Carousel-->' +
            '<div class="carousel_right">' +
               '<div class="medium_text thin_text carousel_side_title" style= "padding-top: 10px;">Picture <br> Planner</div>' +
                    '<div class= "xcarousel_text light_text"><br>Take a picture,</div>' +
                    '<div class= "xcarousel_text light_text">Check off items,</div>' +
                    '<div class= "xcarousel_text light_text">Share</div>' +
                    '<div class= "xcarousel_text light_text">accomplishments</div>' +
                '<button class="carousel_button" type="button" style= "margin-top: 5px">' +
                    '<img src= "images\Products\Product_Arrow_Right.png" height= "34" width= "20" ></img>' +
                '</button>' +
            '</div>' +
        '</div>' +
    '</div>';
    $('.divSwap').replaceWith(newHTML);
    });
}):
    


