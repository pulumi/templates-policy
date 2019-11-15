"use strict";
const k8s = require("@pulumi/kubernetes");
const policy = require("@pulumi/policy");

new policy.PolicyPack("kubernetes-typescript", {
    policies: [{
        name: "no-public-services",
        description: "Kubernetes Services should be cluster-private.",
        enforcementLevel: "mandatory",
        validateResource: policy.validateTypedResource(k8s.core.v1.Service, (svc, args, reportViolation) => {
            if (svc.spec && svc.spec.type === "LoadBalancer") {
                reportViolation("Kubernetes Services cannot be of type LoadBalancer, which are exposed to " +
                    "anything that can reach the Kubernetes cluster. This likely including the " +
                    "public Internet.");
            }
        }),
    }],
});