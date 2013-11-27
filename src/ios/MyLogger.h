#import <Cordova/CDV.h>

@interface MyLogger : CDVPlugin

-(void) log:(CDVInvokedUrlCommand*) command;

@end