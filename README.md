
#사전인터뷰 답변 

##코딩은 언제 시작 하셨는지요?
- 부천대학교에서 전산과라서 1~2학년때는 흥미가 별로 없어서 밴드부 생활하다가 군대 다녀와서 직접 
코딩해보고 결과를 바로바로 확인해보고 나서 그때부터 흥미를 가지게 된것 같습니다.

##Github등에 가장 지원자님의 설계와 구조, 코드를 파악할수 있는 프로젝트가 있는지요? (개인코드면 더 좋습니다.)
- [최근에 serverless 프레임워크를 가지고 nestjs로 서버리스 구축한 샘플 코드입니다.](https://github.com/deasung/blueprint-aws-serverless-api-nestjs)

##간단한 링크드 리스트나 해시테이블 구현 하는 코드 가능 하신지요?
- 개념은 알고있지만 직접 구현하려면 구글링을 좀 해야할것 같습니다.

##알고리즘과 코드 학습을 꾸준히 하시는지요?
- 최근 들어서 알고리즘을 더욱 열심히 하고 있고 코드 관련은 인프라 관련된 ci 관련된 설정 코드 및 최근들어
회사에서 nestjs로 admin 및 서버리스 관련된 코드 작성하느라 nestjs 및 타입스크립트 관련 강의? 듣고 있습니다.


##가장 자신있게 보여줄 코드가 별도로 있으신지요?
자신이 있는지는 모르겠지만 프로토콜버퍼 공통 모듈 클래스에서 특정 함수 로직입니다.
```kotlin
   /*
    * DTO to protoBuf convert
    */
    fun getObjectToProtoBuf(obj: Any?, builder: Builder, isDebug: Boolean, type: String?): ProtocolBufMessageDTO? {
        return try {
//            val gson = Gson()
            val gson = GsonBuilder()
                .addSerializationExclusionStrategy(NoModuleExclusionStrategy(false))
                .addDeserializationExclusionStrategy(NoModuleExclusionStrategy(true))
                .create()

            var json = gson.toJson(obj)
            val parameters = gson.fromJson(json, JsonObject::class.java)
            json = parameters.toString()
            val protobufBase64: ByteArray = convertJsonToProto(builder, json)!!.toByteArray()
            val resultProtoBuf = ProtocolBufMessageDTO()
            resultProtoBuf.type = type
            resultProtoBuf.data = protobufBase64
            if (isDebug == true) {
                resultProtoBuf.json = json
            }
            resultProtoBuf
        } catch (e: Exception) {
            Sentry.captureException(e)
            return null
        }
    }
```

##하루에 코딩과 학습을 얼마나 하시는지요?
- 최근들어 인프런 및 nodejs 및 타입스크립트 관련 강좌를 많이 보고 있습니다.
- 사이드 플젝은 프런트까지 해야해서 주로 플러터로 간략히만..짜봅니다.

##지난 6개월간 보신 기술서적이 무엇이 있으신지요?
- 블로그에 서적 리뷰 이벤트로 한달에 한번씩 책을 보고 있습니다
  - 쉽고 빠른 플러터 앱 개발
  - 코틀린 완벽 가이드 
  - 고객을 끌어오는 구글 애널리틱스 4
  - 그래프QL 인 액션
  - 스벨트로 시작하는 웹 프런트엔드
  - 보고서 작성 실무 강의


##좋은 코드를 만드는데 가장 신경 쓰는 부분이 어느 부분인지요?

##Nodejs 서비스를 개발 하시게 됩니다. 문제가 없을런지요?
- 자바 개발자로 지원한거 같긴한데 ? [작당모의(잼페이스)자격요건](https://www.wanted.co.kr/wd/102296) 
으로 지원한거 같지만 그래도 최근들어 자바로 하기 힘든 업무는 대부분 노드로 하고 있어서 
만약에 입사하게 된다면 부족한점은 직접 물어보면서 업무를 하면 될것 같습니다.