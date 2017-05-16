class InsertionSort
  attr_accessor :array, :size

  def initialize(array)
    @array = array
    @size = array.size
  end

  def sort
    array.each_with_index do |n, index|
      j = index - 1

      while j >= 0
        break if n >= array[j]
        array[j + 1] = array[j]
        j -= 1
      end

      array[j + 1] = n
    end
  end
end
