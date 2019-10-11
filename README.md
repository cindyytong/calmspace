# Calmspace
Calmspace is a replica of [Talkspace](https://www.talkspace.com/), an online therapy platform that allows users access to licensed therapist anywhere without many of the barriers of traditional therapy including high costs and inconvenient access. 

![Calmspace Landing Page](../app/assets/images/screenshots/home.jpg)

## Features
#### Account Creation
    * Users over the age of 13 can create a new account, login and logout 
    * Visitors can sign in as demo therapists and user 

    ![Calmspace User Account Creation][../app/assets/images/screenshots/login.jpg]

#### Users Match with Therapists
    * Users fill out an onboarding questionaire where they select their gender preference for their therapist and any specific topics they want to cover 
    * Users receive a list of three therapists based on the selection provided and therapists available. 
    * Users can select their designated therapist

    ![Calmspace Onboard](../app/assets/images/screenshots/onboard.jpg)
    ![Calmspace Matches](../app/assets/images/screenshots/matches.jpg)

#### Users Chat with Therapists 
    * Users and Therapists can chat with each other in a private chatroom  
    ![Calmspace Patient Chat][../app/assets/images/screenshots/patient_chat.jpg]
    ![Calmspace Therapist Chat][../app/assets/images/screenshots/therapist_chat.jpg]

#### Therapist Manage Users in their Dashboard 
    * Therapists have access to a dashboard with information on their current patients 
    ![Calmspace Therapist Dashboard][../app/assets/images/screenshots/therapist_dashboard.jpg]

#### Therapist Can Make Notes on Sessions
    * Therapists can create and edit notes on their patients
    ![Calmspace Note](../app/assets/images/screenshots/note.jpg)

## Technology Used 
* [Action Cable](https://github.com/rails/rails/tree/master/actioncable): used to integrate WebSockets to allow for real-time chat messaging between therapists and patients  
* [React Quill Toolbar](https://quilljs.com/docs/modules/toolbar/): used to add rich text editing to notes