# Notification System Overview
The notification system is designed to send notifications in real time on a range of platforms including Discord, Slack, Microsoft teams, Twillo and email. The notification will be sent whenever a note is created within the application. This document will provide a brief overview of the system. 

## Reasoning
The reasoning for the system is to keep users informed about new notes that are created on the application to increase communication and thus productivity for the firm. By providing this service, users throughout the company can stay up to date with the latest information. 

## Supported Platforms
The notification system supports the following platforms:

1. Discord: Send notifications to a specified Discord channel using Discord Webhooks.
2. Slack: Send notifications to a specified Slack channel using Slack Webhooks.
3. Microsoft Teams: Send notifications to a specified Microsoft Teams channel using Incoming Webhooks.
4. Twilio: Send SMS notifications to user’s mobile devices using the Twilio API.
5. Email: Send email notifications to user’s email addresses using an email service provider.

## User Preferences
We will offer the users the ability to choose the specific channel they want to use for the notifications as to meet their best needs. They would have to provide their own configuration details, phone numbers, emails or webhook URLs.

## Scalability
The system is designed with scalability at its heart being designed with the appropriate data structures and architecture patterns to handle the trend of a growing volume of users. 

## Author
JJ
