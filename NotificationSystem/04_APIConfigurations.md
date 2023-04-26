# Notification System API configurations
This document will provide the API configuration design for the notification system. 

## API Overview
The API will be implemented using AWS API gateway and lambda functions. API gateways will be used to connect with HTTPS endpoints for the lambda functions. These functions will be the ones to send the notifications.

## API Endpoints
### Template
This is the template endpoint that will be used for the event listener when the note is created.
```
Copy
  {
    "noteId": "string",
    "noteTitle": "string",
    "noteContent": "string",
    "userId": "string"
  } 
  ```
Response: A success notification or an error message.

### Discord API endpoint
This is the template endpoint that will be used for the event listener when the note is created for discord.
Path: /notifications/discord
Method: POST
Request:
```
Copy
  {
    "userId": "string",
    "message": "string",
    "webhookUrl": "string"
  }
```
Response: A success notification or an error message.

### Slack API endpoint
This is the template endpoint that will be used for the event listener when the note is created for slack.
path: /notifications/slack
Method: POST
Request:
```
Copy
  {
    "userId": "string",
    "message": "string",
    "webhookUrl": "string"
  }
```
Response: A success notification or an error message.

### Microsoft Teams API endpoint
This is the template endpoint that will be used for the event listener when the note is created for Microsoft Teams.
path: /notifications/teams
Method: POST
Request:
```
Copy
  {
    "userId": "string",
    "message": "string",
    "webhookUrl": "string"
  }
```
Response: A success notification or an error message.

### Twilio API endpoint
This is the template endpoint that will be used for the event listener when the note is created for Twilio.
path: /notifications/twilio
Method: POST
Request:
```
Copy
  {
    "userId": "string",
    "message": "string",
    "accountSid": "string",
    "authToken": "string",
    "phoneNumber": "string"
  }
```
Response: A success notification or an error message.

### Email API endpoint
This is the template endpoint that will be used for the event listener when the note is created for email.
path: /notifications/email
Method: POST
Request:
```
Copy
  {
    "userId": "string",
    "message": "string",
    "emailAddress": "string",
    "emailServiceProvider": "string",
    "apiKey": "string"
  }
```
Response: A success notification or an error message.

## Rate Limiting
Rate limiting will be used within the API gateway endpoints to ensure no abuse occurs.

## Security
The API gateway will be used in conjunction with HTTPS to ensure a secure connection between the event listener, notification manager and specific platforms.  

## Next Steps
* Create the lambda function for each platform.
* Configure the API gateway endpoints 

## Author
JJ
