import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const layer = new lambda.LayerVersion(this, "Layer", {
      code: lambda.AssetCode.fromAsset("lib/lambda-common"),
    });

    new lambda.Function(this, "one", {
      functionName: "one",
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.AssetCode.fromAsset("lib/lambda-one"),
      handler: "one.handler",
      layers: [layer],
    });

    new lambda.Function(this, "two", {
      functionName: "two",
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.AssetCode.fromAsset("lib/lambda-two"),
      handler: "two.handler",
      layers: [layer],
    });
  }
}
