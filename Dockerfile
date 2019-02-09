FROM python:3.6

LABEL "maintainer"="Eric Shelley <eric@webdesignbakery.com>"

ADD notify.sh /notify.sh
ADD resources/entrypoint.sh /entrypoint.sh
ADD resources/event.json /event.json
ENTRYPOINT ["/entrypoint.sh"]
