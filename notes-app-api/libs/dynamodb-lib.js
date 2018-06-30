import AWS from "aws-sdk";

AWS.config.update({ region: "us-east-1" });

export function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    return dynamoDb[action](params).promise();
}

export function getUpdateExpression(data) {
    let updateExpression = 'SET';

    Object.entries(data).forEach(([key, value], index) => {
        if (index > 0) {
            updateExpression = `${updateExpression},`;
        }

        updateExpression = `${updateExpression} ${key} = :${key}`;
    });

    return updateExpression;
}

export function getExpressionValues(data) {
    let expressionValues = {};

    Object.entries(data).forEach(([key, value]) => {
        expressionValues[`:${key}`] = value;
    });

    return expressionValues;
}