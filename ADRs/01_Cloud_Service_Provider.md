# 01 - Cloud Service Provider 

## Status
Proposed

## Context
As the local application has been created and now is to be migrated over to the cloud a cloud provider must be chosen to use it. There are a variety of factors that influence this decision and in the context of the brief given these include the services needed, security, cost and performance. As we are security-conscious engineers the cloud service chosen should meet all security requirements for the company.

### Assumptions
The application could be hosted on a large variety of cloud service providers however we need to consider a security focused mind when choosing one.

## Decision
We decided to use AWS as the primary cloud service provider due to its large variety of services, tools and security benefits it provides. the services and tools provided include EC2 instances, S3 storage, RDS database, and CloudWatch monitoring and the security benefits include encryption capabilities, key management, and sensitive data discovery.

### Consequences
Using AWS may result in our available services and tools being limited as we would only be able to use AWS-based applications. The company would also need to invest potentially copious amounts of time and cost into training engineers on AWS protocols and best practices. This is enforced with the addition of the security benefits of AWS and we engineers would need to be well coerced on the best practices to minimize any security threats to the application.

### Notes
as part of this decision, we put research into other cloud services providers such as google cloud and Microsoft azure but found AWS to be the most efficient due to its reputation and reliability. 

# Author 
JJ 