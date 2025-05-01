const serverData = [
  {
    id: 1,
    name: 'jiwon',
  },
  {
    id: 2,
    name: '김수민',
  },
  {
    id: 3,
    name: '박지한',
  },
  {
    id: 4,
    name: 'jiwon',
  },
];
//기존콜백방식
// function getUser(data, succesCallback, errorCallback) {
//     //일반함수내에서 비동기작업 실행
//     setTimeout(() => {
//         // 완료 후 callback을 통한 데이터 전달
//         const user = serverData.filter(u => u.id === data.id);
//         if (user.length > 0) succesCallback(user);
//         else errorCallback("user을 찾을 수 없습니다.")
//     }, 3000)
// }

// getUser(
//     { id: 1 },
//     (user) => {
//         console.log(user);
//     },
//     (errorMsg) => {
//         console.log(errorMsg)
//     }
// )

function getUser(data) {
  // Promise => 비동기작업을 실행해줄 객체
  return new Promise((resolve, reject) => {
    //resolve : 성공시 실행할 줄 함수
    //reject : 실패시 실행할 함수

    //Promise 내에서 비동기 함수 실행
    setTimeout(() => {
      // 완료 후 callback을 통한 데이터 전달
      const user = serverData.filter((u) => u.id === data.id);

      if (user.length > 0) resolve(user);
      else reject('user을 찾을 수 없습니다.');
    }, 3000);
  });
}

// getUser(serverData)
//     .then(result => {
//         console.log("tnen 결과 : ", result);
//     })
//     .catch(error =>{
//         console.log("tnen 결과 : ", error);
//     })
//     .finally(() => {
//         console.log("finally 실행")
//     }
// );

async function testAsync() {
  try {
    const result = await getUser({ id: 5 });
    console.log('then 결과 : ', result);
  } catch (error) {
    console.log('catch 결과 : ', error);
  } finally {
    console.log('async/await 실행완료');
  }
}

testAsync();
