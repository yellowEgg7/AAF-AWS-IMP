# Title
06 – Scaling strategy

## Status
Proposed

## Context
As the application is expected to experience growth on the future within volume of traffic to the application. The application must be able to handle an increase so that users are able to use the application without performance failures. A scaling strategy must then be created to handle the increasing traffic while maintaining continual performance.

### Assumptions
The assumptions made are that the applications user base will increase which will lead to an increase in the volume of data being sent across the application. We can also make assumptions that there will be fluctuations with the volume in traffic and the scaling strategy must be able to handle this in an efficient manner.

## Decision
The autoscaling strategy we have decided to implement is a built in AWS service called AWS Elastic Beanstalk. This decision was based on the fact beanstalk allows for an easy management of the infrastructure an automation in scaling of said infrastructure. For example, beanstalk will automatically scale up factors such as the CPU utilization, network traffic and performance metrics. This will be extremely impactful with the flexibility requirements for when the application needs to deal with more volume. 
With the use of beanstalk there are thresholds needed for when a scaleup is needed the following thresholds set are to do with:
* CPU utilization – for example when any instance goes above 75% beanstalk will automatically expand the instances number to the application so that it will function as normal. 
* Network traffic, when the network traffic goes over 75%, beanstalk will automatically add new instances to be able to handle the traffic.
* Health checks, beanstalk will automatically perform health checks on the instances every 5 minutes and if nay fail than a new instance can be imported to replace the old one for additional traffic.

### Consequences
The consequence of this decision is minimal as allowing the application to have a auto-scaling strategy will ensure it can handle influxes in volume and the option of expansion to the resources in the future. This will ultimately lead to a better overall user experience as there will be no downtimes when the system is running at high volumes. 
However, there is always a risk that the autoscaling system will not work as intended or not at all and could lead to downtime if not configured correctly. There is no concern to the addition off higher costs as this is a built in AWS service and will be relatively easy to implement but concern must be made to make sure it is configured correctly. 

##Diagram
![Untitled Diagram drawio (11)](https://user-images.githubusercontent.com/118286503/232553421-0a635640-00c5-4f55-bc80-461a30766edd.png)


### Notes
The performance of the application must be monitored to ensure that the auto scaling strategy works as intended with the thresholds being continually changed or modified as upgrades to the system are made within the future.
