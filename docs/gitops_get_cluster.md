## gitops get cluster

Display one or many CAPI clusters

```
gitops get cluster [flags]
```

### Examples

```

# Get all CAPI clusters
gitops get clusters
		
```

### Options

```
  -h, --help         help for cluster
      --kubeconfig   Returns the Kubeconfig of the workload cluster
```

### Options inherited from parent commands

```
  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### SEE ALSO

* [gitops get](gitops_get.md)	 - Display one or many Weave GitOps resources

###### Auto generated by spf13/cobra on 12-Oct-2021
