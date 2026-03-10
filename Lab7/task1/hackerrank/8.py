def wrap(string, max_width):
    lines = []
    for i in range(0, len(string), max_width):
        lines.append(string[i:i+max_width])
    return "\n".join(lines)