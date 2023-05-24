# Smart Roads

A faculty project in which we use our knowledge in software engineering, AI & ML, and hardware to build a smart road. 

**Feature of the project:**

1. The smart road will have multiple units.
2. Unit will be uniformally apart from each other (equal distances between them).
3. Each unit will consist of a camera and other sensors.
4. The light of the lamppost will be automatically turned on and off depending on the traffic.
5. The camera will be used to detect emergency cases and send images to the backend server.
6. The unit will count the number of cars passed in front of it.
8. Counts will be stores for the past 24 hours and snapshots will be taken regularly.
9. This data will be used to help advertisers distribute their ads.

# Entities

## Road

- Name
- Units: many units to one road

## Unit

- Road: id of the road
- Location: longitude and latitude (at any point on it)
- Accidents: many accidents to one road
- Count of Vehicles: for the past 24 hours

## Vehicles Count of Road

- Road
- Unit
- Data

## Accident

- Status: `deadly, danger, normal, unkown`
- Unit: the id of the unit
- Images: multiple images of the accident
- Handled: `true, false`
- Date & Time

images
![image](https://github.com/MohamedHamed12/smartroads/assets/90472426/da1a4060-1653-4308-8c03-f6a8a04662de)
![image](https://github.com/MohamedHamed12/smartroads/assets/90472426/266fe7dc-2702-4a2d-99ac-4956bb0a77a8)
![image](https://github.com/MohamedHamed12/smartroads/assets/90472426/35fc1c7e-b458-422b-b5aa-330173466704)



