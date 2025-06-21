from gtts import gTTS  # gTTS 모듈에서 gTTS 클래스를 import합니다.
from playsound import playsound  # playsound 모듈에서 playsound 함수를 import합니다.
import speech_recognition as sr  # SpeechRecognition 모듈을 sr이라는 이름으로 import합니다.
import requests  # requests 모듈을 import합니다.
from datetime import datetime  # datetime 모듈에서 datetime 클래스를 import합니다.

API_KEY = ""

r = sr.Recognizer()  # Recognizer 클래스의 객체를 생성합니다.
end = False  # 종료 여부를 나타내는 변수를 False로 초기화합니다.
cnt = 1  # 파일 이름에 사용될 숫자를 초기화합니다.

while not end:  # end가 False일 때까지 반복합니다.
    with sr.Microphone() as source:  # 마이크를 source로 설정합니다.
        print("녹음 시작")  # 녹음을 시작한다는 메시지를 출력합니다.
        audio = r.listen(source)  # 마이크로부터 음성을 듣습니다.
        print("녹음 끝")  # 녹음이 끝났다는 메시지를 출력합니다.

    try:
        text = r.recognize_google(audio, language='ko')  # Google 웹 API를 사용하여 음성을 텍스트로 변환합니다.
        print(text)  # 변환된 텍스트를 출력합니다.
        
        # 기계 학습을 위한 API를 호출하여 텍스트를 분류합니다.
        url = "https://machinelearningforkids.co.uk/api/scratch/" + API_KEY + "/classify"
        response = requests.get(url, params={"data": text})  # 분류를 위한 API를 호출합니다.
        
        if response.ok:  # 응답이 성공적으로 받아졌다면
            responseData = response.json()  # JSON 형식으로 응답을 가져옵니다.
            topMatch = responseData[0]  # 가장 높은 확률로 매칭된 결과를 가져옵니다.
        else:  # 응답이 실패한 경우
            response.raise_for_status()  # 에러를 발생시킵니다.
        
        label = topMatch["class_name"]  # 가장 높은 확률로 매칭된 항목의 이름을 가져옵니다.
        confidence = topMatch["confidence"]  # 해당 항목에 대한 신뢰도를 가져옵니다.
        
        print(f"[인공지능 인식 결과]: {label} {confidence}%")  # 인식 결과와 신뢰도를 출력합니다.
        
        # 신뢰도에 따라 적절한 대답을 선택합니다.
        if confidence < 60:  
            answer = "잘 모르겠습니다."
        elif label == "hello":
            answer = "안녕하세요. 반갑습니다."
        elif label == "time":
            answer = f"지금은 {datetime.now().strftime('%H시 %M분')}입니다."
        elif label == "weather":
            answer = "날씨가 좋아요."
        elif label == "meal":
            answer = "맛있어요"
        elif label == "exit":
            answer = "네, 종료하겠습니다."
            end = True  # 종료를 위해 end 변수를 True로 변경합니다.
    
        speech = f"answer{cnt}.mp3"  # 음성 파일의 이름을 지정합니다.
        tts = gTTS(answer, lang="ko")  # 대답을 한국어로 음성으로 변환합니다.
        tts.save(speech)  # 음성 파일로 저장합니다.
        playsound(speech)  # 음성 파일을 재생합니다.
        cnt += 1  # 파일 이름에 사용될 숫자를 증가시킵니다.
        
    except sr.UnknownValueError:  # 음성 인식에 실패한 경우
        print("인식 실패")
        
    except sr.RequestError as e:  # 음성 인식 요청이 실패한 경우
        print(f"요청 실패: {e}")