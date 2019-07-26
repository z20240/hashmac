# hmac-tool

This is a tool for calculate the hashmac of string with SHA256 and base64 encrypt.

Use `--secret` or `-s` to give secret key with string.

## Example

```
$ hmac-tool '{"a": 1, "b":2}' -s "secret key"

// hmac : z+CQKuPYevATybEqDfiu609r7VP1K1EtDjiAVBRfEDE=
```

## Getting Start

### Install by clone git
```
$ git clone https://github.com/z20240/hmac-tool.git

$ cd hmac-tool

$ sudo npm install -g
```

# License
MIT

## Keywords
hamc