# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

## Migration to Node.js Server

We have migrated the backend server from Python (FastAPI) to Node.js using Express. The new implementation provides the same API routes for managing the task list, ensuring a seamless transition for existing clients.

### Migration Details

- The server code now resides in `node-server/src/index.js`.
- Dependencies are managed via `node-server/package.json`.
- The Docker setup and `docker-compose.yml` have been updated to use the Node.js 
server.
- The Node.js server should now be running. You can access at port `8001`.
- API routes and request/response formats remain unchanged for compatibility.

Refer to the updated project structure and instructions for running the Node.js server.


