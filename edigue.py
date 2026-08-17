while True:
    print("-----------------")
    n = [int(input("Digite um número: ")), int(input("Digite outro número: "))]
    operador = input("\nQual operador você usará? (+,-,*,/) ")

    if operador == "+":
        conta = n[0] + n[1]
        print("\nResultado= " + str(conta))
    elif operador == "-":
        conta = n[0] - n[1]
        print("\nResultado= " + str(conta))
    elif operador == "*":
        conta = n[0] * n[1]
        print("\nResultado= " + str(conta))
    elif operador == "/":
        conta = n[0] / n[1]
        print("\nResultado= " + str(conta))
    else:
        print("\nInsira um operador válido!")

    breakLoop = input("Você deseja encerrar o programa? (se sim, digite 'Y') ")
    if breakLoop == "Y" or "y":
        break

