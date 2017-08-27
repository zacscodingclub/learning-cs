def first_odd(n)
  n.find { |n| n.odd? }
end

def last_even(n)
  n.reverse.find { |n| n.even? }
end

def to_index(arr, value)
  arr.index(value)
end

def swap(arr, first, last)
  arr[first], arr[last] = arr[last], arr[first]
  arr
end

def minimum_swaps(n, count = 0)
  index_first_odd = to_index(n, first_odd(n))
  index_last_even = to_index(n, last_even(n))

  if index_first_odd < index_last_even
    arr = swap(n, index_first_odd, index_last_even)
    count +=1

    minimum_swaps(arr, count)
  else
    count
  end
end
