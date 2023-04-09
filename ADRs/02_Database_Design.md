<<<<<<< HEAD
# Title
02 - Database Design: Amazons RDS with SQL

## Status
Proposed

## Context
Before migration a database model must be chosen due to the application holding data in the form of notes. This model must meet the applications requirements for scalability, flexibility, and performance. This is due to the application needing to retrieve and store data within the database quickly while also allowing the addition of other features to be implemented if the application wore to scale up, either in volume or users.

### Assumptions
We can assume that the application will see significant growth in users and volume, which will require a database model allowing for scalability. We can also assume that the database to be used within the application to be a SQL-based database. This would allow more flexibility in data querying than a noSQL database. We know that the company has a large number of users and thus the application must nee to handle a significant amount of read and write traffic at all times. We must also assume that the company will want to upgrade the system in the future and must allow features to be implemented without major disruptions to the existing architecture of the application. We also assume that the database must prioritize efficiency and security of the user’s data.

## Decision
Looking at several options we have decided to use Amazons RDS with SQL database, this is because RDS provides a managed scalable and reliable service that supports multiple SQL engines. For the database design we decided to use a relational model with tables for the note ID, title of note, contents of note, type of note, creation date and last modified date. This will also allow for foreign keys to be used to link to other tables to attach even more metadata for as use basis. When looking at performance, we have chosen to use RDS for its read replicas and caching features. This will allow for indexing and partitioning to ensure efficient data retrieval and storage.

### Consequences
By choosing RDS with SQL with a rational database we will need to spend an amount of time before creating the application on the design process including creating data models, designing indexes and partitions. The team would also have to be trained on SQL and managing databases including database security. There may as well be more upfront costs in both hardware and training, however the below benefits outweigh them.
The positive consequences of using this model will be that the requirements are more than met in terms of scalability, flexibility, and performance. 

Scalable: due to it being a built-in service that automatically handles almost all off the operations involved, such as when scaling up the database or creating backups. 

Flexibility: the use of the rational database will provide flexible data models that can accommodate the current note format and any future advanced ones. Complex queries can also be used to join tables and filter the database. 

Performance: by using indexing, partitioning, and caching the performance of the database will be improved in terms of read and write operations. For example, indexing will speed up the retrieval of data and partitioning will improve write operations.

### Notes
As a part of this decision, we looked at a multitude of different models but were unsatisfied with them as they would require heavy modification to the outstanding application. We found that RDS matches our criteria in the form of scalability, flexibility and performance and will be easier to implement as to not cause unnecessary disruption.

# Author 
JJ 

=======
# Title
02 - Database Design: Amazons RDS with SQL

## Status
Proposed

## Context
Before migration a database model must be chosen due to the application holding data in the form of notes. This model must meet the applications requirements for scalability, flexibility, and performance. This is due to the application needing to retrieve and store data within the database quickly while also allowing the addition of other features to be implemented if the application wore to scale up, either in volume or users.

### Assumptions
We can assume that the application will see significant growth in users and volume, which will require a database model allowing for scalability. We can also assume that the database to be used within the application to be a SQL-based database. This would allow more flexibility in data querying than a noSQL database. We know that the company has a large number of users and thus the application must nee to handle a significant amount of read and write traffic at all times. We must also assume that the company will want to upgrade the system in the future and must allow features to be implemented without major disruptions to the existing architecture of the application. We also assume that the database must prioritize efficiency and security of the user’s data.

## Decision
Looking at several options we have decided to use Amazons RDS with SQL database, this is because RDS provides a managed scalable and reliable service that supports multiple SQL engines. For the database design we decided to use a relational model with tables for the note ID, title of note, contents of note, type of note, creation date and last modified date. This will also allow for foreign keys to be used to link to other tables to attach even more metadata for as use basis. When looking at performance, we have chosen to use RDS for its read replicas and caching features. This will allow for indexing and partitioning to ensure efficient data retrieval and storage.

### Consequences
By choosing RDS with SQL with a rational database we will need to spend an amount of time before creating the application on the design process including creating data models, designing indexes and partitions. The team would also have to be trained on SQL and managing databases including database security. There may as well be more upfront costs in both hardware and training, however the below benefits outweigh them.
The positive consequences of using this model will be that the requirements are more than met in terms of scalability, flexibility, and performance. 
* Scalable: due to it being a built-in service that automatically handles almost all off the operations involved, such as when scaling up the database or creating backups. 
* Flexibility: the use of the rational database will provide flexible data models that can accommodate the current note format and any future advanced ones. Complex queries can also be used to join tables and filter the database. 
* Performance: by using indexing, partitioning, and caching the performance of the database will be improved in terms of read and write operations. For example, indexing will speed up the retrieval of data and partitioning will improve write operations.

### Notes
As a part of this decision, we looked at a multitude of different models but were unsatisfied with them as they would require heavy modification to the outstanding application. We found that RDS matches our criteria in the form of scalability, flexibility and performance and will be easier to implement as to not cause unnecessary disruption.

# Author 
JJ 

>>>>>>> 72dbd8da38cb2dafd37638e1c517487c030ae381
