sap.ui.define(
    ["sap/fe/core/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("childcomponent.Component", {
            metadata: {
                manifest: "json"
            }
        });
    }
);