
import pandas as pd
from IPython.core.display import HTML

# Initial data
kodolt_makrotapanyagok = {
    1: ["Karalábé", {"energia": 27, "fehérje": 1.7, "zsír": 0.1, "szénhidrát": 2.6}],
    2: ["Répa", {"energia": 41, "fehérje": 0.9, "zsír": 0.2, "szénhidrát": 6.8}],
    3: ["Étolaj", {"energia": 900, "fehérje": 0, "zsír": 100, "szénhidrát": 0}],
    4: ["Vöröshagyma", {"energia": 40, "fehérje": 1.1, "zsír": 0.1, "szénhidrát": 7.6}],
    5: ["Passata di pomodoro", {"energia": 24, "fehérje": 1, "zsír": 0.1, "szénhidrát": 4.7}],
    6: ["Prímhús darált sertéshús 30%", {"energia": 327, "fehérje": 15.8, "zsír": 29.2, "szénhidrát": 0.3}]
}

# Define the header for the tables
header = """<tr>
    <th>Kód</th>
    <th>Alapanyag</th>
    <th>Tömeg (g)</th>
    <th>Részarány</th>
    <th>Energia (kcal/100g)</th>
    <th>Fehérje (g/100g)</th>
    <th>Zsír (g/100g)</th>
    <th>Szénhidrát (g/100g)</th>
</tr>"""

header_final_dish = """<tr>
    <th>Alapanyag</th>
    <th>Tömeg (g)</th>
    <th>Energia (kcal/100g)</th>
    <th>Fehérje (g/100g)</th>
    <th>Zsír (g/100g)</th>
    <th>Szénhidrát (g/100g)</th>
</tr>"""


def format_ingredients_table(input_data):
    ingredients = input_data['ingredients']
    total_tomeg = sum(ingredients.values())
    rows = []
    for kod, tomeg in ingredients.items():
        alapanyag = kodolt_makrotapanyagok[kod][0]
        makrok = kodolt_makrotapanyagok[kod][1]
        arany = (tomeg / total_tomeg) * 100
        row = f"<tr><td>{kod}</td><td>{alapanyag}</td><td>{tomeg}</td><td>{arany:.2f}%</td><td>{makrok['energia']}</td><td>{makrok.get('fehérje', 0)}</td><td>{makrok.get('zsír', 0)}</td><td>{makrok.get('szénhidrát', 0)}</td></tr>"
        rows.append(row)

    table = f"<table>{header}{''.join(rows)}</table>"
    return table


def format_final_dish_table(input_data):
    ingredients = input_data['ingredients']
    final_tomeg = input_data['finalWeight']
    total_makrok = {
        "energia": 0,
        "fehérje": 0,
        "zsír": 0,
        "szénhidrát": 0
    }

    for kod, tomeg in ingredients.items():
        makrok = kodolt_makrotapanyagok[kod][1]
        for key in total_makrok.keys():
            if key in makrok:
                total_makrok[key] += (makrok[key] * tomeg) / 100

    aranyositott_makrok = {
        makro: (ertek * 100) / final_tomeg for makro, ertek in total_makrok.items()}
    row = f"<tr><td>Kész étel</td><td>{final_tomeg}</td><td>{aranyositott_makrok['energia']:.2f}</td><td>{aranyositott_makrok['fehérje']:.2f}</td><td>{aranyositott_makrok['zsír']:.2f}</td><td>{aranyositott_makrok['szénhidrát']:.2f}</td></tr>"
    table = f"<table>{header_final_dish}{row}</table>"
    return table


if __name__ == "__main__":
    input_data = {
        'ingredients': {1: 500, 4: 750, 6: 875},
        'finalWeight': 1900
    }

    # Save the output tables to a file
    with open("output.txt", "w") as file:
        # Writing Ingredients Table
        file.write("Ingredients Table:\n")
        file.write(format_ingredients_table(input_data))
        file.write("\n")

        # Writing Final Dish Table
        file.write("Final Dish Table:\n")
        file.write(format_final_dish_table(input_data))

    print("Output written to 'output.txt'.")