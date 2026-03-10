if __name__ == '__main__':
    n = int(input())
    records = []

    for _ in range(n):
        name = input()
        grade = float(input())
        records.append([name, grade])

    grades = sorted(set([r[1] for r in records]))
    second_lowest = grades[1]

    result = sorted([r[0] for r in records if r[1] == second_lowest])

    for name in result:
        print(name)