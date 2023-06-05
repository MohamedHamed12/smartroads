## Smart Roads

This project aims to develop a smart road using Django, combining software engineering, AI & ML, and hardware to create an intelligent transportation system.

## Features

The smart road project incorporates the following features:

1.  **Multiple Units**: The smart road consists of multiple units uniformly spaced apart from each other, ensuring equal distances between them.
    
2.  **Unit Components**: Each unit comprises a camera and various sensors to enable different functionalities.
    
3.  **Automatic Light Control**: The lamppost lights will be automatically turned on and off based on traffic conditions, ensuring energy efficiency.
    
4.  **Emergency Case Detection**: The camera installed in each unit will detect emergency cases and send images to the backend server for further analysis and response.
    
5.  **Vehicle Counting**: The units will count the number of cars passing in front of them, providing valuable traffic data.
    
6.  **Data Storage**: The system will store the vehicle counts for the past 24 hours and capture regular snapshots, enabling historical analysis and reporting.
    
7.  **Advertisement Distribution**: The collected data will be utilized to assist advertisers in distributing their ads effectively.
    

## Technologies Used

The Smart Roads project utilizes the following technologies:

-   Django: A Python web framework for building the backend server and handling the application's logic.
-   Rest Framework: Django Rest Framework will be used to build a RESTful API for 
-   AI & ML: Artificial Intelligence and Machine Learning algorithms will be employed for emergency case detection and traffic analysis.
-   Hardware: Various hardware components, including cameras and sensors, will be integrated into the units for data collection and monitoring.

## Installation and Setup

To set up and run the Smart Roads project locally, follow these steps:

1.  Clone the repository:
    
    ```
    shellgit clone https://github.com/MohamedHamed12/smartroads.git
    
    ```
    
2.  Navigate to the project directory:
    
3.  Install the project dependencies using a virtual environment:
    
    ```
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    
    ```
    
4.  Configure the necessary settings:
    
    -   Modify the database settings in `config/settings.py` to match your environment.
5.  Apply database migrations:
    
    ```
    python manage.py migrate
    
    ```
    
6.  Start the development server:
    
    ```
    python manage.py runserver
    
    ```
    
7.  Access the application by visiting `http://localhost:8000` in your web browser.
    

## Usage

Once the Smart Roads project is up and running, you can use the following instructions to utilize its features:

-   **Automatic Light Control**: The system will automatically control the lamppost lights based on the traffic conditions.
    
-   **Emergency Case Detection**: The cameras installed in the units will detect emergency cases and send the captured images to the backend server for analysis and appropriate response.
    
-   **Vehicle Counting**: The units will continuously count the number of cars passing in front of them, providing real-time and historical traffic data.
    
-   **Advertisement Distribution**: Advertisers can leverage the collected data to distribute their ads effectively, targeting specific areas and times based on traffic patterns.
    

## Contributing

Contributions to the Smart Roads project are welcome! If you want to contribute, please follow these guidelines:

1.  Fork the repository and create your branch:
    
    ```
    git checkout -b feature/your-feature
    
    ```
    
2.  Make your changes and ensure that the code adheres to the project's coding style.
    
3.  Write tests to cover your changes and ensure they pass.
    
4.  Commit your changes and push them to your forked repository.
    
5.  Create a pull request describing your changes

images
![image](https://github.com/MohamedHamed12/smartroads/assets/90472426/da1a4060-1653-4308-8c03-f6a8a04662de)
![image](https://github.com/MohamedHamed12/smartroads/assets/90472426/266fe7dc-2702-4a2d-99ac-4956bb0a77a8)
![image](https://github.com/MohamedHamed12/smartroads/assets/90472426/35fc1c7e-b458-422b-b5aa-330173466704)



