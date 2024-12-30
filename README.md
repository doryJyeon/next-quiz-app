# Next Quiz App 

[구현 사이트 이동](https://jyeon-next-quiz-app.vercel.app/)

Next14  
Pc / Tablet / Mobile

## 실행 방법
#### APIKEY 추가
실행 전 [QuizAPI](https://quizapi.io/register)에서 APIKEY 발급 후 /.env에 추가가 필요합니다.
```
// /.env 파일
NEXT_PUBLIC_QUIZ_API_KEY = "YOUR KEY"
```
#### 실행
```
// npm install
npm i
npm run dev

// localhost 접속
localhost:3000
```

## 구현 화면
### Info
![image](https://github.com/user-attachments/assets/7eedd376-6209-49da-b1b5-5e1cfa6fad3c)<br />
기본 첫 페이지로 각 메뉴가 어떤 퀴즈를 풀 수 있는지 알려줍니다.

### Quiz
![answer-check](https://github.com/user-attachments/assets/9b2b821d-61ed-4b3d-a169-b3c4bd6498ba)<br />
퀴즈는 영어로 제공되며 답 선택 후 제공되는 버튼을 통해 즉시 정답 확인이 가능합니다.

* category <br />![image](https://github.com/user-attachments/assets/38cd5810-331f-43a2-be12-cf0e4f8692fa)
* tags <br />![image](https://github.com/user-attachments/assets/3e69bc3a-36c0-4be3-8095-53516f4c96a8)
