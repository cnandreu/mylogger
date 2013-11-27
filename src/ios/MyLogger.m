#import "MyLogger.h"
#import <Cordova/CDV.h>

 @implementation MyLogger

-(void) log:(CDVInvokedUrlCommand*) command
{
    CDVPluginResult* pluginResult = nil;
    NSString* msg = [command.arguments objectAtIndex:0];

    if (msg != nil && [msg length] > 0) {

        NSLog(@"[LOG] %@", msg);
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];

    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end