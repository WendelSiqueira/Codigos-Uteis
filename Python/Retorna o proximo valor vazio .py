def next_empty_value(list):
	for val in list:
		if (list[list.index(val) + 1] - val == 1):
			continue
		else:
			return val + 1
#Retorna o proximo valor vazio disponivel em uma sequencia de numeros recebendo uma  lista ordenada
