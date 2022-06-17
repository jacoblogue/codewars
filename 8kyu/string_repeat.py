# Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

# Examples (input -> output)
# 6, "I"     -> "IIIIII"
# 5, "Hello" -> "HelloHelloHelloHelloHello"

# this is what I did
def repeat_str(repeat, string):
    import itertools
    return ''.join(list(itertools.repeat(string, repeat)))

# this is what I should have done
  # return repeat * string
