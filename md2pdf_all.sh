#!/bin/sh

find /input -name '*.md' -type f -exec node /opt/md2pdf/md2pdf.js {} \;