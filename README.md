# docker-md2pdf
Automated Markdown to PDF converter

# convert one file

```
docker run --rm --network=none -v /path/to/my/markdown/files:/input olegfiksel/md2pdf:latest node /opt/md2pdf/md2pdf.js /input/readme.md
```

# convert all files

```
docker run --rm --network=none -v /path/to/my/markdown/files:/input olegfiksel/md2pdf:latest
```