<div align="center">
    <h1>Lead Manager</h1>
    <a href="http://lead-manager-django-react.herokuapp.com/">Visit Site</a>
    <br><br>
    <img src="https://i.imgur.com/SgcWTPi.jpg" title="Lead Manager" />
</div>

# Installing pipenv, nodejs & npm
<https://docs.pipenv.org/en/latest/install/>
<br>
<https://www.npmjs.com/get-npm>

# Setting up Development Environment
### Creating Virtual Environment & Installing Dependences
```
git clone https://github.com/HKSenior/lead-manager.git
npm install
pipenv isntall
pipenv shell
```

### Starting servers | You will need 2 terminal windows
```
# In the first terminal window
npm run dev

# In the second terminal window
pipenv shell
cd leadmanager
python manage.py migrate
python manage.py runserver
```