import {writeFileSync, promises as fsPromises} from 'fs';
import {join} from 'path';

const min:number = 2;
const max:number = 10000;

export class Island {

  //격자 입력받은 m,n으로 2차원배열 생성
  private readonly grid: string[][]

  //a. m x n 의 격자를 생성 (m, n 모두 2 ~ 10000 사이의 정수 )
  constructor(m: number, n: number) {

    if (!(m >= min && m <= max) || !(n >= min && n <= max)) {
      throw new Error('2~10000 사이의 정수를 입력하세요');
    }

    this.grid = Array.from(Array(m), () => Array(n).fill(""));
  }

  // b. generateIsland(n) n개의 점을 격자의 좌표에 삽입. (중복되지 않게 격자 점을 초과 하지 않게, 즉 중첩 불가능)
  // generateIsland 를 여러번 호출 할수 있음, 다만 중복 되지 않음 으로 실제 할당된 갯수를 리턴
  generateIsland = (num: number) => {
    // console.log(`num:${num}`)
    // console.log(`grids:${this.grid}`)

    let tempNum: number = num

    let realCnt: number = 0

    //점이 안찍혀 있는 인덱스 추출
    this.grid.forEach(item => {

      // console.log(item)

      if (tempNum == 0) return

      for (let i = 0; i < item.length; i++) {

        if (item[i] == '') {
          item[i] = '·'
          tempNum--
          realCnt++

          if (tempNum == 0) return
        }

      }

    });

    // console.log(this.grid)

    return realCnt
  }

  //c. removeIsland(n) n개 만큼의 좌표에서 섬을 제거, 남은 섬 만큼만 제거 가능, 위와 같이 실제 삭제된 점 갯수 리턴
  removeIsland = (num: number) => {

    let tempNum: number = num

    let deleteCnt: number = 0

    this.grid.forEach(item => {

      if (tempNum == 0) return

      for (let i = 0; i < item.length; i++) {

        if (item[i] == '·') {
          item[i] = ''
          tempNum--
          deleteCnt++

          if (tempNum == 0) return
        }

      }

    });

    return deleteCnt

  }


  //d. 위의 격자와 섬좌표를 파일에 write 처리
  writeFile = (filename: string) => {

    writeFileSync(join(__dirname, filename), JSON.stringify(this.grid), {
      flag: 'w',
    });

  }

  //d. 위의 격자와 섬좌표를 파일에 read 처리
  async asyncReadFile(filename: string) {
    try {
      const result = await fsPromises.readFile(
          join(__dirname, filename),
          'utf-8',
      );

      // console.log(result);

      return result;
    } catch (err) {
      console.log(err);
      return '파일을 읽는데에 실패하였습니다.'
    }
  }

}