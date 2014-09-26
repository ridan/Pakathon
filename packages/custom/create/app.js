'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Create = new Module('create');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Create.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Create.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Create.menus.add({
    title: 'create example page',
    link: 'create example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Create.aggregateAsset('css', 'create.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Create.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Create.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Create.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Create;
});
