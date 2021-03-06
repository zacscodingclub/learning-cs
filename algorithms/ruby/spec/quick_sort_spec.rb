require './app/quick_sort'

RSpec.describe QuickSort do
  it "should sort a small array correctly" do
    nums = [10,5,3,8,2,6,4,7,9,1]
    expected_array = [1,2,3,4,5,6,7,8,9,10]

    instance = QuickSort.new(nums)

    expect(instance.sorted_array).to eq(expected_array)
  end

  it "should sort a large array correctly" do
    nums = [75,60,14,73,40,94,49,92,69,12,82,88,63,84,36,90,74,42,35,48,66,34,26,54,96,44,39,70,30,78,38,91,21,31,79,77,76,1,56,29,32,15,50,17,65,85,18,11,57,16,58,45,27,13,28,19,59,4,86,47,37,67,81,10,93,51,80,9,61,62,64,52,98,23,33,55,2,6,83,5,72,7,8,20,3,89,24,95,43,99,22,25,41,100,71,68,87,53,97,46]
    expected_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

    instance = QuickSort.new(nums)

    expect(instance.sorted_array).to eq(expected_array)
  end

  it "should sort a very small array correctly" do
    nums = [12]
    expected_array = [12]

    instance = QuickSort.new(nums)

    expect(instance.sorted_array).to eq(expected_array)
  end
end
