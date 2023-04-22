# Title
03 Security Controls 

## Status
Proposed

## Context
As security-conscious engineers we understand the gravity of establishing secure infrastructure when working with cloud base databases as to protect the conifidentially, integrity and availability of data. Therefore, The proper security controls must be implemented to not only protect confidentiality but availability of data. We must also comply with all regulation and best practices within handling data. In this context the security controls to be looked at will be the likes of security group rules, IAM policies, encryption, and monitoring to establish a secure cloud infrastructure.

### Assumptions
When looking at security we will have to assume that our application will be subjected to various security threats such as unauthorised access, database breaches and DDoS attacks. We can also assume that we must comply with all regulation such as the General Data Protection Regulation act (GDPR). 

## Decision
We have decided to implement the following security controls to the application: Network security, Identity and access management, Data protection and Monitoring and logging.
*Network security: security groups will be used to capture and analysis inbound and outbound traffic to the resources on the cloud. This will be implemented as to 1. Restrict incoming traffic to the to only designated ports and protocols we deem as necessary and 2. To only allow outgoing traffic to go to specific destinations based off privilege ladders. Virtual private cloud (VPC) services will also be used in conjunction with security groups to allow us to isolate any resource of the application from other networks to increase security, this can be done with the addition of encryption on the traffic between groups.
* Identity and access management: staying on track with using AWS services, we can also use AWS identity and access management (IAM) to manage the access to the resources of the application, specifically the database. This will allow us to give privilege levels to employees working on the application to only be able to access the parts of the site that they need to. IAM can enforced with multifactor authentication (MFA), something the company will need to think about, whether it be via phone or pass key.
* Data protection: data encryption will be used to protect users’ data within the application, this is done to prevent unauthorised access. We can use AWS’s key management service (KMS) to do this. KMS works by managing the encryption keys for the data and implements encryption to the storage, such as with our databases model being RDS. Secure transport protocols can also be utilized such as using HTTPS for data being sent to the database.
* Monitoring and logging: AWS provide services such as AWS CloudWatch which will monitor the resources of the application detecting any security incidents and performance failures. Alarms and notification systems can be sent up for different levels of threat and performance issues. CloudWatch can also be used to centralize and analyse the log data for the resources of the application allowing AWS config to track the changes made to the resources, making sure only the authorised users made them and if not sending an alert to the team.

### Consequences
While the addition of these security controls is overall a positive thing there are some trade-offs in terms of consequences. These include:
*Complexity: by implementing these security controls such as IAM policies and group rules the complexity of the project drastically increases and may require additional resources to completed. This may be due to alterations to the main architecture. The team will also have to be fully trained on the new practices and monitoring options.
*Performance: encryption and monitoring will affect the performance of the application. The requirements must be balanced alongside the performance requirements to make sure it is operating at the desired level. For example, caching and load balancing may be having to be used to counterbalance to slower performance of the application due to several encryption steps being introduced to the transport protocols.
*Cost: most security controls mainly encryption and monitoring will insure high-cost levels for the firm as more resources will have to be allocated. These costs must align within the firm’s budget to minimize waste.

While these trade-offs seem viable for implementation the benefits ensure this, reduced risk of security incidents may be ideal for the firm as cleaning up a database breach may be much more costly than if they had just implemented these security features. Compliance with regulation being another strong benefit as implementing these security controls ensures that the firm is staying within regulation and away from legal or public relation risk. From a business standpoint the increase security controls will also add confidence to all stakeholders increasing internal and external relations with the firm as all parties feel their data is being kept secure.

## Diagram
![Untitled Diagram drawio (9)](https://user-images.githubusercontent.com/118286503/232553190-902a791b-c851-4e0f-864c-806c2752a476.png)


### Notes
As these security features as implemented, we must ensure to constantly review and upgrade them regularly to ensure the infrastructure is kept secure. This can be done with annual security audits such as penetration testing to find vulnerabilities within the infrastructure and patches to them. 

# Author 
JJ 
