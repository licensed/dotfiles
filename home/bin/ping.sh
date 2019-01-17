#!/usr/bin/env bash

# Pacotes necessários: sound-theme-freedesktop & libcanberra

# ls /usr/share/sounds/freedesktop/stereo/
online="phone-incoming-call"
offline="phone-outgoing-busy"

#h="127.0.0.1"
#h=${4:-"8.8.8.8"}
#r=${3:-1}

h="8.8.8.8"
r=1
l=0

function pingar {
	ping -q -c$r $h > /dev/null 2> /dev/null
	if [ $? -eq 0 ]; then
		if [ "$1" == "-v" ]; then
			echo "%{F#8fbcbb}%{F-}"

		fi
		if [ ! -f /tmp/online.lock ]; then
			export DISPLAY=:0 ; canberra-gtk-play -i $online 2>&1
			touch /tmp/online.lock
		fi
	else
		if [ "$1" == "-v" ]; then
			echo "%{F#bf616a}%{F-}"
		fi
		export DISPLAY=:0 ; canberra-gtk-play -i $offline 2>&1
		[ -f /tmp/online.lock ] && rm /tmp/online.lock
	fi
}

if [ $l = 1 ]; then
	while true; do
		pingar
		sleep 3
	done
else
	pingar
fi


# if [ $(ping -q -c3 google.com > /dev/null 2> /dev/null) ]; then
# 	echo "Conexão: OK"
# else
# 	echo "Conexão: FALHOU"
# fi