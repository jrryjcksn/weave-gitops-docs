## gitops app status

Get status of a workload under wego control

```
gitops app status <app-name> [flags]
```

### Examples

```
wego app status podinfo
```

### Options

```
  -h, --help   help for status
```

### Options inherited from parent commands

```
  -e, --endpoint string    The Weave GitOps Enterprise HTTP API endpoint
      --namespace string   gitops runtime namespace (default "wego-system")
  -v, --verbose            Enable verbose output
```

### SEE ALSO

* [gitops app](gitops_app.md)	 - Manages your applications

###### Auto generated by spf13/cobra on 13-Oct-2021