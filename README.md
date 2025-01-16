rst Docker Project
This is my first project where I learned the basics of Docker by containerizing a simple Node.js API. This repository demonstrates how to use Docker to build and run a Node.js application in a container.

Project Overview
A basic Node.js API that is containerized using Docker.
The project helps me understand Docker fundamentals, such as creating Docker images, managing containers, and linking them to applications.
Project Structure
Dockerfile: The file used to build the Docker image.
app.js: The main Node.js API file.
package.json: Contains the dependencies and configurations for the Node.js application.
.gitignore: Specifies which files should not be tracked by Git.
Getting Started
Follow these steps to run this project locally using Docker.

Clone the repository:

bash
Copy
Edit
git clone https://github.com/jenesh18/first-docker-project.git
cd first-docker-project
Build the Docker image: Run the following command to build the Docker image from the Dockerfile:

bash
Copy
Edit
docker build -t first-docker-api .
Run the Docker container: After building the image, you can run it in a container:

bash
Copy
Edit
docker run -p 3000:3000 first-docker-api
Access the API: Open your browser and go to http://localhost:3000 to access the API.

Why This Project?
This project is part of my journey to learning Docker. It covers the basic concepts of containerization and how to set up a Node.js application within a Docker container. The main goal is to understand how Docker works in a real-world application scenario.

Technologies Used
Node.js: JavaScript runtime environment for building the backend API.
Docker: Tool for containerizing the application.
Future Improvements
Add more features to the Node.js API (such as endpoints for CRUD operations).
Experiment with Docker Compose for managing multiple containers.
Explore Docker networking and volume management.
