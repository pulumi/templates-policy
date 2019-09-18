// Copyright 2016-2019, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as aws from "@pulumi/aws";
import { PolicyPack, typedRule } from "@pulumi/policy";
import * as assert from "assert";

new PolicyPack("policy-pack-typescript", {
    policies: [{
        name: "example-policy",
        description: "An example advisory policy.",
        enforcementLevel: "advisory",
        rules: [
            typedRule(aws.ec2.Instance.isInstance, it => {
                assert(!it.instanceType.includes("xlarge"));
            }),
        ],
    }],
});
