Feature: Change frequency of exisiting email updates
  Description: Users can change email updates

Scenario: Change the frequency of a email to Summaries every 3 days
     Given a user is on the signup screen and logs in with "darren.dibden@gmail.com" and "Aries120"
     When the email update for london is changed from daily summary emails to Summaries every 3 days 
     Then frequency appears as Summaries every 3 days