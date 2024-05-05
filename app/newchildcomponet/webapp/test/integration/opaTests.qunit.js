sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'newchildcomponet/test/integration/FirstJourney',
		'newchildcomponet/test/integration/pages/parentList',
		'newchildcomponet/test/integration/pages/parentObjectPage'
    ],
    function(JourneyRunner, opaJourney, parentList, parentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('newchildcomponet') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheparentList: parentList,
					onTheparentObjectPage: parentObjectPage
                }
            },
            opaJourney.run
        );
    }
);