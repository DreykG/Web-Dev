import math
# a = int(input("a:"))
# b = int(input("b:"))

# print(round(math.hypot(a, b), 2))

# a = int(input("a:"))
# print(f"next number is {a+1}, previous number is {a-1}")

# a = int(input("a:"))
# b = int(input("b:"))
# print(b//a)

# a = int(input("a:"))
# b = int(input("b:"))
# print(b%a)


# a = int(input("a:"))
# b= int(input("b:"))

# if a>b:
#     print("a is greater than b")
# elif a<b:
#     print("b is greater than a")

# a = int(input("a:"))

# if a%4==0 and a%100!=0 or a%400==0:
#     print("Yes")
# else:
#     print("No")


# a = int(input("a:"))
# b = int(input("b:"))

# if a == a[::-1] and b == -1:
#     print("Yes")
# else:    print("No")

# a = int(input("a:"))
# if a>0:
#     print("1")
# elif a<0:
#     print("-1")
# else:   print("0")

# a = int(input("a:"))
# b = int(input("b:"))

# if a>b:
#     print(a)
# elif a<b:
#     print(b)
# else:   print("0")

# a = int(input("a:"))
# b = int(input("b:"))

# for i in range(a, b):
#     if i%2==0:
#         print(i)

# a= int(input("a:"))
# b = int(input("b:"))
# c = int(input("c:"))
# d = int(input("d:"))

# for i in range(a, b):
#     if i%d==c:
#         print(i)

# a = int(input("a:"))
# b = int(input("b:"))

# for i in range(a, b):
#     if math.sqrt(i)%1==0:
#         print(i)

# x = int(input())
# d = int(input())

# count = 0

# while x > 0:
#     digit = x % 10
#     if digit == d:
#         count += 1
#     x //= 10

# print(count)

# x = int(input())
# sum = 0
# while x > 0:
#     dig = x%10
#     sum += dig
#     x//=10

# print(sum)

# x = int(input())

# rev = 0

# while x > 0:
#     digit = x % 10
#     rev = rev * 10 + digit
#     x //= 10

# print(rev)

# x = int(input())

# d = 2
# while d * d <= x:
#     if x % d == 0:
#         print(d)
#         break
#     d += 1
# else:
#     print(x)

# x = int(input())

# for i in range(1, x + 1):
#     if x % i == 0:
#         print(i)

# x = int(input())

# count = 0
# i = 1

# while i * i <= x:
#     if x % i == 0:
#         if i * i == x:
#             count += 1
#         else:
#             count += 2
#     i += 1

# print(count)

# s = 0

# for i in range(100):
#     x = int(input())
#     s += x

# print(s)

# n = int(input())

# s = 0
# for i in range(n):
#     x = int(input())
#     s += x

# print(s)

# b = int(input())

# result = 0
# power = 1

# while b > 0:
#     digit = b % 10
#     result += digit * power
#     power *= 2
#     b //= 10

# print(result)

# n = int(input())

# count = 0

# for i in range(n):
#     x = int(input())
#     if x == 0:
#         count += 1

# print(count)

# n = int(input())

# i = 1
# while i * i <= n:
#     print(i * i)
#     i += 1

# n = int(input())

# for i in range(2, n + 1):
#     if n % i == 0:
#         print(i)
#         break

# n = int(input())

# x = 1
# while x <= n:
#     print(x, end=" ")
#     x *= 2

# n = int(input())

# while n % 2 == 0:
#     n //= 2

# if n == 1:
#     print("YES")
# else:
#     print("NO")

# n = int(input())

# k = 0
# power = 1

# while power < n:
#     power *= 2
#     k += 1

# print(k)

# n = int(input())
# arr = list(map(int, input().split()))

# for i in range(0, n, 2):
#     print(arr[i], end=" ")

# n = int(input())
# arr = list(map(int, input().split()))

# for x in arr:
#     if x % 2 == 0:
#         print(x, end=" ")

# n = int(input())
# arr = list(map(int, input().split()))

# count = 0

# for x in arr:
#     if x > 0:
#         count += 1

# print(count)

# n = int(input())
# arr = list(map(int, input().split()))

# count = 0

# for i in range(1, n):
#     if arr[i] > arr[i-1]:
#         count += 1

# print(count)

# def min4(a, b, c, d):
#     m = a
#     if b < m:
#         m = b
#     if c < m:
#         m = c
#     if d < m:
#         m = d
#     return m

# a, b, c, d = map(int, input().split())
# print(min4(a, b, c, d))

# def power(a, n):
#     result = 1
#     for i in range(n):
#         result *= a
#     return result

# a, n = input().split()
# a = float(a)
# n = int(n)

# print(power(a, n))

# def xor(x, y):
#     if (x == 1 and y == 0) or (x == 0 and y == 1):
#         return 1
#     else:
#         return 0

# x, y = map(int, input().split())
# print(xor(x, y))