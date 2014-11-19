#import "assertions.js"
#import "lang-ext.js"
#import "uiautomation-ext.js"
#import "screen.js"
#import "test.js"
#import "image_assertion.js"

test("<<< Test - Open JPG files >>>", function(target,app) {
     
     var window = app.mainWindow();
     var target = UIATarget.localTarget();
     var app = target.frontMostApp();
     var i = 1;
     
     app.logElementTree();
     
     target.frontMostApp().mainWindow().tableViews()["Empty list"].cells()["ios_share_1"].tap();
     target.frontMostApp().mainWindow().searchBars()[0].tap();
     target.tap({x:199.00, y:46.00});     
     
     UIALogger.logMessage("<<< Choose extensions of file >>>");
     target.delay(4);
     target.frontMostApp().keyboard().typeString("jpg");
     target.frontMostApp().keyboard().typeString("\n");

     UIALogger.logMessage("<<< Opening files one by one >>>");
     target.delay(4);
     
                UIALogger.logMessage("<<< Creating loop for cells()[i] >>>");
                target.delay(4);
                for (i = 1; i < 10; i++) { 
                    UIALogger.logMessage("<<< Open "+i+" file >>>");
                    target.delay(1);
                    target.frontMostApp().mainWindow().tableViews()[0].cells()[i].tap();
                    target.frontMostApp().navigationBar().leftButton().tap();
                }
     
     target.frontMostApp().tabBar().buttons()["Files"].tap();
     
     UIALogger.logMessage("<<< Wait 15 seconds... >>>");
     target.delay(15);
     
     });
