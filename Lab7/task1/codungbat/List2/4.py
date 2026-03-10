def sum67(nums):
    total = 0
    ignore = False
    for n in nums:
        if n == 6:
            ignore = True
        elif n == 7 and ignore:
            ignore = False
        elif not ignore:
            total += n
    return total