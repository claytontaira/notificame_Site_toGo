// JavaScript Document
$(document).ready(function() {

    "use strict";

    $(".contact-form").submit(function(e) {
        e.preventDefault();
        var name = $(".name");
        var email = $(".email");
        var subject = $(".subject");
        var msg = $(".message");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        } if (msg.val() == "") {
            msg.closest(".form-control").addClass("error");
            msg.focus();
            flag = false;
            return false;
        } else {
            msg.closest(".form-control").removeClass("error").addClass("success");
            flag = true;
        }
        // var dataString = "name=" + name.val() + "&email=" + email.val() + "&subject=" + subject.val() + "&msg=" + msg.val();
        var dataString = {
            "name": name.val(),
            "from": email.val(),
            "subject": subject.val(),
            "text": msg.val()
        }
        
        $(".loading").fadeIn("slow").html("Enviando...");

        $.ajax({
            type: "POST",
            data: dataString,
            dataType: 'json',
            headers: {
                "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTI1ZTE2ZTkyMjIwZjAwMDQxMGIzZmEiLCJpc0FkbWluIjpmYWxzZSwiaXNTdXBlciI6dHJ1ZSwiaXNPcGVyIjpmYWxzZSwicm9vdElkIjoiM2E1ZGQyYjktMWRkNi01ZGM5LTg1NDgtZmRiZDhmN2JkZTQxIiwiaWF0IjoxNTc5NTQwODQ2fQ.wmwMq6wm7Vl4qOSgRbXDdXg4SllBxrVl3IZ5mJPlXJc",
            },
            url: "https://notificamebrasil.herokuapp.com/api/sendemail",
            cache: false,
            success: function (d) {
                console.log('d', d);

                name.val('');
                email.val('');
                subject.val('Assunto do Email...');
                msg.val('');

                $(".form-control").removeClass("success");
                    if(d == '200') // Message Sent? Show the 'Thank You' message and hide the form
                        $('.loading').fadeIn('slow').html('<font color="#48af4b">Mensagem Enviada com sucesso!.</font>').delay(3000).fadeOut('slow');
                        
                         else
                        $('.loading').fadeIn('slow').html('<font color="#ff5607">Mensagem não enviada.</font>').delay(3000).fadeOut('slow');
                                }
        });
        return false;
    });
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
    
})



