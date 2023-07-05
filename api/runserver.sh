echo 'Run migration'
python manage.py makemigrations
python manage.py migrate

echo 'Create Super User'
python manage.py createsuperuser --noinput || echo "Super user already created"

echo 'Run  server'
python api/manage.py runserver 0.0.0.0:8000