# AJAX HOOKER
## 실행방법
※ 프로젝트 간단히 실행방법 (Express 로 배포파일 실행)
```
1. $ node index.js
2. 웹브라우저로 https://web-eottc.run.goorm.io 접속!
```
## 소개
```
1. 소속 : 제3야전군 5군단 6사단 정보통신대대

2. 계급 : 상병

3. 성명 : 손지호

4. 프로젝트 명: AJAX HOOKER

5. 프로젝트 설명:
	- iframe 태그로 다른 웹사이트에 연결해서 해당 웹페이지에서 생성되는 AJAX요청을 가로채서 다양한UI로 나타내주는 프로젝트입니다.

6. 주요 완료 기능 :
	- Table 형태로 요청된 Ajax Request를 보여주는 기능 (UI만 구현)
	- 다양한 chart로 요청된 Request를 보여주는 기능
	- 사용자가 직접 해당 페이지에서 REST request를 생성시키는 기능(UI만 구현)

7. 미완료기능 :
	- 실제 AJAX Request를 얻어서 보여주는 기능 (iframe의 javascript영역을 접근하기 어려움)
	- 다양한 분석형태로 보여주는 Graph 기능 (현재 간단히 REST Method종류별로 빈도수만 나타냈습니다.)

8. 향후 계획 :
	- 프로젝트를 진행하던 중 특정웹페이지에서 AJAX요청을 가로채기까지는 성공했으나 iframe안에서의 요청을 가로채는 부분을 구현하기 불가능한 것을 확인했습니다.

	- (프로젝트 변경) 웹페이지에서 자체적으로 REST API를 테스트할 수 있는 어플리케이션으로 변경할 계획
```

## 실행화면
![main](/workspce/web/image/main.jpg)
![graph](/workspce/web/image/graph.jpg)
![request](/workspce/web/image/request.jpg)



# ajax-hooker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```


//Vue CLI
npm install @vue/cli -g

