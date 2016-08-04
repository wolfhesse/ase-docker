
## r20160804
:benchmark :first

:sit1632
- r20160729-lang-controller verwendet 21% cpu auf bunyan

:rq1632
- [ ] build variant w/o bunyan and measure
- [ ] build variant w/ bunyan ringbuffer and specific proto rq to dump log via call (c/) interface instead of console

# ase-docker
Dockerfiles :fast :sop

## r20160728

	docker build -t wolfhesse/r20160728-13000 .
	docker run -it --rm -p 13000:13000 wolfhesse/r20160728-13000

