Feature: Register for daily email updates
  Description: Users can register for alerts for 1 bed london properties

Scenario: Register for daily email updates on rental property in London for 1 bed properties between £800 and £1000 per month
     Given a user is on the homescreen and accepts the Cookie Policies
     When the search area is filled with "London"
     And price of "£800 pcm"-"£1,000 pcm" for "1+" bed max is chosen for "Show all" house types
     Then user registers for daily email alerts with "Update successful. Your alerts & searches have been updated." for "darren.dibden@gmail.com" password "Aries120"