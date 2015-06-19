def diff(list):
	for val in list:
		if (list[list.index(val) + 1] - val == 1):
			continue
		else:
			return val + 1 

list = [1 , 2, 3, 4, 5 ,10]

print diff(list)


#Retorna o proximo valor vazio numa lista ordenada
