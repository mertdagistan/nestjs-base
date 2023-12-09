#!/bin/bash
# save this as generate-module.sh

module_name=$1
nest generate module modules/$module_name
nest generate controller modules/$module_name
nest generate service modules/$module_name
