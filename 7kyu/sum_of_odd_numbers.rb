# Given the triangle of consecutive odd numbers:

#              1
#           3     5
#        7     9    11
#    13    15    17    19
# 21    23    25    27    29
# ...
# Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

# 1 -->  1
# 2 --> 3 + 5 = 8


# I wrote this lengthy solution
def row_sum_odd_numbers(n)
  triangle = Array.new(n + 1) {[]}
  i = 1
  j = 1
  while i <= n do
    until triangle[i].length == i
      triangle[i] << j
      j += 2
    end
    i += 1
  end
    
  triangle[n].sum
end

# When this is all I had to write.... not my proudest victory.
def correct_solution(n)
  n**3
end