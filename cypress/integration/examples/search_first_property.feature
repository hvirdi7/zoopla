Feature: Search for first property to buy
  Description: Users can search for a certain property which appears first

Scenario: Property is chosen and appears first in the search options
     Given a user is on the homescreen and accepts the Cookie Policy
     When the search area filled with "26 Queen street, croydon"
     And prices of "£10,000"-"£300,000" for "2+" bed max is chosen for "Houses" house type
     And distance of "Within 1 mile" with "Last 14 days" for "Most recent"  
     Then 26 Queen street, croydon appears as the first result