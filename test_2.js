#import "assertions.js"
#import "lang-ext.js"
#import "uiautomation-ext.js"
#import "screen.js"
#import "test.js"
#import "image_assertion.js"

    test("<<< Test - Reset application >>>", function(target,app) {
     
     var window = app.mainWindow();
	 var target = UIATarget.localTarget();
	 var app = target.frontMostApp();
	
     app.logElementTree();
     
         target.frontMostApp().tabBar().buttons()["Settings"].tap();
         target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Reset Application"].tap();
         
         UIATarget.onAlert = function onAlert(alert) {
            var title = alert.name();
            UIALogger.logWarning("Alert with title '" + title + "' encountered!");
            if (title == "Warning!") {
                UIALogger.logMessage("<<< Wait 4 seconds and click on 'Yes, reset!' >>>");
                target.delay(1);
                alert.buttons()["Yes, reset!"].tap();
                return true;
            }
            return false;
         }

         target.delay(4);
         UIALogger.logMessage("<<< Reset completed >>>");
     
});
