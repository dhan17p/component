sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("parentcomponent.controller.App", {
            onInit: function () {
                debugger
                // this._handleNavigationToStep(1);
                var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
                    usage: "screen1", async: true, manifest: true
                });
                ocustomerDetailContainer.then(
                    function (ocustomerDetail) {
                        debugger
                        this.byId("screen1").setComponent(ocustomerDetail);
                        this._customerDetailContainer = ocustomerDetail;
                    }.bind(this)
                );

            }
        });
    });
