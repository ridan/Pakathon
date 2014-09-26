'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Minna = new Module('minna');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Minna.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Minna.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Minna.menus.add({
    title: 'minna example page',
    link: 'minna example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Minna.aggregateAsset('css', 'minna.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Minna.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Minna.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Minna.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Minna;
});
