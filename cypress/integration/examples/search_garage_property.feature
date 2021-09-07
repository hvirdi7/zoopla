Feature: Search for garage property
  Description: Users can search for a garage property which appears first

Scenario: Garage property is selected and appears in the search options
     Given user is on the homescreen and accepts the Cookies
     When the search area filled with "London"
     And prices of "£10,000"-"£300,000" for "2+" bed max is chosen for "Houses" house types
     And distances of "Within 1 mile" with "Anytime" for "'garages'"  
     Then garage proprties appear only