# Notification System Platform Integrations
This document will provide the platform integrations design for the notification system. The platforms chosen are Discord, Slack, Microsoft Teams, Twilio, and Email.

## Discord Integration
The discord integration will use discords webhooks to send the notifications to a specific discord channel. These webhooks will need to be provided by the user, within their notification channel preference.
### Workflow
* The notification manager will format the notification with the webhook URL to the Discord integration Lambda function.
* The Lambda function will send an HTTP POST request to the webhook URL with the notification payload.
* Discord will then process the request and send the notification to the discord channel.

## Slack Integration
The slack integration will use slack webhooks to send the notifications to a specific slack channel. These webhooks will need to be provided by the user, within their notification channel preference.
### Workflow
* The notification manager will format the notification with the webhook URL to the slack integration Lambda function.
* The Lambda function will send an HTTP POST request to the webhook URL with the notification payload.
* Slack will then process the request and send the notification to the slack channel.

## Microsoft Teams Integration
The Microsoft team’s integration will use Microsoft teams webhooks to send the notifications to a specific Microsoft teams’ channel. These webhooks will need to be provided by the user, within their notification channel preference.
### Workflow
* The notification manager will format the notification with the webhook URL to the Microsoft team’s integration Lambda function.
* The Lambda function will send an HTTP POST request to the webhook URL with the notification payload.
* Microsoft teams will then process the request and send the notification to the Microsoft teams’ channel.

## Twilio Integration
The Twilio integration will use the Twilio API to send text notifications to the user’s phone. These numbers will need to be provided by the user as well as their Twilio account SID and auth token.
### Workflow
* The notification manager will format the notification with the Twilio account SID, auth token, and phone number to the Twilio integration Lambda function.
* The Lambda function sends an HTTP POST request to the Twilio API with the notification payload and user's phone number.
* Twilio processes the request and sends the SMS notification to the user’s phone.

## Email Integration
The email integration will use an amazon’s SES email provider to send the notifications to a specific email address. These emails will need to be provided by the user, within their notification channel preference.
### Workflow
* The notification manager will format the notification with the email address and email service provider credentials to the email integration Lambda function.
* The Lambda function sends an HTTP POST request to the email service provider's API with the notification payload and users email address.
* The email service provider processes the request and sends the notification to the user’s email address.

## Error Handling
each platform will have its own error handling functions to ensure the notifications are sent reliably. if an error happens the integration workflow will try again, if it does not send through after 5 times an alert to the dev team will be sent.

## Next Steps
* Implement the Lambda functions for each platform integration.
* Set up API Gateway endpoints for each platform integration.
* Test the platform integrations to ensure they are working correctly.
* Integrate the platform integrations with the notification manager.
* Monitor and log the performance of the platform integrations.

