//@ui5-bundle newparentcom/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"newparentcom/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","newparentcom/model/models"],function(e,t,i){"use strict";return e.extend("newparentcom.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"newparentcom/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("newparentcom.controller.App",{onInit:function(){debugger;var e=this.getOwnerComponent().createComponent({usage:"screen1",async:true,manifest:true});e.then(function(e){debugger;this.byId("screen1").setComponent(e);this._customerDetailContainer=e}.bind(this))}})});
},
	"newparentcom/i18n/i18n.properties":'# This is the resource bundle for newparentcom\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=newparentcom\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=newparentcom\n\n#XFLD,54\nflpTitle=parentcomponentsem\n',
	"newparentcom/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"newparentcom","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.3","toolsId":"87b20b1f-2fd4-44c0-85eb-56caefa7be37"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"parentcomponentsem-display":{"semanticObject":"parentcomponentsem","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}},"components":{"newchildcomponet":{"lazy":false}}},"componentUsages":{"screen1":{"name":"newchildcomponet","settings":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"newparentcom.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"newparentcom.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteApp","pattern":":?query:","target":["TargetApp"]}],"targets":{"TargetApp":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"App","viewName":"App"}}},"rootView":{"viewName":"newparentcom.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"manageddroutercomponet"}}',
	"newparentcom/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"newparentcom/view/App.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m" controllerName="newparentcom.controller.App" displayBlock="true"\n    xmlns:m="sap.m"\n    xmlns:u="sap.uxap"\n    xmlns:core="sap.ui.core"\n    xmlns:l="sap.ui.layout"\n    xmlns:f="sap.ui.layout.form"\n    \txmlns:upload="sap.m.upload"><NavContainer id="wizardNavContainer" height="120vh"><pages><Page id="wizardContentPage" showHeader="false"><content><Wizard id="CreateProductWizard" class="height1" renderMode="Page"><WizardStep id="partrequest" title="VOB-Part Request" validated="true" icon ="sap-icon://request"><core:ComponentContainer id="screen1" propagateModel="true" height="600px" /></WizardStep><WizardStep id="supplierdetails" validated="true" title="VOB-Supplier Details" activate="screen2activate" icon ="sap-icon://supplier"></WizardStep><WizardStep id="OptionalInfoStep" validated="true" activate="screen3activate" title="VOB-Document Upload" icon="sap-icon://add-document"></WizardStep><WizardStep id="vobapproval1" complete="pricingComplete" validated="true" title="VOB-Approval" activate="screen4activate" icon="sap-icon://employee-approvals"></WizardStep></Wizard></content></Page></pages></NavContainer></mvc:View>\n'
}});
