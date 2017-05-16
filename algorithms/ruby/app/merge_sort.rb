class MergeSort
  attr_accessor :array, :sorted_array

  def initialize(array)
    @array = array
    @sorted_array = sort(array)
  end

  def sort(arr)
    size = arr.size
    return arr if size < 2

    middle = size / 2
    left = arr[0, middle]
    right = arr[middle, size]

    merge(sort(left), sort(right))
  end

  def merge(left, right)
    sorted = []

    until left.empty? || right.empty?
      left[0] <= right[0] ? sorted << left.shift : sorted << right.shift
    end

    sorted.concat(left).concat(right)
  end
end
