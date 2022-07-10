# Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

# Examples (Input -> Output):
# * "String"      -> "SSttrriinngg"
# * "Hello World" -> "HHeelllloo  WWoorrlldd"
# * "1234!_ "     -> "11223344!!__  "

def double_char(s):
    res = []
    for char in s:
        res.append(char)
        res.append(char)

    return ''.join(res)

# should have been
# def double_char(s):
#     return ''.join(c * 2 for c in s)