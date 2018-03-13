//Make this file private, no to be accessed by anyone else
//Author : Jishnu Jaykumar P
//Created : 6 Mar 2018

function publish(http_body_to_be_sent){

  alert(http_body_to_be_sent);

  jQuery.ajax(

    {

    //url : 'https://smartcity.rbccps.org/api/0.1.0/publish',

    url : '/livedemo/publish',

    type: 'POST',

    headers: {"apikey": "eb91a7a83ed542a0aa7180608c5a2885"},

    data: {"exchange": "amq.topic", "key": "openday_lightsensor", "body": "http_body_to_be_sent"},

    //data: "{\"apikey\": \"eb91a7a83ed542a0aa7180608c5a2885\", \"body\": \"Sample Data from Sensor sensorOnboarding_101\", \"resourceid\":\"openday_application\"}",

    success: function( data, textStatus, jQxhr ){
      alert("Success" + data);
    },

    error: function( jqXhr, textStatus, errorThrown ){
      //console.log( errorThrown + " | " + jqXhr + " | " + textStatus + " | ");
      console.log(jqXhr);
    }

    });

}
