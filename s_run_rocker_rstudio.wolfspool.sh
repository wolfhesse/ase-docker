docker run -d --restart=always --name rstudio -p 8787:8787 -e ROOT=TRUE -e PASSWORD=1boris -v /home/rogera/data.d/rstudio-data:/home/rstudio rocker/rstudio
