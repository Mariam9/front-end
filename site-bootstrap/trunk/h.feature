Feature: Some feature about calculator and summing 2 numbers
		In order to raealize division 2 numbers operation
		As calculator user
		I want.........

Scenario: Should correctly divide 2 natural numbers
	Given Calautor is launched
	And Input value is '10'
	When User call operation 'divide'
	And Input value is '2'
	Then User call 'equal' button
	And result is '5'