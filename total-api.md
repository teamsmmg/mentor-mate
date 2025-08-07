api : 

1. auth : 

   login , register 

   /login

   /register

   /mentor-register

   2. search : 

      mentor-search?id=

      mentor-search?category=

      mentor-search?name=

      mentor-search?lang=

      mentor-search?exam=

      mentor-search?tags=

      mentor-search?review=

      mentor-search?randomise=

      

      3. profile-mentee:

         update : 

         type : update-mentee

         type: profile-photo-update

         type: email-update

         type: phone-update

         type: delete --> 15 days timer with notification

         type: get-profile

         type:get-contacted-metor

         type:get-contacted-mentor-profile:
         status : reschedule , reject , accepted  reason  then request api will reopen 

         

         4. pricing api

            type : payment : 

            metor-id:

            razorpay-id:

            5. /request: 

               payment-id:

               shedule : date , time 

               note:

               6./video/video-token

               7./whatsapp-message

               sender : 

               reciever:

               sender-phone

               reciver-phone

               message:

               6:/feedback:

               7./complaint:

               

               admin :

               /verification:

               /total-mentor-register

               /total-mentee-register

               /total-transactions

               /delete:

               type: mentor 

               type: mentee

               /spam:

               type: mentor

               type:mentee

               

               mentor:

               /mentor-profile

               type: get-profile , update profile 

               type:get-mentee-request : update 

               type: get-mentor-payment

               type: delete

               

         today : 07/08/25
         
         auth/register.js
         
         auth/login.js
         
         auth/mentor-register.js
         
         login , register :oauth integrated , nodemailer , 
         
         mentor register : nodemailer 
         
         signup forntend with tailwand 
         
         -------------
         
         profile/update-profile.js
         
         type : update-mentee
         
         type: profile-photo-update
         
         type: email-update : nodemailer otp and updated mail 
         
         type: phone-update : 