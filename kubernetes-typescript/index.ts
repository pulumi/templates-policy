import * as k8s from "@pulumi/kubernetes";
import { PolicyPack, validateResourceOfType } from "@pulumi/policy";

new PolicyPack("kubernetes-typescript", {
    policies: [{
        name: "no-public-services",
        description: "Kubernetes Services should be cluster-private.",
        enforcementLevel: "mandatory",
        validateResource: validateResourceOfType(k8s.core.v1.Service, (svc, args, reportViolation) => {
            if (svc.spec && svc.spec.type === "LoadBalancer") {
                reportViolation("Kubernetes Services cannot be of type LoadBalancer, which are exposed to " +
                    "anything that can reach the Kubernetes cluster. This likely including the " +
                    "public Internet.");
            }
        }),
    }],
});
