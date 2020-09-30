#!/bin/bash
ts-node 2>error.log
ts-node > log.log 2>&1
ts-node error.ts 1>log.log 2>error.log
ts-node error.ts >> both.log 2>&1
# command >> file 2>&1
# command 2>&1 | command
# command | tee file | command2
# 0> standard input (keyboard)
# 1> standard output (display)
# 2> standarderror output (display)
