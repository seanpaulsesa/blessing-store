$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show('1000');
        }else{
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    })
    //tambakan aktif class
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })


    //Code Untuk Humberger.
    $(".humberger").click(function(){
        $(".wrapper-nav").toggleClass("show");
        $(".icon-bar").toggleClass("d-none");
        $(".close").toggleClass("d-none")
    });

    //fungsi maps
    $(".maps").click(function(){
        var destinationLat = -2.5850301; // contoh latitude
        var destinationLng = 140.5554085; // contoh longitude
         // Membuat URL untuk navigasi Google Maps
         var googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
        // Mengarahkan ke URL
        window.location.href = googleMapsUrl;
    });
    

});