#!/usr/bin/env bash

nohup bash -c "swagger-mock serve $@" &> /var/log/swagger-mock.log &

tail -f /var/log/swagger-mock.log
