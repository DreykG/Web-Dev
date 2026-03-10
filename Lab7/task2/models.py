# models.py

class Vehicle:
    def __init__(self, brand: str, year: int, price: float):
        self.brand = brand
        self.year = year
        self.price = price

    def age(self, current_year: int) -> int:
        return current_year - self.year

    def final_price(self) -> float:
        return self.price

    def __str__(self) -> str:
        return f"Vehicle(brand={self.brand}, year={self.year}, price={self.price})"


class Car(Vehicle):
    def __init__(self, brand: str, year: int, price: float, doors: int, fuel: str):
        super().__init__(brand, year, price)
        self.doors = doors
        self.fuel = fuel

    def final_price(self) -> float:
        return self.price * 1.05

    def honk(self) -> str:
        return "Beep beep!"

    def __str__(self) -> str:
        return (
            f"Car(brand={self.brand}, year={self.year}, price={self.price}, "
            f"doors={self.doors}, fuel={self.fuel})"
        )


class Truck(Vehicle):
    def __init__(self, brand: str, year: int, price: float, capacity_tons: float, axles: int):
        super().__init__(brand, year, price)
        self.capacity_tons = capacity_tons
        self.axles = axles

    def final_price(self) -> float:
        return self.price * 1.12

    def load_info(self) -> str:
        return f"Capacity: {self.capacity_tons} tons"

    def __str__(self) -> str:
        return (
            f"Truck(brand={self.brand}, year={self.year}, price={self.price}, "
            f"capacity_tons={self.capacity_tons}, axles={self.axles})"
        )