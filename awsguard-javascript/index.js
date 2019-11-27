"use strict";
const awsguard = require("@pulumi/awsguard");

new awsguard.AwsGuard({ all: "advisory" });
