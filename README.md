Try BusterJS! [![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
===================

This project aims to provide you with an easy way of trying out [BusterJS](http://busterjs.org/), to see if it's to your liking.

With a modern(ish) computer and a decent internet connection, you should be up and running in about 5-10 minutes, most of that time you can spend on YouTube, Facebook, Minecraft, etc.

Together, we will build a little virtual machine that has everything needed to run BusterJS, without you having to worry about compiling nodejs locally or disrupting your current nodejs install.

Prerequisites
-------------------

* A working ruby install on your host operating system. 1.8.7, 1.9.2 are both fine. (OSX default is fine)
* [Vagrant](http://vagrantup.com) gem installed. *Make sure you install lucid32 as base box*
* Oracle VirtualBox installed (4.1.0+) [download](https://www.virtualbox.org/wiki/Downloads)
* A working SSH install on your host operating system. Linux and OSX has this builtin, Windows users should refer to <http://vagrantup.com/docs/getting-started/setup/windows.html>
* Some disk space (the base box and installed vm shouldn't use more than 1GB)

Getting started - building the VM
-------------------

	git clone https://github.com/mroderick/try-busterjs.git
	cd try-busterjs
	vagrant up

Now go watch some videos on YouTube, while we bake your new VM.


Running tests
-------------------

Once the VM has been built locally, you can log in to it and run tests. For this you will need two ssh connections to the VirtualBox

First ssh session for running Buster's serverStart Buster's server in the virtual machine.

	vagrant ssh
	buster server

Now you can capture your favourite browsers by pointing them at http://localhost:1111/capture

In the second ssh session we run the test suite.

	vagrant ssh
	cd /vagrant/project
	buster test

You should see something like this

	Safari 5.1.2 OS X: ..
	1 test case, 2 tests, 2 assertions, 0 failures, 0 errors, 0 timeouts

Play!
-------------------

Now that you have a VM capable of running BusterJS, it's time to for you to explore.

To edit the files in the project, you can just use your favourite editor(s). The root of the project gets mapped into the VM as /vagrant, where buster can work with the files.

Ex:

<pre>
	| Host                 | Guest            |
	|----------------------|------------------|
	| try-busterjs         | /vagrant         |
	| try-busterjs/project | /vagrant/project |
</pre>

I am sure you get the idea.

More
-------------------

* [BusterJS Documentation](http://busterjs.org/docs/)
* Come say hello in #buster.js on irc.freenode.net
* [@cjno's book on TDD with JavaScript](http://tddjs.com/)

License

MIT: http://mrgnrdrck.mit-license.org
