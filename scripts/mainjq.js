$(document).ready(function()
{
    $("#menu-button").on("click", function()
    {
        $("#main-menu").slideToggle();
    });

    $("#go-to-top-arrow").on("click", function()
        {
            $("html").animate({ scrollTop: 0 });
        }
    );
});
