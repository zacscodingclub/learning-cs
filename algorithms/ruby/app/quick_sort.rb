class QuickSort
  attr_accessor :array, :sorted_array

  def initialize(array)
    @array = array
    @sorted_array = sort(array)
  end

  def sort(arr)
    size = arr.size
    return arr if size < 2

     pivot = arr.pop
     left = []
     right = []

     arr.each do |n|
       n < pivot ? left << n : right << n
     end

     sort(left).concat([pivot]).concat(sort(right))
  end
end
