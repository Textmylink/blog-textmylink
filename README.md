# blog-textmylink

## Handling large command output in the Codex shell

If a command prints a line longer than 4,096 bytes, Codex stops the session
with an error similar to:

```
Error: Output for session 'shell' contained a line exceeding the max of 4096
bytes (observed at least 14414 bytes).
```

To avoid this, rerun the command while constraining the output size. Common
approaches include piping the command through tools such as `grep`, `jq`, or
`cut`, or redirecting the output to a file for later inspection. When working
with build logs, consider filtering to the lines you need (e.g. `grep -nE` for
pattern matches) or truncating very long lines with `cut -c1-200`.
