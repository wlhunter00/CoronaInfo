import sys
import json
user_text = str(sys.argv[1])
user_text = user_text.split()
for i in user_text:
	i = i.lower()

with open('./../../backend/data/Symptom-Percentages.json', encoding = 'utf-8') as F:
	json_data = json.loads(F.read())

found_sym = []
found_perc = []
for point in json_data:
	if point['Symptom'].lower() in user_text:
		found_sym.append(point['Symptom'].lower())
		found_perc.append(point['Percentage'])

print(found_sym, found_perc)x

def argmax(iterable):
    return max(enumerate(iterable), key=lambda x: x[1])[0]

req = []
l = len(found_perc)
count = 0

for i in range((l>0)*l):
    ind = argmax(found_perc)
    print(found_perc, found_sym)
    del found_perc[ind]
    req.append(found_sym.pop(ind))
    count+=1
    if count >= 3:
    	break
if l == 0:
	print("No matches found")
else:
	s = ""
	print(req)
	for i in req:
		s = s + i + ";"
	print(s)
