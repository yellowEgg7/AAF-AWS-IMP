#!/bin/bash

# Connect to the database
sqlite3 notes.sqlite << EOF

# Delete all rows
DELETE FROM notes;

EOF
