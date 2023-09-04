import { Stack } from 'aws-cdk-lib'
import type { Construct } from 'constructs'
import type { StackProps } from 'aws-cdk-lib'
import { Function, Runtime, AssetCode, Code } from 'aws-cdk-lib/aws-lambda'

interface LambdaHellowWorldProps extends StackProps {
    functionName: string
}

export class HellowWorldLambdaStack extends Stack {
    private lambdaFunctionName: Function

    constructor(scope: Construct, id: string, props: LambdaHellowWorldProps) {
        super(scope, id, props)

        this.lambdaFunctionName = new Function(this, props?.functionName, {
            functionName: props.functionName,
            runtime: Runtime.NODEJS_16_X,
            code: new AssetCode('./src'),
            handler: 'index.handler'
        })
    }
}