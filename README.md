# Getting Started with this Repo

This is a demo on how to proxy requests through an Nginx server. This demo was delivered during the CBF fest as part of a technical workshop on "Securing Secret Keys in Frontend Application"

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

*Prerequisites*:

- Ensure the following are installed:
  - Node
  - Docker Engine
- Sign up to the API service [here](https://home.openweathermap.org/users/sign_up)
- Access your API keys [here](https://home.openweathermap.org/api_keys)

## Setting Up

1. Clone this repository:
`
git clone https://github.com/haelmj/fest-workshop-nginx.git
`

2. Using a code editor, rename the *.env.example* file to *.env* and replace the text on the right side of the equal sign with your API Key.

3. Build and run the container: `docker-compose up --build`

Server should be visible on 127.0.0.1:80 or <http://localhost>
