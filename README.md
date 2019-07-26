# hmac-tool

This is a tool for calculate the hashmac of string with SHA256 and base64 encrypt.

Default Secret Key is `''` (empty String), please use this tool with your key **each time**.

Usage:
---
- --help ( -h )   : help for usage.
- --secret ( -s ) : secret key for hamc.

## Getting Start

### Install by npm

```
npm i hmac-tool -g
```

Or
### Install by clone git

```
$ git clone https://github.com/z20240/hmac-tool.git

$ cd hmac-tool

$ sudo npm install -g
```

## Example

```
$ hmac-tool '{"a": 1, "b":2}' -s "secret key"

// hmac : z+CQKuPYevATybEqDfiu609r7VP1K1EtDjiAVBRfEDE=
```

# License
MIT

## Keywords
hamc