#!/usr/bin/env bash
read -r -d '' data << EOM
{
	"firstName": "Bradley",
	"lastName": "Beal",
	"email": "b.beal@washwizards.com"
}
EOM

curl -i -XPOST localhost:3000/onboarding \
	-H 'Content-Type: application/json' \
	-d "${data}"
