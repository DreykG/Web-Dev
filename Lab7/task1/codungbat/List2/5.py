def centered_average(nums):
    nums = sorted(nums)
    middle = nums[1:-1]
    return sum(middle) // len(middle)