# Title
05 – Error handling 

## Status
Proposed

## Context
Error handling will be needed to be incorporated in order to offer high levels of availability and reliability for the programming team and users experience. As the application will use multiple types of programming languages and frameworks, the team will have to ensure error handling is fluent throughout. This approach would have to meet the requirements of being efficient, effective, and scalable. 

### Assumptions
We assume that errors are robust and can occur at any stage or resource during the application during development to deployment. We must also assume that there are a multitude of different errors that can occur, for example user errors, systems errors, and network errors. With the expected presence of these errors, we must assume that the error handling must be able to recover the application and allow it to continue as normal.

## Decision
The decision made is to include firstly, structured logging, this is to capture the information about errors when they occur. The information captured will include the error type, critical level, context, and more error detail and be displayed to the user in real time as well as the development team in the form of logs. The reason for this is to allow for filtering and analysis options to define issues and establish a base ground to tackle the error. This will be used in conjunction with a centralised error handling system to collect and aggregate errors from the application making trouble shooting easier. 

We will also use backoff and retry mechanism in order to automate the recovery from transient errors. This will focus on networking errors by identifying and analysing them. This will be done in order to improve the resiliency of the application. These will all be used with the addition of monitoring and alerting systems, to detect and send an alert to the team. This will allow the team to be able to act quickly and as the alerts will allow real-time visibility into the applications performance enabling the team to act efficiently before the issues become more serious.

### Consequences
The error handling processes chosen, while leading to more complexity and development time will result in a more reliable application with a better user experience. The consequences for this decision are as follows:
* Increased complexity: the addition of the error handling processes will make the code structure much more complicated which may lead to more resources being allocated n order to maintain and modify the code in the future.
* Improved reliability and user experience: the addition of any level of error handling will allow the application to be perceived as more reliable. This is because it will lead to fewer downtimes and thus increased stability. The addition of the monitoring and alerting system will lead to much more descriptive error messages for the user allowing for a better understanding as to weather the error was on the front or back end meaning if it was to do with the application itself or on the user’s side.
* Increased development time: these features will mean the development team will have to spend more time on the logging across the application to ensure everything works as expected at all times.

### Notes
There is no real work around to not having error handling as errors are always bound to occur, especially with the use of complex code structures, thus the addition of the error handling processes has been examined in order to provide only the processes that are within the resource restrictions. 
