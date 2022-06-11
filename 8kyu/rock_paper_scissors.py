# Rock Paper Scissors
# Let's play! You have to return which player won! In case of a draw return Draw!.

# Examples(Input1, Input2 --> Output):

# "scissors", "paper" --> "Player 1 won!"
# "scissors", "rock" --> "Player 2 won!"
# "paper", "paper" --> "Draw!

def rps(p1, p2):
    if (p1 == "scissors" and p2 == 'paper') or (p1 == 'paper' and p2 == 'rock') or (p1 == 'rock' and p2 == 'scissors'):
        return "Player 1 won!"
    elif (p2 == "scissors" and p1 == 'paper') or (p2 == 'paper' and p1 == 'rock') or (p2 == 'rock' and p1 == 'scissors'):
        return "Player 2 won!"
    else:
        return 'Draw!'
