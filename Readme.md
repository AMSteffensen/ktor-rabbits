# ktor-rabbits

The Rabbit Project is a web application that provides an API for retrieving random rabbit information. It serves as a demonstration of building a backend API using Kotlin with the Ktor framework and a frontend UI using React.

## Technologies Used

The Rabbit Project utilizes the following technologies:

- **Kotlin**: A statically-typed programming language that runs on the Java Virtual Machine (JVM). It is used for building the backend API using the Ktor framework.
- **Ktor**: A Kotlin framework for building asynchronous server-side and client-side applications. It is used for developing the backend API and serving the frontend assets.
- **React**: A JavaScript library for building user interfaces. It is used for developing the frontend UI components.
- **Parcel**: A fast, zero-configuration web application bundler. It is used for bundling and serving the frontend assets.
- **Node.js**: A JavaScript runtime environment that allows executing JavaScript code outside of a web browser. It is used for running the frontend development server and managing dependencies.

## Project Structure

The Rabbit Project follows a mono-repository structure, containing both the backend and frontend code within the same repository.

- `src/main`: Contains the backend code written in Kotlin using the Ktor framework.
- `src/frontend/`: Contains the frontend code written in React, along with the necessary configuration files.


## Getting Started

To run the Rabbit Project locally, follow these steps:


1. Clone the repository:

   ```shell
   git clone 

2. Install dependencies
    ```shell
    make install

3. Build project
    ```shell
   make build
   
4. Start servers
    ```shell
    make start

## Development

- The backend API endpoints can be modified in the `src/main/kotlin/com/ktor/rabbits/routes/RabbitRoute.kt` file.
- The frontend UI components can be modified in the `src/frontend/` directory.

The dev server will start at
``http://localhost:1234/``

## Contributing

Contributions to the Rabbit Project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).