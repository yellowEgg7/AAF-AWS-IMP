#! /usr/bin/env bash

aws cloudformation deploy \
    --stack-name "kam-JJ-stack" \
    --template-file "template.yml" \
    --capabilities CAPABILITY_IAM \
    --no-fail-on-empty-changeset \
    --region "eu-west-2"
    