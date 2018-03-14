# Swagger definition examples mock server

This project provides `swagger-mock-api-server` command to start a mock server with temporal database persistence.

**Command allows usage of JSON and YAML files**

## Usage

1. Go to swagger project directory:

``` bash
$ cd my-swagger-project

```

2. Execute command:
``` bash
$ swagger-mock-api-server 

// OR

$ swagger-mock-api-server serve

```

### Options

| Option        | Description     | Default value  | 
| ------------- | --------------- | -------------- | 
| --help        | Muestra ayuda   |                | 
| --port        | port to bind on | 8000           | 
| --host        | Server host     | "0.0.0.0"      | 
| --file        | Swagger file    | "swagger.json" | 
| --verbose, -v |                 | false          | 