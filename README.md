# cloud-note-api

## Description

`Cloud Note` is a place to keep track of your notes across devices. This is the API that supports the `Cloud Notes` App.

## Running Locally

## Seeding Local DB

## HighLevel

### Where does the app start

### Routes and Generic Routes

### Authentication

### Testing

The tests run agains a database inside a docker container, using an npm package [pg-test](https://www.atdatabases.org/docs/pg-test). You'll need to install docker on your machine to run locally.

For Ubuntu:

```
# Install Docker
sudo apt install docker.io
sudo apt install docker-compose

# Start it
sudo systemctl start docker
```

This app has a testing suite - it relies on a dedicated (local) testing db.
