# main.py

from models import Vehicle, Car, Truck


vehicles = [
    Vehicle("Generic", 2018, 12000),
    Car("Toyota", 2020, 20000, 4, "Petrol"),
    Truck("Volvo", 2016, 55000, 12.5, 4),
    Car("Tesla", 2022, 45000, 4, "Electric"),
    Truck("MAN", 2019, 65000, 18.0, 6),
]

current_year = 2026

for v in vehicles:
    print(v)
    print("Age:", v.age(current_year))
    print("Final price:", v.final_price())
    print("-" * 30)