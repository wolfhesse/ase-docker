FROM mono:latest
ADD . /home/rogera/sieve
RUN mcs /home/rogera/sieve/sieve.cs
CMD [ "mono", "/home/rogera/sieve/sieve.exe" ]
