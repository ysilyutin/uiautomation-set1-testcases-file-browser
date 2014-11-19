#import "assertions.js"
#import "lang-ext.js"
#import "uiautomation-ext.js"
#import "screen.js"
#import "test.js"
#import "image_assertion.js"

test("<<< Test - Add Web Shortcut 'Box' >>>", function(target,app) {
     
     var window = app.mainWindow();
     var target = UIATarget.localTarget();
     var app = target.frontMostApp();
     
     app.logElementTree();
     
     target.frontMostApp().navigationBar().leftButton().tap();
     target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Box"].tap();
     target.delay(4);
     target.frontMostApp().mainWindow().tableViews()["Empty list"].tapWithOptions({tapOffset:{x:0.38, y:0.29}});
     
     UIALogger.logMessage("<<< Enter Email/username >>>");
     UIATarget.onAlert = function onAlert(alert) {
     var title = alert.name();
     UIALogger.logWarning("Alert with title '" + title + "' encountered!");
     if (title == "E-mail/username") {
     UIALogger.logMessage("<<< Wait 4 seconds, input E-mail and click on 'OK' >>>");
     target.delay(4);
     target.frontMostApp().keyboard().typeString("qa1moka5@gmail.com");
     alert.buttons()["OK"].tap();
     return true;
     }
     return false;
     }
     
     target.delay(4);
     target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["Password, (hidden)"].tap();
     UIATarget.onAlert = function onAlert(alert) {
     var title = alert.name();
     UIALogger.logWarning("Alert with title '" + title + "' encountered!");
     if (title == "Password") {
     UIALogger.logMessage("<<< Wait 4 seconds, input password and click on 'OK' >>>");
     target.delay(4);
     target.frontMostApp().keyboard().typeString("P@ssw0rd");
     alert.buttons()["OK"].tap();
     return true;
     }
     return false;
     }
     
     target.delay(4);
     target.frontMostApp().navigationBar().rightButton().tap();
     
     
     UIALogger.logMessage("<<< Wait 15 seconds... >>>");
     
     
     target.delay(15);
     
     });
