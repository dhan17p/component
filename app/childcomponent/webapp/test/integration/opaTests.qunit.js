sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'childcomponent/test/integration/FirstJourney',
		'childcomponent/test/integration/pages/parentList',
		'childcomponent/test/integration/pages/parentObjectPage'
    ],
    function(JourneyRunner, opaJourney, parentList, parentObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('childcomponent') + '/index.html'
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