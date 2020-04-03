![GA Logo](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
# Software Engineering Immersive: Project 4
This was the fourth and last project I built whilst studying the Software Engineering Immersive course at General Assembly.

This application was also built in 1 week.

## Team members
This application was built by me and my fellow cohort member
+ [Rory Fletcher](https://github.com/Fletch-7)

# Pensive

## Brief
The projects necessary requirements were..
* Choose to work solo or in a team
* **Build a full-stack application** by making your own backend and your own front-end
* **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. 
* **Be deployed online** so it's publicly accessible.


## Tech Stack
+ HTML5
+ SCSS & Bulma
+ Javascript
  * ECMAScript6
  * React.js
  * axios
+ Python
  * Django
+ PostgreSQL
+ Testing
  * Manual: Insomnia
  * Table Plus
+ Git & GitHub
+ Heroku

## Release History
1.0 - Date of submission and deployment (04/03/20).

## Deployment
This application is deployed on Heroku and it can be found here - [Pensive](https://pensiveworld.herokuapp.com/)

## Approach
### Planning
From the announcement of another project I knew I wanted to build a blogging platform as I enjoy reading articles on [Medium](https://medium.com/) and [Dev.to](https://dev.to/). We thought it would be a great way to enhance our knowledge of databases and the relationships of models.

We spent the first day of our project fleshing out the idea and discussing how we would build our platform.

I made some sketches of how we could lay out the project out in my notebook

A homepage with just the `Home`, `Register` and `Login` buttons available. All the other navbar items would only appear after logging in
![Home page sketch](readmefiles/sketchindex.jpg)

A sketch how we wanted to lay out our articles
![Article sketch](readmefiles/sketcharticle.jpg)

A sketch of the layout for a user's profile
![Profile sketch](readmefiles/sketchprofile.jpg)

### Back-end Development
**Models**
Our backend was served by a PostgreSQL database. We used Table Plus to interact with data and check everything was being stored correctly. We created three tables, Articles, Categories and Users (JWT_Auth).

Our User model was quite simple as we planned on adding more functionality to it later. The only extra field that was added was the email field to allow registration.

```py
class User(AbstractUser):
  email = models.CharField(max_length=40, unique=True)

  def __str__(self):
    return f'{self.username} - {self.id}'
```

Our Category model only needed to have a name field because the name of the category would be attached to an article. This would be one of our **many-to-many** relationships as many articles can have many categories.
```py
class Category(models.Model):
    category_name = models.CharField(max_length=50)

    def __str__(self):
      return self.category_name
```

Our most intricate model was our Article model. It had fields for the article's title, owner, date, text and categories.
It also had other models that were nested within in such as the Comment and Like models. Likes were one of our **one-to-many** relationships as a user can apply one like to each article.
```py
class Article(models.Model):
  title = models.CharField(max_length=50)
  owner = models.ForeignKey(User, related_name='articles', null=True, on_delete=models.CASCADE)
  date = models.DateTimeField(default=timezone.now)
  text = models.CharField(max_length=3000)
  categories = models.ManyToManyField('categories.Category', related_name='categories', blank=True)


  def __str__(self):
    return self.title

class Comment(models.Model):
  text = models.CharField(max_length=140)
  owner = models.ForeignKey(User, related_name='comments', null=True, on_delete=models.CASCADE)
  article = models.ForeignKey(Article, related_name="comments", null=True, on_delete=models.CASCADE)   

  def __str__(self):
    return f'Comment by {self.owner} / {self.id} on {self.article}'
    
class Like(models.Model):
  like = models.IntegerField(default=0)
  owner = models.ForeignKey(User, related_name='likes', null=True, on_delete=models.CASCADE)
  article = models.ForeignKey(Article, related_name="likes", null=True, on_delete=models.CASCADE)

  def __str__(self):
    return f'Like by {self.owner} on {self.article}'
```

**API End-points**

#### 1. User


|           | GET | PUT | POST | DELETE |
|-----------|-----|-----|------|--------|
| /register |     |     |   X  |        |
| /login    |     |     |   X  |        |

+ Register - this uses a Post request to store the user's inputted information into the database.
+ Login - this uses a Post request however it check that the user's credentials match up to the stored data. If the match is made it will issue a token for the user to access the site.

#### 2. Articles

|                                              | GET | PUT | POST | DELETE |
|----------------------------------------------|-----|-----|------|--------|
| article/\<int:pk>                            |  X  |  X  |  X   |    X   |
| article/\<int:pk>/comments                   |     |     |  X   |        |
| article/\<int:pk>/comments/\<int:comment_pk> |     |     |  X   |        |
| article/\<int:pk>/likes/                     |     |     |  X   |        |
| article/\<int:pk>/likes/\<int:like_pk>       |     |     |  X   |        |

+ Articles - the articles use a Post request to be submitted by a user, they are then edited by using a Put request and they are read by using Get requests.

### Database

Our database was first designed as an ERD diagram so we could plot out the relationships to each of the tables.

![ERD diagram](readmefiles/relationships.png "Pensive's ERD diagram")

The diagrams shows the one-to-many and the many-to-many relationships between each table and how they are related. For instance *many* Users can write *many* Articles and *many* comments, however an Article may be written by *one* User. 


### Front-end Development

The front-end was created with React.js and used Axios to send requests to our back-end and perform the CRUD tasks within our database. Using React was a really good decision as we were able to build reusable components that we could implement into the project.

To initialise our front-end we used Facebook's Create-React-App to get it up and running.

These are some features of the website that were designed using React.js. We decided to keep the aesthetic of the website clean and minimalist. 

![Homepage](readmefiles/homepage.png "Pensive homepage")


![FAQ Page](readmefiles/faq.png "Pensive FAQ page")


![Registration](readmefiles/register.png "Pensive registration page")


![Login](readmefiles/login.png "Pensive login page")


![Article Index Page](readmefiles/articles.png "Pensive articles page")

### Challenges
The main challenges we faced when building this project were...

+ Designing a thorough plan for our Python model to stop ourselves from having to go back into the Back-End and modifying it when designing and implementing the Front-End. Early into the project we had some trouble with the article's categories and had to drop our database to go back and fix an issue we hadn't noticed.
+ Getting the comments to automatically populate the article once a user had added one to an article.
+ Upon deployment, our database did not get pushed through onto Heroku, meaning that our articles, comments and editing/deleting articles failed to work. (However, we found out that we could solve this by going through our users comments etc. and inputing them manually once deployed).


### Improvements
The improvements I would like to add to this project are the following...
+ Given more time, to create a user profile page, where it lists users own articles, profile picture and articles they have commented on.
+ Improve the styling of the page.
+ Add paragraphing into the back-end model so that the articles are formatted in a cleaner, more concise way.
+ User authetication for editing and deleting articles.

## Wins and Key Learnings

### Wins
+ The project works, a user can register, login and create an article.
+ Learning how to use Python, Django and PostgreSQL.
+ Deploying a Python project on Heroku.
+ Improved on my pair-programming skills.


### Key Learnings
The main things I learned building Pensive
+ Building the back-end with Python and Django. This was the first time I had built anything with both Python and Django and found it very different to using JavaScript and Node.js for the back-end.
+ What a Relational Database is and the relationships between the tables including one-to-many and many-to-many.
+ What an ERD diagram is and how to plan and design them.
+ How blogs are built and the structure of the website.

___

#### Author
Latch Jack - You can contact me via [Twitter](https://twitter.com/LatchCodes "My twitter profile") or via [email](mailto:latch.jack@gmail.com "my email").

Thank you for visiting my repository! :)