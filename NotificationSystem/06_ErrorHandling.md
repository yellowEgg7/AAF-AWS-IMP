# Notification System Error Handling
This document will provide the Error Handling design for the notification system. 

## Error handling features
### Input Validation
The first error handling process will be to validate the users’ input data to the API Endpoints. This is due to their link to the lambda functions. The data must be correct in terms of the format such that it falls in between the validation constraints. This check will be the first within the error handling chain as the data must be correct for the rest of the error handling to function as intended.

#### Template:
Check if the user Id is an empty string.
Check if the platform chosen is within the range of available ones: Discord, Slack, Microsoft Teams, Twilio, Email.


### Exception Handling
When the lambda functions are called cache blocks can be used to catch and analyse the various exceptions preventing crashing.

####Template:
Try-catch blocks are used to store the lambda functions, if an error occurs the request is logged, and an error message is sent to the user.

### Logging and Monitoring
While the lambda functions are executing log errors and exceptions will have diagnostic data copied and sent to the applications monitoring and alerting system.

#### Template:
AWS CloudWatch will be used to log and control the alerting system for the lambda functions.

### Standoff plan
Standoff plans created for external APU calls within the platform integration part of the notification systems workflow. This is to handle short term failures such as networking errors or rate limiting.

#### Template:
A standoff plan with a jitter to be used when the system retries the API configuration when contacting platform integrations.

## Best Practices
* Detect and handle the errors as quick as possible.
* Inform the user with a helpful error message.
* Log the errors for further diagnostics later on.

Next Steps
* Create the error handling features within the lambda functions and API configurations.
* Configure AWS CloudWatch to work within the monitoring features.
* Test the error handling system to see if it is functional.

## Author
JJ
