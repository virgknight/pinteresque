# Pinteresque
![](/app/assets/images/readme/splash.png)

## Overview
Pinteresque is a full-stack clone of the popular "visual discovery engine" website Pinterest. Pinteresque users are able to create, edit, and delete Pins and boards, follow one another, and find exciting new visual inspiration via an infinitely scrolling home feed.

[Sign up for Pinteresque (or take a look around as a demo user) here!](https://pinteresque.herokuapp.com/#/)

## Key features

#### User authentication
New users are created and given a hashed password digest using the BCrypt gem. New users may only join Pinteresque if they are 13 years or older.
<br>
<img src="/app/assets/images/readme/signup.png" width="300" height="327" />

#### Home feed
One of Pinterest's most iconic features is its home feed Pin index, which displays Pin images in a cascading grid layout. Pinteresque aims to replicate this grid style and comes equipped with automatically loading infinite scroll.
![](/app/assets/images/readme/homefeed.png)

#### User profile
All of a user's public information, including indices of their boards and created pins, are shown on their profile page. 
![](/app/assets/images/readme/usershow.png)

A user may also edit or delete their account via their profile.
![](/app/assets/images/readme/useredit1.png)

![](/app/assets/images/readme/useredit2.png)

#### Pins
Users may view, save, share, and download any Pins on the site. They may also create, edit, or delete their own personal Pins.
<img src="/app/assets/images/readme/pinshow.png" width="900" height="550"/>
<img src="/app/assets/images/readme/pinedit.png" width="900" height="550"/>

#### Boards
Users may create any number of themed boards to which they can save relevant Pins. A user's own boards may also be edited and deleted. 
![](/app/assets/images/readme/boardshow.png)
<img src="/app/assets/images/readme/boardedit.png" width="369" height="348"/>

Saving a Pin to a board is easily done with a handy dropdown menu that appears in the home feed and when viewing an individual pin.
<img src="/app/assets/images/readme/boardsave.png" width="339" height="273"/>

#### Follows
Users have the option of following other users or boards. A user's follower/following count is displayed at the top of their profile, and one can currently view a list of all of a user's followers. In a future patch, one will also be able to view a list of all of the boards and users that a given user is following!

## Technologies used
* JavaScript
* Ruby on Rails
* React
* Redux
* HTML / CSS
* Amazon Web Services S3

## Future directions
In the future, Pinteresque will have...
* A viewable list of all boards/users that a user follows
* A customized home feed based on the user's follows
* A functional search bar
* An option to make a board private
