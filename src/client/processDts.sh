#!/bin/bash
cd "$(dirname "$0")"

content='/** @module client */
// @ts-nocheck'

file="nosto.d.ts"

if [[ -f "$file" ]]; then
  # Check if the file already contains the content
  if grep -Fxq "$content" "$file"; then
    echo "$file is already processed."
    exit 0
  fi
  
  # Insert the content at the top of the file
  echo -e "$content\n$(cat "$file")" > "$file"
  echo "$file has been updated."
else
  echo "$file does not exist."
fi
