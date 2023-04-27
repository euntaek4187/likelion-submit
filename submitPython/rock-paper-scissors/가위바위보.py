import random

rsp = ["묵", "찌", "빠"]

while True:
    print("입력 양식은 묵, 찌, 빠 입니다. 입력 하세요: ")
    print("종료를 원하시면 x를 입력해주세요. ")
    myHand = input()

    if myHand == "x":
        print("종료합니다. ")
        break
    

    if myHand not in rsp:
        print("잘못된 입력입니다. 다시 입력해주세요 ")
        continue
    
    ranNum = random.randint(0, 2)
    computerHand = rsp[ranNum]

    if myHand == computerHand:
        print("비겼습니다.")
    elif (myHand == "묵" and computerHand == "찌") or (myHand == "찌" and computerHand == "빠") or (myHand == "빠" and computerHand == "묵"):
        print("컴퓨터의 선택:", computerHand)
        print("나의 승리")
    else:
        print("컴퓨터의 승리")
