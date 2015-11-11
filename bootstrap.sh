#!/usr/bin/env bash

apt-get update

## INSTALL APACHE
apt-get install -y apache2
if ! [ -L /var/www ]; then
	rm -rf /var/www
	ln -fs /vagrant /var/www
fi

## INSTAL GIT
apt-get install -y git
