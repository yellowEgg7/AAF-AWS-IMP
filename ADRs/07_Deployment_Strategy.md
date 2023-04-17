# Title
07 – Deployment Strategy

## Status
Proposed

## Context
When deploying newer versions, the main aim is to minimize downtime and ensure that bugs are identified early on. After looking at a multitude of different types of deployment strategies such as blue-green deployment and rolling deployment, we settled on canary deployment.

### Assumptions
The assumptions made revolve around the applications ability to be deployable in multiple environments, being able to horizontally scale to handle volume impulses, minimize downtime for a better user experience and be cost effective.

## Decision
The deployment strategy we chose to go with is the canary deployment, this is where a new version will be deployed onto a subset of total users – that being 10% of users. While doing this we will keep the pervious version of the application running for the other 90% if the users. Load balances will be used to direct the traffic between the versions, this is to ensure that the new version given to a subset of users only receives a small volume of traffic. 
Once this new version has been deployed it will be closely monitored in terms of performance metrics and automatic testing tools to be used to detect errors or issues. Once everything appears to be working correctly then the number of users being able to access the new version will increase to 20% and so forth until all 100% of users. If any issues are detected, we can roll back the version to a previous version or use a smaller subset group. This will allow corrections and alterations to be made to ensure a better user experience and less workload for us engineers.

### Consequences
The benefit of this form of deployment strategy is that it allows any issues or bugs to be spotted early on before they are able to affect the total user base. This strategy allows for real-world environment to be accessed and thus testing to be more secure.
The only drawback is that this strategy will require more resources to manage two different versions of the application, by running both applications this could put a strain on the cloud service and lead to complicated issues arising. if any issues are detected during this secondary deployment there may be unneeded time and effort to fix issues before attempting another deployment. 
The trade off is worth it as we believe the benefits to outweigh the drawbacks. We believe this is the smoothest strategy to enable newer version to be released with the least amount of hassle.

## Diagram
![Untitled Diagram drawio (12)](https://user-images.githubusercontent.com/118286503/232553502-dcc85464-809d-4ec9-be95-fdb58c75dfcc.png)

### Notes
The team will have to be trained to monitor the performance of both versions to identify any significant issues before they are to become sever for the entire userbase. Communication throughout the team will also have to be upheld so that no disruptions or miscommunication is made as new versions are released.
