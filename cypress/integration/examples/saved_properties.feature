Feature: Ensure saved properties appear
  Description: Users can view saved properties

Scenario: Saved properties are visible 
     Given user is on the zoopla my account screen after logging in with "darren.dibden@gmail.com" and "Aries120"
     When saved properties are clicked 
     Then strictly saved properties appear