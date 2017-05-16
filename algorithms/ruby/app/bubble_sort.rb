class BubbleSort
  attr_accessor :array, :size

  def initialize(array)
    @array = array
    @size = array.size
  end

  def sort
    return array if size < 2

    swapped = true

    while swapped do
      swapped = false

      (size - 1).times do |n|
        if array[n] > array[n+1]
          array[n], array[n+1] = array[n+1], array[n]
          swapped = true
        end
      end
    end

    array
  end
end
