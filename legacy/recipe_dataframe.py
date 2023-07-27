import pandas as pd

# Initial data
kodolt_makrotapanyagok = {
    1: ["Karalábé", {"energia": 27, "fehérje": 1.7, "zsír": 0.1, "szénhidrát": 2.6}],
    2: ["Répa", {"energia": 41, "fehérje": 0.9, "zsír": 0.2, "szénhidrát": 6.8}],
    3: ["Étolaj", {"energia": 900, "fehérje": 0, "zsír": 100, "szénhidrát": 0}],
    4: ["Vöröshagyma", {"energia": 40, "fehérje": 1.1, "zsír": 0.1, "szénhidrát": 7.6}],
    5: ["Passata di pomodoro", {"energia": 24, "fehérje": 1, "zsír": 0.1, "szénhidrát": 4.7}],
    6: ["Prímhús darált sertéshús 30%", {"energia": 327, "fehérje": 15.8, "zsír": 29.2, "szénhidrát": 0.3}]
}

import pandas as pd

def format_ingredients_dataframe(input_data):
    ingredients = input_data['ingredients']
    total_tomeg = sum(ingredients.values())

    total_energia = 0
    total_fehérje = 0
    total_zsír = 0
    total_szénhidrát = 0

    data = []
    for kod, tomeg in ingredients.items():
        alapanyag = kodolt_makrotapanyagok[kod][0]
        makrok = kodolt_makrotapanyagok[kod][1]
        arany = round((tomeg / total_tomeg) * 100, 1)
        total_energia += makrok['energia'] * tomeg
        total_fehérje += makrok.get('fehérje', 0) * tomeg
        total_zsír += makrok.get('zsír', 0) * tomeg
        total_szénhidrát += makrok.get('szénhidrát', 0) * tomeg
        row = [kod, alapanyag, tomeg, arany, makrok['energia'], makrok.get('fehérje', 0), makrok.get('zsír', 0), makrok.get('szénhidrát', 0)]
        data.append(row)

    # Az "Összes" sorhoz az adatok 100 grammonkénti értékeit számoljuk
    data.append(['Hozzávalók összesen', 'N/A', f"{total_tomeg}g", '100%', 
                 f"{round(total_energia / total_tomeg, 2)}kcal/100g", 
                 f"{round(total_fehérje / total_tomeg, 2)}g/100g", 
                 f"{round(total_zsír / total_tomeg, 2)}g/100g", 
                 f"{round(total_szénhidrát / total_tomeg, 2)}g/100g"])

    df = pd.DataFrame(data, columns=['Kód', 'Alapanyag', 'Tömeg (g)', 'Részarány', 'Energia (kcal/100g)', 'Fehérje (g/100g)', 'Zsír (g/100g)', 'Szénhidrát (g/100g)'])
    return df


def format_final_dish_dataframe(input_data):
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
        makro: round((ertek * 100) / final_tomeg, 1) for makro, ertek in total_makrok.items()}
    data = [["Kész étel", final_tomeg, aranyositott_makrok['energia'], aranyositott_makrok['fehérje'], aranyositott_makrok['zsír'], aranyositott_makrok['szénhidrát']]]
    df = pd.DataFrame(data, columns=['Alapanyag', 'Tömeg (g)', 'Energia (kcal/100g)', 'Fehérje (g/100g)', 'Zsír (g/100g)', 'Szénhidrát (g/100g)'])
    return df

if __name__ == "__main__":
    input_data = {
        'ingredients': {6: 1000, 5: 1030, 4: 336, 3: 20,  2: 620, 1: 960},
        'finalWeight': 2735
    }

    # Displaying the ingredients table
    print("Ingredients Table:")
    print(format_ingredients_dataframe(input_data))

    # Displaying the final dish table
    print("\nFinal Dish Table:")
    print(format_final_dish_dataframe(input_data))
