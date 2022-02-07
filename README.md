<p align="center">
  
  <h1 align="center">Simple Blog</h1>
  
  <p align="center">
    <i style="margin-top: 10px; display: block;">
    Simple blog page with vuejs as frontend and django-rest as backend + perfect authentication :)
    </i>
  </p>
  
  <hr style="border: 1px solid #00ff00ff;">
</p>

<h3 style="margin: 30px 0 -5px 0;">
⚙️ Config the backend
</h3>

<p>
First you should make venv for this project.
So in the backend folder you should type this command in your Terminal or Console: 
</p>
<pre>
python -m venv venv
</pre>
<p>
Now you should activate your venv.
So in the main root of project you should type this command in your Terminal or Console: 
</p>
<b>
In Linux/macOS:
</b>
<pre>
source venv/bin/activate
</pre>
<b>
In Windows:
</b>
<pre>
./venv/Scripts/activate
</pre>

<p>
After activating venv you should install the <b>requirements.txt</b> packages. So type this command in your Terminal or Console: 
</p>
<pre>
pip install -r requirements.txt
</pre>
<h5>
Configuration of project almost done.
</h5>

<hr>

<p>
After installing packages migrate database: 
</p>
<pre>
python manage.py migrate
</pre>
<p><b>If in windows command python didn't work please try with py</b></p>

<h3 style="margin: 30px 0 -5px 0;">
🏁 Run the backend api
</h3>
<p>
First of all, please enter the following command in the Terminal or Console to make sure the project is configured correctly:
</p>
<pre>
python manage.py check
</pre>
<p>
You should see This message:
  <strong>
    <i>
      "System check identified no issues (0 silenced)."
    </i>
  </strong>
  <br>
  If you see this message you can run project. So type this command in Terminal or Console:
</p>
<pre>
python manage.py runserver
</pre>
<h4>
Congratulations, you ran the project correctly ✅
</h4>

<p>
Now copy/paste this address in your browser URL bar:
</p>
<pre>
http://127.0.0.1:8000/swagger
</pre>

<hr>
<h3 style="margin: 30px 0 -5px 0;">
⚙️ Config the frontend
</h3>

<p>
First you should install all packages that related to nodejs and vuejs.
So in the frontend folder you should type this command in your Terminal or Console:
</p>
<pre>
npm i
</pre>

<h5>
Configuration of project almost done.
</h5>

<hr>

<h3 style="margin: 30px 0 -5px 0;">
🏁 Run the frontend
</h3>
<p>
After installing needed packages run this code to run project in your localhost:8080
</p>
<pre>
npm run serve
</pre>
