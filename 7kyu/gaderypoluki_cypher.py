# The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

# The most frequently used key is "GA-DE-RY-PO-LU-KI".

#  G => A
#  g => a
#  a => g
#  A => G
#  D => E
#   etc.
# The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

# Task
# Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

# Input/Output
# The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.

# Example
#  Encode("ABCD")          // => GBCE
#  Encode("Ala has a cat") // => Gug hgs g cgt
#  Encode("gaderypoluki"); // => agedyropulik
#  Decode("Gug hgs g cgt") // => Ala has a cat
#  Decode("agedyropulik")  // => gaderypoluki
#  Decode("GBCE")          // => ABCD

bank = {
    'g': 'a',
    'd': 'e',
    'r': 'y',
    'p': 'o',
    'l': 'u',
    'k': 'i',
    'G': 'A',
    'D': 'E',
    'R': 'Y',
    'P': 'O',
    'L': 'U',
    'K': 'I'
}


def encode(message):
    for i in range(0, len(message)):
        if message[i] in bank.keys():
            message = message[:i] + bank[message[i]] + message[i + 1:]
        elif message[i] in bank.values():
            message = message[:i] + list(bank.keys())[list(
                bank.values()).index(message[i])] + message[i + 1:]
    return message


def decode(message):
    for i in range(0, len(message)):
        if message[i] in bank.keys():
            message = message[:i] + bank[message[i]] + message[i + 1:]
        elif message[i] in bank.values():
            message = message[:i] + list(bank.keys())[list(
                bank.values()).index(message[i])] + message[i + 1:]
    return message
