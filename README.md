This repository aim at storing the vagrant virtual machine & the code for the snapkin custom dashboard
# Description

This repository contains the VagrantFile necessary to setup a virtual machine running ubuntu/trusty64 (using [Vagrantup](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads))
It also contains nice template for git aliases and prompt

# Setup

- Link the .gitconfig file to yours.
Inside of .git/config add the following: 
```
[include]
    path = /vagrant/setup/.gitconfig
```

- Link the .bashrc file to yours.
Inside of ~/.bashrc add the following:
```
# Custom .bashrc
source /vagrant/setup/.bashrc
```
