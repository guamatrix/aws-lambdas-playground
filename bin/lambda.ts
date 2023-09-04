#!/usr/bin/env node
import 'source-map-support/register'
import { App } from 'aws-cdk-lib'
import { HellowWorldLambdaStack } from '../lib/lambda-hello-world-stack'

export const lambdaStackName = 'LambdaHellowWorldStack'  
export const lambdaFunctionName = 'LambdaHellowWorldFunction'

const app = new App()
new HellowWorldLambdaStack(app, lambdaStackName, {
    functionName: lambdaFunctionName
})