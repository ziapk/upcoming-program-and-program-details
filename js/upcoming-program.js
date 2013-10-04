
$(document).ready(function () {

    $(function () {
        $(".ya-datepicker").datepicker({
            showOn: "button",
            buttonImage: "images/calendar.gif",
            buttonImageOnly: true
        });
    });

        
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style")
        msViewportStyle.appendChild(
          document.createTextNode(
            "@-ms-viewport{width:auto!important}"
          )
        )
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
    }

    //ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
    $('.accordionButton').click(function () {
       
       //debugger;
        //ADD THE ON CLASS TO THE BUTTON
        $(this).addClass('on');
        $('.ya-about').addClass('ya-about-active');
        $('.ya-about-container').addClass('ya-about-container-active');
        //alert("here");
        //alert($('.on .up-down-link').html());
        $('.on .up-down-link').html("");
        $('.on .para-slid-arrow').html("");
        $('.on .up-down-link').html("Hide Full Bio <i class='icon-arrow-up'></i>");
        
        //$('.on .para-slid-arrow').html("<img src='images/faq-up-arrow.png' alt='' title='' />");
        //$(".on .title").addClass("faq-active");

        //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
        $('.accordionContent').slideDown('normal');

        //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
    //    if ($(this).next().is(':hidden') == true) {
        if(($(this).attr('class').split(' ')[3]=="on"))
        {

            //REMOVE THE ON CLASS FROM ALL BUTTONS
            $('.on .up-down-link').html("");
            $('.on .para-slid-arrow').html("");
            $('.on .up-down-link').html("Read Full Bio <i class='icon-arrow-down'</i>");
            //$('.on .para-slid-arrow').html("<img src='images/faq-down-arrow.png' alt='' title='' />");

            //$(".on .title").removeClass("faq-active");
            $('.accordionButton').removeClass('on');
            $('.ya-about').removeClass('ya-about-active');
            $('.ya-about-container').removeClass('ya-about-container-active');
            //OPEN THE SLIDE
            //$(this).next().slideUp('normal');
            $('.accordionContent').slideUp('normal');
        }

    });


    /*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/

    //ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
    $('.accordionButton').mouseover(function () {
        $(this).addClass('over');

        //ON MOUSEOUT REMOVE THE OVER CLASS
    }).mouseout(function () {
        $(this).removeClass('over');
    });

    /*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/


    $('.accordionContent').hide();

});
