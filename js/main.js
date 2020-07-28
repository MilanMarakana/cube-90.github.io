 $(document).ready(function () {
     function sendEnquiryform() {
         let name = $('#name').val();
         let email = $('#email').val();
         let subject = $('#subject').val();
         var message = $('#message').val();
         $.post("/php/submit.php", '&name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message + function (result, status) {
                 if (status.toLowerCase() == "error".toLowerCase()) {
                     alert("An Error Occurred..");
                 } else {
                     //alert(result);
                     $('#sucessMessage').html(result);
                 }
             })
             .fail(function () {
                 alert("something went wrong. Please try again")
             });
     }

     let hamburger = document.querySelector('.hamburger');
     let close = document.querySelector('.close');
     let mobileNav = document.querySelector('.mobile-nav');
     let link = document.querySelector('.link');

     hamburger.addEventListener('click', function () {
         mobileNav.classList.add('open');
     });

     close.addEventListener('click', function () {
         mobileNav.classList.remove('open');
     });

     link.addEventListener('click', function () {
         mobileNav.classList.remove('open');
     });
 });