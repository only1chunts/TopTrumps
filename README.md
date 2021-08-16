# TopTrumps
Interactive Top Trumps Game of GigaDB datasets

Project Title - GigaTrumps

Motivation - A fun way to display some basic metadata about some of the datasets we host in GigaDB.

## About:
To initiate a game click the 'START' button. This will randomly assign cards to each player and reveal the first card of player 1, who must take the first turn. The player should decide which category they think will be higher than their opponent and click the category title. After clicking the category, the opponents card will be revealed. The winning card will be enlarged on the screen, and the losing card made smaller to demonstrate which won. The losing card will then be added to the deck of the winning player, and the 'remaining cards' tally updated to reflect this. This process continues until a player has 0 cards remaining, when the middle box will be updated with the player number who has won the most games. If the user would like to keep playing, then clicking the 'PLAY AGAIN' button will reshuffle the cards and restart the game.

Special thanks to @dangraham16 for making the original project in GitHub with an open source license, this game is directly based on that code.

### Bugs:
* Need to correct the number of games scoring display, currently it just says "-" if both player have won equal numbers of games, "P1" if player 1 has won more or "p2" if player 2 has won more, I would like it to display the scores e.g. "1 - 1" 
* The release date field seems to only be working on the integer not the decimal, so need to work out why and how to fix it, e.g. 2012.09 vs 2012.08 the player that is actively choosing will always win regardless of which date they have.

### Planned Updates/Additions:
* A landing page will be added to introduce the website.
* Additional genre's will be added to give the user a choice of deck, which will be selectable on the landing page.
* Possibly adding in a "1 player vs Computer" mode
