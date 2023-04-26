# Data Models
This document will provide the data model design for the notification system. 

## User Preferences
The data model will need to have a user preference feature to store the notification channel they choose. This will need to include the configuration details for the platform.

### User preference template
‘’’ 
{
  "ID": "username",
  "platform": " Discord, Slack, Microsoft Teams, Twilio, and Email.",
  "config": {
    "webhook": "https://platformName/api/webhooks/xxx/xxx"
  }
}
‘’’ 

## Platform Configuration Details

### Discord
webhookUrl (string): The webhook URL for the Discord channel where notifications should be sent.

### Slack
webhookUrl (string): The webhook URL for the Slack channel where notifications should be sent.

### Microsoft Teams
webhookUrl (string): The webhook URL for the Microsoft Teams channel where notifications should be sent.

### Twilio
accountSid (string): The Twilio account SID.
authToken (string): The Twilio auth token.
phoneNumber (string): The user's phone number where the text should be sent.

### Email
emailAddress (string): The user's email address where email notifications should be sent.
emailServiceProvider (string): The email service provider used for sending email notifications.
apiKey (string, optional): The API key or other credentials required for the email service provider.

## Storage
The storage for this data model will be stored within the database used for the application. 

## Next Steps
*Create the database table for the data model.
*create the logic to retrieve the data from the database.