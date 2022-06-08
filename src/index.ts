//격자 생성
import {Island} from "./island";

/**
 * 문제
 * 요구사항
   - 단일코드가 아닌 OOP구조로 요청. (예] 생성기, 쿼리처리자, 복사처리자, 파일관리자, 시리얼라이저 등) 섬 관리 시스템 개발
   - a. m x n 의 격자를 생성 (m, n 모두 2 ~ 10000 사이의 정수 )
   - b. generateIsland(n) n개의 점을 격자의 좌표에 삽입. (중복되지 않게 격자 점을 초과 하지 않게, 즉 중첩 불가능)
        generateIsland 를 여러번 호출 할수 있음, 다만 중복 되지 않음 으로 실제 할당된 갯수를 리턴
   - c. removeIsland(n) n개 만큼의 좌표에서 섬을 제거, 남은 섬 만큼만 제거 가능, 위와 같이 실제 삭제된 점 갯수 리턴
   - d. 위의 격자와 섬좌표를 파일에 read/write 처리
 */

let row = 100;
let column = 3;

const filePath = './test.txt';

const island = new Island(row, column)

let startNum:number = 0

//여러 번 호출을 함수 자체는 여러번 콜해도 중복으로 안찍게 하였습니다만 이게 맞는지 모르겠습니다.
while (startNum < row * column) {

  island.generateIsland(startNum)
  startNum++

}


// island.removeIsland(4)
// console.log(island.getGrid())

island.writeFile(filePath)

island.asyncReadFile(filePath).then(r => console.log(r))



