release: python ./leadmanager/manage.py migrate
web: gunicorn --chdir ./leadmanager/ leadmanager.wsgi --log-file -