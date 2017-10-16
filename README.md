# plain-replace

A tiny nodejs based cli for globally replacing strings in files without using regex.
It may not be as efficient as sed or other tools but it will get the job done without having to escape strings or avoid specific characters that may conflict with regex syntax.

## Usage
```
npm i plain-replace -g
plain-replace from to infile [outfile]
```

### Arguments
* from: String to replace
* to: String to replace with
* infile: File to replace in
* outfile: File to write to. Optional. If not provided, the original file is overwritten.



