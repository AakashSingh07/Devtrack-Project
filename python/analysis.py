import json

with open('../data/progress.json', 'r') as file:
    data = json.load(file)

labels = data['labels']
values = data['values']

print("📊 FreeCodeCamp Progress Report\n")
for label, value in zip(labels, values):
    print(f"{label}: {value}% complete")

average = sum(values) / len(values)
print(f"\nOverall Average Completion: {average:.2f}%")
