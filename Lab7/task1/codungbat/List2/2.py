def sum13(nums):
    total = 0
    skip = False
    for n in nums:
        if skip:
            skip = False
            continue
        if n == 13:
            skip = True
            continue
        total += n
    return total