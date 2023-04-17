# Title
04 – Backup and Recovery

## Status
Proposed

## Context
While migrating our application to the cloud we must ensure proper security controls are used in order to prevent data loss due to unforeseen circumstances such as hardware failure, data corruption or accidental deletion.it is therefore essential to have a backup and recovery plan. This plan should aim to minimize data loss and recovery time in event of an emergency, while also being realistic to the budget and cost restraints. The frequency of backups and storage of them should also be kept in mind when designing this aspect of the infrastructure. This is done in order to minimize downtime.

### Assumptions
The database is assumed to be critical to the application and thus its security is at the most vital. There fore we will have to also assume the back up and recovery process will be dealing with sensitive data. Therefore, the process should minimize the risk of data loss or corruption. We must also assume we have to apply with regulations such the general data protection regulation (GDPR) and be overall reliable, efficient, and scalable. Therefore, to address these assumptions we must design a technical backup and recovery process that will work alongside the RDS with SQL database. This process will have to incorporate database-level backups, incremental backups, and point-in-time recovery If it is to meet all requirements. Data retention policies can also be created to comply with regulations and best practices.

## Decision
The decision made includes automating backups on an incremental basis and storing said backups on a separate database away from the original. By making these backups incremental we will allow for reduced time wastage. Point-in-time recovery will also be used in conjunction with back up retention policies and verification in order to verify the integrity of the data being backed up. 
* Automated backups: making the backups automated on a regular basis depending on the SLA requirements will allow less resources to be allocated to the upkeep of the database. The backups will be automatically saved onto a separate database away from the original. This will be done to ensure if a corruption occurs on one database there will always be a safe backup available. The frequency of the backups will depend on the volume of data being created and modified but due to the relatively low volume so far, regular backups can be made as the download time will be relatively short.
* Incremental backups: the use of incremental backups will assist in the cost of the project as only the new information will be downloaded to the backup leaving the already saved information allowing for an even less demanding resource management.
* Point-in-time recovery: this will be used to restore a database to a specific point in time from the backups in case any data is corrupted, and a quick upkeep is needed to restore the database to the last saved state. This will mitigate any risk of accidental deletion. 
* Backup retention policy: this will be used within the regulation basis as to define how long the backups should remain saved, as it will be taking up storage a certain amount of time can be set on the level of priority for the data as to only delete low level data to make space.

### Consequences
The consequences of this decision will be overall positive as data availability and security will be upheld. The trade off however will be within recovery time, cost, and complexity Some off the negative trade-offs include:
* Increased complexity: this decision will increase the overall complexity of the project as additional resources will be needed to maintain and support the new feature, the team would have to be trained more on data security and be able to quicky restore the database to the last backup quickly. 
* Increased cost: the cost to implement this feature will be dependant on the storage capacity of the secondary database, this will also be dependent on the frequency of the backups made. Due to the notes being very small in storage and the frequency not being high - with incremental backups - this will not be a problem. However, the addition of testing efforts needed to be maintained will be, this is where the database will need regular testing to ensure it works as expected.
Despite these consequences the implementation of a backup and recovery system is a crucial part of the database and overall security for the infrastructure. Some off the positive effects are as follows:
* Improved recovery time: in the event of a system failure due to data loss, backups will be available to be imported due to them not being affected as they are in a separate database, this means the downtime can be kept minimal.
* Increased reliability: the backup and recovery plan will increase the overall reliability of the application due to the risk off data loss being depreciated.

## Diagram 
![Untitled Diagram drawio (10)](https://user-images.githubusercontent.com/118286503/232553257-575dad45-a1d3-4989-a447-220016f9565f.png)


### Notes
The main thing to note is the continual testing of the system to make sure it operates as intended this is to ensure in an event of dire consequences the system will be able to save and maintain the data it is trying to protect. Regular testing will thus have to be done either in the form of reverse engineering the system or pen testing it.
