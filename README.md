# Node DynamoDB PoC

## Usage

Copy `.env_TEMPLATE` file to `.env` en set current  values.

Run the next commands:

```shell
yarn install
yarn start
```

Go to `http://localhost:8080/jobs`

## Generate fake data

Run in the command line ```aws dynamodb batch-write-item --region us-east-1 --request-items file://./jobs.json```


## Dependencies used

[Dynamoose](https://dynamoosejs.com/)
