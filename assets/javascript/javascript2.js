

function show_alert()

{

  var oArgs = {

            app_key:"SS4xBWqKX4WwzmW6",

            id: "20218701",

            page_size: 25 ,

  };

  EVDB.API.call("/events/get", oArgs, function(oData) {

      // Note: this relies on the custom toString() methods below

    });

}



function show_alert2()

{

   var oArgs = {

      app_key: "SS4xBWqKX4WwzmW6",

      q: "music",

      where: "San Diego", 

      "date": "2013061000-2015062000",

      page_size: 5,

      sort_order: "popularity",

   };

   EVDB.API.call("/events/search", oArgs, function(oData) {

      // Note: this relies on the custom toString() methods below

    });

}


  