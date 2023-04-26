# Notification System Testing Plan
This document will provide the Testing plan design for the notification system. 

## Testing Strategies
### Unit Testing
Testing lambda functions in isolation. Testing stress cases and error conditions. 
* Test the input validation for errors.
* Test the lambda function for failed API calls.

### Integration Testing
Test components connections to each other such as the API endpoints. Lambda functions and platform integrations covering a multitude of scenarios such as stress cases and user error.
Example:
* Test the API endpoints with invalid input data.
* Test the interaction between the Lambda functions and the platform integrations.

### End-to-End Testing
Testing the entire process of the notification system to test if it works as intended. With wide ranges of scenarios to test every avenue of misuse.
#### Example:
Test the entire process from start to finish, testing it on all available platforms. 

### Load Testing
Wide volume-based testing to be done to the system to stress test the auto scaling features work as intended.
##### Example:
API endpoints and lambda functions tested with high volume numbers.

### Security Testing
Security testing done to ensure the system is secure with no vulnerabilities.
#### Example:
Test the API Endpoint for vulnerabilities.
Test the API endpoints for potential vulnerabilities, such as SQL injection or cross-site scripting (XSS) attacks.


## Best Practices

* Test the application often as to stay reliable.
* Automate the testing to run consistently and efficiently.
* Cover different scenarios to match any and all possible situations.

## Tools and Frameworks
* Unit testing – jest will be used for javascript and pytest for python to write and run the tests. 
* End-to-End Testing - Selenium will be used to perform end-to-end tests.
* Load Testing - JMeter will be used to perform loaded tests.
* Security testing - OWASP ZAP will be used to perform security tests.

## Next Steps
* Write unit tests for the Lambda functions.
* Set up integration tests for the API endpoints and platform integrations.
* Conduct load tests to ensure the system can handle a large number of requests.
* Perform security tests to ensure the system is secure and resilient against potential attacks.
