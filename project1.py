import random
def roll():
    min_value = 1
    max_value = 6
    roll = random.randint(min_value,max_value)
    return roll

while True:
    players = input('Enter the no of Players between 2-4 : ')
    if players.isdigit():
        players = int(players)
        if 2 <= players <= 4:
            break
        else:
            print('enter players between 2 to 4!')
    else:
        print('Try again!')
max_score = 50
playerscore = [0 for _ in range(players)]

while max(playerscore) <= max_score:
    for player_idx in range(players):
        print('\n player number', player_idx + 1 ,'turn has just started\n')
        print('You are total score is',playerscore[player_idx],'\n')
        current_score = 0 
        while True:
            should_roll = input('Would to like to roll (y)? ')
            if should_roll.lower() != "y":
                break
        
            value = roll()

            if value == 1:
                print('You got 1! your done here')
                current_score = 0
                break
            else:
                current_score += value
                print("you rolled a:",value)

            print('your score is', current_score)

        playerscore[player_idx] += current_score
        print('Your total score is:',playerscore[player_idx])

max_score = max(playerscore)
winning_idx = playerscore.index(max_score) 
print('The Winner Is Player ',winning_idx + 1)  
