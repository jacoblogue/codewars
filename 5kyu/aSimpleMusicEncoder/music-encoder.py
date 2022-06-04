# You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the ENCODER, and its companion kata deals with the DECODER. It can be considered a harder version of Range Extraction.

# Specification
# The input signal is represented as an array of integers. Several cases of regularities can be shortened.

# A sequence of 2 or more identical numbers is shortened as number*count
# A sequence of 3 or more consecutive numbers is shortened as first-last. This is true for both ascending and descending order
# A sequence of 3 or more numbers with the same interval is shortened as first-last/interval. Note that the interval does NOT need a sign
# Compression happens left to right
# Examples
# [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] is compressed to "1,3-5,7-11,14,15,17-20"
# [0, 2, 4, 5, 7, 8, 9] is compressed to "0-4/2,5,7-9"
# [0, 2, 4, 5, 7, 6, 5] is compressed to "0-4/2,5,7-5"
# [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5] is compressed to "0-4/2,5,7-5,5*4"
# Input
# A non-empty array of integers

# Output
# A string of comma-separated integers and sequence descriptors


def check_duplicate(raw):
    if len(raw) > 1:
        cache = [raw[0]]
    else:
        return False

    count = 1
    last_index = 0
    is_duplicate = False

    for index, num in enumerate(raw[1:]):
        if num == cache[-1]:
            is_duplicate = True
            count += 1
            last_index = index + 2
            cache.append(num)
        else:
            break

    if is_duplicate:
        output_string = f'{cache[0]}*{count}'
        raw = raw[last_index:]
        return [raw, output_string]


def check_sequence(raw):
    if len(raw) < 3:
        return False

    interval = raw[1] - raw[0]

    if interval == 0:
        return False

    last_num_checked = raw[0]
    cache = [last_num_checked]
    last_index = 0
    for index, num in enumerate(raw[1:]):
        if num - last_num_checked != interval:
            break
        last_num_checked = num
        cache.append(last_num_checked)
        last_index = index + 2

    if len(cache) >= 3 and abs(interval) == 1:
        output_string = f'{cache[0]}-{cache[-1]}'
        raw = [raw[last_index:], output_string]
        return raw

    elif len(cache) > 2:
        output_string = f'{cache[0]}-{cache[-1]}/{abs(interval)}'
        raw = [raw[last_index:], output_string]
        return raw
    else:
        return False


def compress(raw):
    output = ''

    while len(raw) > 0:
        sequence = check_sequence(raw)
        duplicate = check_duplicate(raw)

        if duplicate:
            raw = duplicate[0]
            output += duplicate[1]
            output += ','

        elif sequence:
            raw = sequence[0]
            output += sequence[1]
            output += ','

        else:
            output += f'{str(raw[0])},'
            raw = raw[1:]

    return output[0:-1]


print(f"{compress([1,2,2,3])}")
print(f"Expected: 1,2*2,3")

print(f"{compress([1,3,4,5,7])}")
print(f"Expected: 1,3-5,7")

print(f"{compress([1,5,4,3,7])}")
print(f"Expected: 1,5-3,7")

print(f"Observed: {compress([1,10,8,6,7] )}")
print(f"Expected: 1,10-6/2,7")

print(f"Observed: {compress([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5])}")
print(f"Expected: 0-4/2,5,7-5,5*4")
