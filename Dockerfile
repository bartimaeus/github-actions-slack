FROM python:3.6

LABEL "maintainer"="Eric Shelley <eric@webdesignbakery.com>"

ADD resources/entrypoint.sh /entrypoint.sh
ADD resources/events.json /events.json
ENTRYPOINT ["/entrypoint.sh"]
