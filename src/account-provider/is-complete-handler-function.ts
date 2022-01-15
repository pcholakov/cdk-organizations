// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for IsCompleteHandlerFunction
 */
export interface IsCompleteHandlerFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/account-provider/is-complete-handler.
 */
export class IsCompleteHandlerFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: IsCompleteHandlerFunctionProps) {
    super(scope, id, {
      description: 'src/account-provider/is-complete-handler.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/account-provider/is-complete-handler.lambda')),
    });
  }
}